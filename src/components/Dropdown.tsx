import type { KeyboardEvent, Ref } from 'react';
import { useCallback, useRef, useState } from 'react';
import type {
  CSSObjectWithLabel,
  ControlProps,
  GroupBase,
  OnChangeValue,
  OptionsOrGroups,
  PropsValue,
  SelectInstance
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

  return (options as SelectOption[]).filter(
    o => !(selected as SelectOption[]).map(s => s.value).includes(o.value)
  );
};

interface DropdownProperties {
  id: string;
  options: SelectOption[];
  onSelect: (event: OnChangeValue<SelectOption, boolean>) => void;
  isMulti?: boolean;
  defaultValue?: PropsValue<SelectOption>;
  label?: string;
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
  id,
  label = 'Dropdown w/ Multi-select',
  onSelect,
  ...rest
}: DropdownProperties): JSX.Element {
  const [selected, setSelected] = useState<PropsValue<SelectOption>>(
    defaultValue ?? []
  );

  const selectReference = useRef<SelectInstance>(null);

  // Store updated list of selected items
  const onChange = useCallback(
    (option: PropsValue<SelectOption>) => {
      onSelect(option);
      setSelected(option);
    },
    [onSelect]
  );

  const onKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Tab' && selectReference.current?.state.focusedOption) {
      event.preventDefault();
      const direction = event.shiftKey ? 'up' : 'down';
      selectReference.current.focusOption(direction);
    }
  }, []);

  const onLabelClick = useCallback(() => {
    selectReference.current?.focus();
  }, []);

  const labelID = `${id}-label`;

  return (
    <div className='m-form-field m-form-field__select'>
      {!!label && (
        <Label id={labelID} htmlFor={id} onClick={onLabelClick}>
          {label}
        </Label>
      )}
      <DropdownPills
        selected={selected}
        isMulti={isMulti}
        onChange={onChange}
      />
      <Select
        inputId={id}
        aria-labelledby={labelID}
        openMenuOnFocus
        ref={selectReference as Ref<any>}
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
