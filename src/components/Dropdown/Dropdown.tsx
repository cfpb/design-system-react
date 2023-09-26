import type { KeyboardEvent, Ref } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';
import type {
  GroupBase,
  InputActionMeta,
  Props,
  PropsValue,
  SelectInstance
} from 'react-select';
import Select, { components, createFilter } from 'react-select';
import { Label } from '../Label/Label';
import './Dropdown.less';
import type { DropdownProperties, SelectOption } from './Dropdown.types';
import CheckboxInputOption from './DropdownInputWithCheckbox';
import { DropdownPills } from './DropdownPills';
import { extendedSelectStyles } from './styles';
import { filterOptions, onSelectInputFocus } from './utils';

import { Icon } from '../Icon/Icon';

const customDropdownIndicator = (properties): JSX.Element => (
  <components.DropdownIndicator {...properties}>
    <Icon name='down' />
  </components.DropdownIndicator>
);

/**
 * A dropdown input component that supports multi-select.
 *
 * Passing the `value` prop makes the dropdown a controlled component.
 * @returns JSX.Element
 */
export function Dropdown<
  OptionType,
  IsMulti extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
>({
  error,
  id,
  isMulti,
  label = 'Dropdown w/ Multi-select',
  labelClearAll = 'Clear All Selected Institutions',
  onSelect,
  options,
  pillAlign = 'top',
  value,
  withCheckbox = false,
  isClearable = false, // Show/Hide react-select X in select input that clears all selections
  showClearAllSelectedButton = true,
  className = '',
  ...properties
}: DropdownProperties & Props<OptionType, IsMulti, GroupType>): JSX.Element {
  const [searchString, setSearchString] = useState<string>('');

  // Retain user search input between interactions
  const onInputChange = (inputValue: string, event: InputActionMeta): void => {
    if (event.action !== 'input-change') return;
    setSearchString(inputValue);
  };

  const selectReference = useRef<SelectInstance>(null);

  // Store updated list of selected items
  const onSelectionChange = useCallback(
    (option: PropsValue<SelectOption>) => {
      onSelect(option);
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

  // eslint-disable-next-line unicorn/prevent-abbreviations
  const customProps = useMemo(
    () => ({
      withCheckbox,
      showClearAllSelectedButton,
      pillAlign
    }),
    [withCheckbox, showClearAllSelectedButton, pillAlign]
  );

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
          selected={value}
          isMulti={isMulti}
          onChange={onSelectionChange}
          showClearAllSelectedButton={showClearAllSelectedButton}
          labelClearAll={labelClearAll}
        />
      )}
      <Select
        customProps={customProps} // can be passed down to custom components
        id={`${id}-select`}
        aria-labelledby={labelID}
        className='o-multiselect'
        classNames={{
          control: () =>
            error ? `dropdown-control--error` : `dropdown-control`,
          indicatorSeparator: state =>
            `dropdown-indicator-separator ${
              state.selectProps.isClearable && state.hasValue
                ? ''
                : 'dropdown-indicator-separator__none'
            }`,
          indicatorsContainer: () => 'dropdown-indicators-container',
          dropdownIndicator: () => 'dropdown-dropdown-indicator',
          valueContainer: () =>
            `dropdown-value-container ${
              error
                ? 'dropdown-value-container--error'
                : 'dropdown-value-container--success'
            }`
        }}
        closeMenuOnSelect={!isMulti}
        controlShouldRenderValue={!isMulti}
        components={{
          Option: CheckboxInputOption,
          DropdownIndicator: customDropdownIndicator
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
        options={filterOptions(options, value, Boolean(isMulti), withCheckbox)}
        ref={selectReference as Ref<any>}
        styles={extendedSelectStyles}
        tabSelectsValue={false}
        value={value}
        {...properties}
      />
      {pillAlign === 'bottom' && (
        <DropdownPills
          isMulti={isMulti}
          onChange={onSelectionChange}
          pillAlign='bottom'
          selected={value}
          selectRef={selectReference}
          showClearAllSelectedButton={showClearAllSelectedButton}
          labelClearAll={labelClearAll}
        />
      )}
    </div>
  );
}

export default Dropdown;
