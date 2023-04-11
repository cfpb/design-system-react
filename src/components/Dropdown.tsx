/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable unicorn/no-null */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import type {
  CSSObjectWithLabel,
  ControlProps,
  GroupBase,
  OnChangeValue,
  OptionsOrGroups,
  PropsValue
} from 'react-select';
import Select, { createFilter } from 'react-select';
import { Icon } from './Icon';
import { Label } from './Label';

interface SelectOption {
  value: number | string;
  label: string;
  onSelect?: () => void;
}

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
 * Utility Functions
 */

function onCloser(
  index: number,
  onChange: (result: PropsValue<SelectOption>) => void,
  selected?: PropsValue<SelectOption>
): MouseEventHandler<HTMLButtonElement> {
  return () => {
    if (!selected || !Array.isArray(selected)) return;
    const result = selected.filter((_, index_) => index_ !== index);
    onChange(result);
  };
}

const onKeyCloser = (
  event: React.KeyboardEvent<HTMLButtonElement>,
  functionClose: MouseEventHandler<HTMLButtonElement>
): void => {
  const validKeys = ['Enter', 'Delete', 'Backspace'];
  if (validKeys.includes(event.key)) functionClose();
};

const filterOptions = (
  options: PropsValue<SelectOption>,
  selected: PropsValue<SelectOption>,
  isMulti: boolean
): OptionsOrGroups<SelectOption, GroupBase<SelectOption>> => {
  if (!selected || !options)
    return options as OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;

  if (isMulti)
    return (options as SelectOption[]).filter(
      o => !(selected as SelectOption[]).map(s => s.value).includes(o.value)
    );

  return options as OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;
};

/**
 * Supporting Components
 */

interface PillProperties {
  value: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
}
const Pill = ({ value, onClose }: PillProperties): JSX.Element => (
  <li className='pill'>
    <button
      type='button'
      onClick={onClose}
      onKeyDown={(event): void => onKeyCloser(event, onClose)}
    >
      <Label htmlFor={value} inline>
        {value}
        <div>
          <Icon name='error' />
        </div>
      </Label>
    </button>
  </li>
);

interface PillsProperties {
  selected: PropsValue<SelectOption>;
  isMulti: boolean;
  onChange: (event: PropsValue<SelectOption>) => void;
}
const Pills = ({
  selected,
  isMulti,
  onChange
}: PillsProperties): JSX.Element | null => {
  if (
    !isMulti ||
    !selected ||
    !Array.isArray(selected) ||
    selected.length === 0
  )
    return null;

  return (
    <ul className='o-multiselect_choices pills'>
      {selected.map(({ value, label }: SelectOption, index: number) => (
        <Pill
          key={value}
          value={label}
          onClose={onCloser(index, onChange, selected)}
        />
      ))}
    </ul>
  );
};

interface DropdownProperties {
  isMulti: boolean;
  options: SelectOption[];
  defaultValue?: PropsValue<SelectOption>;
  id: string;
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

  // Store updated list of selected items
  const onChange = (option: PropsValue<SelectOption>): void => {
    onSelect(option);
    setSelected(option);
  };

  return (
    <div className='m-form-field m-form-field__select'>
      {!!label && <Label htmlFor={id}>{label}</Label>}
      <Pills selected={selected} isMulti={isMulti} onChange={onChange} />
      <Select
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
