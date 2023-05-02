import type { KeyboardEvent } from 'react';
import { useRef, useState } from 'react';
import type {
  CSSObjectWithLabel,
  ControlProps,
  GroupBase,
  OnChangeValue,
  OptionsOrGroups,
  PropsValue
} from 'react-select';
import Select, { createFilter } from 'react-select';
import { DropdownPills } from './DropdownPills';
import { Label } from './Label';

export interface SelectOption {
  value: string;
  label: string;
}

// Better align Select wih CFPB styles
const extendedSelectStyles = {
  control: (
    base: CSSObjectWithLabel,
    state: ControlProps<SelectOption, boolean, GroupBase<SelectOption>>
  ): CSSObjectWithLabel => ({
    ...base,
    borderColor: state.isFocused ? '#0072ce' : base.borderColor,
    outline: state.isFocused ? '1px dotted #0072ce !important' : base.outline,
    outlineOffset: state.isFocused ? '3px' : base.outlineOffset,
    '&:hover': {
      borderColor: '#0072ce',
      outline: state.isFocused
        ? '1px dotted #0072ce !important'
        : '1px solid #0072ce !important',
      outlineOffset: state.isFocused ? '3px' : '0'
    }
  })
};

/**
 * For multi-select, hides already selected options.
 *
 * @param options Available options
 * @param selected Selected options
 * @param isMulti Is a multi-select component?
 * @returns A list of selectable options
 */
const filterOptions = (
  options: PropsValue<SelectOption>,
  selected: PropsValue<SelectOption>,
  isMulti: boolean
): OptionsOrGroups<SelectOption, GroupBase<SelectOption>> => {
  if (!selected || !isMulti)
    return options as OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;

  if (isMulti)
    return (options as SelectOption[]).filter(
      o => !(selected as SelectOption[]).map(s => s.value).includes(o.value)
    );

  return options as OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
};

interface DropdownProperties {
  id: string;
  options: SelectOption[];
  isMulti?: boolean;
  defaultValue?: PropsValue<SelectOption>;
  label?: string;
  onSelect: (event: OnChangeValue<SelectOption, boolean>) => void;
  isDisabled?: boolean;
}

/**
 * A dropdown input component that supports multi-select
 * @returns JSX.Element
 */
export function Dropdown({
  isMulti = false,
  options,
  defaultValue,
  id = 'dropdown',
  label = 'Dropdown w/ Multi-select',
  onSelect,
  ...rest
}: DropdownProperties): JSX.Element {
  const [selected, setSelected] = useState<PropsValue<SelectOption>>(
    defaultValue ?? []
  );

  const selectReference = useRef(null);

  // Store updated list of selected items
  function onChange(option: PropsValue<SelectOption>): void {
    onSelect(option);
    setSelected(option);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (event.key === 'Tab' && selectReference.current?.state?.focusedOption) {
      event.preventDefault();
      const direction = event.shiftKey ? 'up' : 'down';
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      selectReference.current.focusOption(direction);
    }
  }

  function onLabelClick(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    selectReference.current?.focus();
  }

  return (
    <div className='m-form-field m-form-field__select'>
      {!!label && (
        <Label htmlFor={id} onClick={onLabelClick}>
          {label}
        </Label>
      )}
      <DropdownPills
        selected={selected}
        isMulti={isMulti}
        onChange={onChange}
      />
      <Select
        openMenuOnFocus
        ref={selectReference}
        tabSelectsValue={false}
        onKeyDown={onKeyDown}
        isMulti={isMulti}
        className='o-multiselect'
        value={selected}
        options={filterOptions(options, selected, isMulti)}
        onChange={onChange}
        filterOption={createFilter({ ignoreAccents: false })}
        controlShouldRenderValue={!isMulti}
        closeMenuOnSelect={!isMulti}
        styles={extendedSelectStyles}
        {...rest}
      />
    </div>
  );
}

export default Dropdown;
