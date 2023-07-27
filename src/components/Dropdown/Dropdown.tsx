import type { KeyboardEvent, Ref } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type {
  CSSObjectWithLabel,
  ControlProps,
  GroupBase,
  InputActionMeta,
  OnChangeValue,
  OptionsOrGroups,
  PropsValue,
  SelectInstance
} from 'react-select';
import Select, { components, createFilter } from 'react-select';
import type { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import { Label } from '../Label/Label';
import CheckboxInputOption from './DropdownInputWithCheckbox';
import { DropdownPills } from './DropdownPills';

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
 * @param showAllOptions Force all options to be displayed for selection
 * @returns A list of selectable options
 */
const filterOptions = (
  options: PropsValue<SelectOption>,
  selected: PropsValue<SelectOption>,
  isMulti: boolean,
  showAllOptions: boolean
): OptionsOrGroups<SelectOption, GroupBase<SelectOption>> => {
  if (showAllOptions || !selected || !isMulti)
    return options as OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;

  return (options as SelectOption[]).filter(
    o => !(selected as SelectOption[]).map(s => s.value).includes(o.value)
  );
};

interface DropdownProperties {
  defaultValue?: PropsValue<SelectOption>;
  id: string;
  isDisabled?: boolean;
  isMulti?: boolean;
  label?: string;
  onSelect: (event: OnChangeValue<SelectOption, boolean>) => void;
  options: SelectOption[];
  pillAlign?: 'bottom' | 'hide' | 'top'; // Display pills below/above the select input or hide them
  showClearAllSelectedButton?: boolean; // Show/Hide our custom 'Clear All...' button
  value?: PropsValue<SelectOption>;
  withCheckbox?: boolean; // Show/Hide checkbox next to optios
}

// Make it easier for the user to delete/edit search text by highlighting all input text onFocus
const onSelectInputFocus = (
  event: React.ChangeEvent<HTMLInputElement>
): void => {
  event.target.select();
};

/**
 * A dropdown input component that supports multi-select.
 *
 * Passing the `value` prop makes the dropdown a controlled component.
 * @returns JSX.Element
 */
export function Dropdown({
  defaultValue,
  id,
  isMulti = false,
  label = 'Dropdown w/ Multi-select',
  onSelect,
  options,
  pillAlign = 'top',
  value,
  withCheckbox = false,
  isClearable = true, // Show/Hide react-select X in select input that clears all selections
  showClearAllSelectedButton = true,
  ...properties
}: DropdownProperties & StateManagerProps): JSX.Element {
  const [searchString, setSearchString] = useState<string>('');
  const [selected, setSelected] = useState<PropsValue<SelectOption>>(
    defaultValue ?? []
  );

  // Retain user search input between interactions
  const onInputChange = (inputValue: string, event: InputActionMeta): void => {
    if (event.action !== 'input-change') return;
    setSearchString(inputValue);
  };

  // Support acting as controlled component
  useEffect(() => {
    if (value) setSelected(value);
  }, [value]);

  const selectReference = useRef<SelectInstance>(null);

  // Store updated list of selected items
  const onSelectionChange = useCallback(
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
      <Label
        id={labelID}
        htmlFor={id}
        onClick={onLabelClick}
        className='u-mt60'
      >
        {label}
      </Label>
      {pillAlign === 'top' && (
        <DropdownPills
          selectRef={selectReference}
          selected={selected}
          isMulti={isMulti}
          onChange={onSelectionChange}
          showClearAllSelectedButton={showClearAllSelectedButton}
        />
      )}
      <Select
        id={`${id}-select`}
        aria-labelledby={labelID}
        className='o-multiselect'
        closeMenuOnSelect={!isMulti}
        controlShouldRenderValue={!isMulti}
        components={{
          Option: withCheckbox ? CheckboxInputOption : components.Option
        }}
        filterOption={createFilter({ ignoreAccents: false })}
        hideSelectedOptions={false}
        inputId={id}
        inputValue={searchString}
        isClearable={isClearable}
        isMulti={isMulti}
        onChange={onSelectionChange}
        onFocus={onSelectInputFocus}
        onInputChange={onInputChange}
        onKeyDown={onKeyDown}
        openMenuOnFocus
        options={filterOptions(options, selected, isMulti, withCheckbox)}
        ref={selectReference as Ref<any>}
        styles={extendedSelectStyles}
        tabSelectsValue={false}
        value={value ?? selected}
        {...properties}
      />
      {pillAlign === 'bottom' && (
        <DropdownPills
          isMulti={isMulti}
          onChange={onSelectionChange}
          pillAlign='bottom'
          selected={selected}
          selectRef={selectReference}
          showClearAllSelectedButton={showClearAllSelectedButton}
        />
      )}
    </div>
  );
}

export default Dropdown;
