import type { KeyboardEvent, Ref } from 'react';
import { useCallback, useRef, useState } from 'react';
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
const customClearIndicator = (properties): JSX.Element => (
  <components.ClearIndicator {...properties}>
    <div className='dropdown-clear-indicator-container'>
      <Icon name='error' />
    </div>
  </components.ClearIndicator>
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
  // defaultValue,
  id,
  isMulti,
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
}: DropdownProperties & Props<OptionType, IsMulti, GroupType>): JSX.Element {
  const [searchString, setSearchString] = useState<string>('');
  // const [selected, setSelected] = useState<PropsValue<SelectOption>>(
  //   defaultValue ?? []
  // );

  // Retain user search input between interactions
  const onInputChange = (inputValue: string, event: InputActionMeta): void => {
    if (event.action !== 'input-change') return;
    setSearchString(inputValue);
  };

  // Support acting as controlled component
  // useEffect(() => {
  //   if (value) setSelected(value);
  // }, [value]);

  const selectReference = useRef<SelectInstance>(null);

  // Store updated list of selected items
  const onSelectionChange = useCallback(
    (option: PropsValue<SelectOption>) => {
      onSelect(option);
      // setSelected(option);
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
          selected={value}
          isMulti={isMulti}
          onChange={onSelectionChange}
          showClearAllSelectedButton={showClearAllSelectedButton}
        />
      )}
      <Select
        id={`${id}-select`}
        aria-labelledby={labelID}
        className='o-multiselect'
        classNames={{
          control: () => `dropdown-control`,
          indicatorSeparator: state =>
            `dropdown-indicator-separator ${
              state.selectProps.isClearable && !state.hasValue
                ? 'dropdown-indicator-separator__none'
                : ''
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
          Option: withCheckbox ? CheckboxInputOption : components.Option,
          ClearIndicator: customClearIndicator,
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
        // menuIsOpen
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
        />
      )}
    </div>
  );
}

export default Dropdown;
