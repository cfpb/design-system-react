import type { KeyboardEvent, Ref } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';
import type {
  GroupBase,
  InputActionMeta,
  Props,
  PropsValue,
  SelectInstance
} from 'react-select';
import SelectRS, { components, createFilter } from 'react-select';
import { Icon } from '../Icon/Icon';
import { Label } from '../Label/Label';
import './Select.less';
import type { SelectOption, SelectProperties } from './Select.types';
import CheckboxInputOption from './SelectInputWithCheckbox';
import { SelectPills } from './SelectPills';
import { extendedSelectStyles } from './styles';
import { filterOptions, onSelectInputFocus } from './utils';

const customDropdownIndicator = (properties): JSX.Element => {
  const shouldBeUp = Boolean(properties.selectProps.menuIsOpen);
  return (
    <components.DropdownIndicator {...properties}>
      <Icon name={shouldBeUp ? 'up' : 'down'} />
    </components.DropdownIndicator>
  );
};

/**
 * A select input component that supports multi-select.
 *
 * Passing the `value` prop makes the select a controlled component.
 * @returns JSX.Element
 */
export function Select<
  OptionType,
  IsMulti extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
>({
  error,
  id,
  isMulti,
  label = 'Select w/ Multi-select',
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
}: Props<OptionType, IsMulti, GroupType> & SelectProperties): JSX.Element {
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
        <SelectPills
          selectRef={selectReference}
          selected={value}
          isMulti={isMulti}
          onChange={onSelectionChange}
          showClearAllSelectedButton={showClearAllSelectedButton}
          labelClearAll={labelClearAll}
        />
      )}
      <SelectRS
        customProps={customProps} // can be passed down to custom components
        id={`${id}-select`}
        aria-labelledby={labelID}
        className='o-multiselect'
        classNames={{
          control: () => (error ? `select-control--error` : `select-control`),
          indicatorSeparator: state =>
            `select-indicator-separator ${
              state.selectProps.isClearable && state.hasValue
                ? ''
                : 'select-indicator-separator__none'
            }`,
          indicatorsContainer: () =>
            `select-indicators-container ${
              error ? 'select-indicators-container--error' : ''
            }`,
          dropdownIndicator: () => 'select-dropdown-indicator',
          singleValue: () => 'select-single-value',
          valueContainer: () =>
            `select-value-container ${
              error
                ? 'select-value-container--error'
                : 'select-value-container--success'
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
        <SelectPills
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

export default Select;
