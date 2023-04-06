/* eslint-disable unicorn/no-null */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { KeyboardEventHandler, MouseEventHandler } from 'react';
import { useState } from 'react';
import type {
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

/**
 * Utility Functions
 */

function onCloser(
  index: number,
  onChange: (result: PropsValue<SelectOption>) => void,
  selected?: PropsValue<SelectOption>
): MouseEventHandler<HTMLDivElement> {
  return () => {
    if (!selected || !Array.isArray(selected)) return;
    const result = selected.filter((_, index_) => index_ !== index);
    onChange(result);
  };
}

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
  onClose: MouseEventHandler<HTMLDivElement>;
  onDelete?: KeyboardEventHandler<HTMLDivElement>;
}
const Pill = ({ value, onClose, onDelete }: PillProperties): JSX.Element => (
  <div
    tabIndex={0}
    role='button'
    className='pill'
    onClick={onClose}
    onKeyUp={onDelete}
  >
    <Label htmlFor={value} inline>
      {value}
      <div>
        <Icon name='error' />
      </div>
    </Label>
  </div>
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
    (Array.isArray(selected) && selected.length === 0)
  )
    return null;
  return (
    <div className='o-multiselect_choices pills'>
      {Array.isArray(selected) &&
        selected.map(({ value, label }: SelectOption, index: number) => (
          <Pill
            key={value}
            value={label}
            onClose={onCloser(index, onChange, selected)}
          />
        ))}
    </div>
  );
};

interface DropdownProperties {
  isMulti: boolean;
  options: SelectOption[];
  defaultValue?: SelectOption;
  id: string;
  label?: string;
  onSelect: (event: OnChangeValue<SelectOption, boolean>) => void;
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
  label = '',
  onSelect,
  ...rest
}: DropdownProperties): JSX.Element {
  const [selected, setSelected] = useState<PropsValue<SelectOption>>(
    defaultValue ? [defaultValue] : []
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
        {...rest}
      />
    </div>
  );
}

export default Dropdown;
