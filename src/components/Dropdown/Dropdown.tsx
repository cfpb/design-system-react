import type { KeyboardEvent, Ref } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { InputActionMeta, PropsValue, SelectInstance } from 'react-select';
import Select, { components, createFilter } from 'react-select';
import { Label } from '../Label/Label';
import type { DropdownProperties, SelectOption } from './Dropdown.types';
import CheckboxInputOption from './DropdownInputWithCheckbox';
import { DropdownPills } from './DropdownPills';
import { extendedSelectStyles } from './styles';
import { filterOptions, onSelectInputFocus } from './utils';

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
  className = '',
  ...properties
}: DropdownProperties): JSX.Element {
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
    <div className={`m-form-field m-form-field__select ${className}`}>
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
