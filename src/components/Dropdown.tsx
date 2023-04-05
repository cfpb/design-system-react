import { MouseEventHandler, useState } from 'react';
import Select, { createFilter } from 'react-select';
import type {
  GroupBase,
  MultiValue,
  OnChangeValue,
  Props
} from 'react-select/dist/declarations/src/index';
import { Icon } from './Icon';
import { Label } from './Label';

// https://react-select.com/typescript#custom-select-props
declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    label?: string;
    onSelect?: Function;
  }
}

/**
 * A dropdown input component that supports multi-select
 * @returns JSX.Element
 */
export function Dropdown<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  const {
    isMulti = false,
    options,
    defaultValue,
    id = 'dropdown',
    label = null,
    onSelect = (e: OnChangeValue<Option, IsMulti> | null) => null
  } = props;

  const [selected, setSelected] = useState<
    Option | MultiValue<Option> | null | undefined
  >(defaultValue);

  // Store updated list of selected items
  const onChange = (option): void => {
    onSelect && onSelect(option);
    setSelected(option);
  };

  return (
    <div className='m-form-field m-form-field__select'>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Pills selected={selected} isMulti={isMulti} onChange={onChange} />
      <Select
        {...props}
        className='o-multiselect'
        value={selected}
        options={filterOptions(options, selected, isMulti)}
        onChange={onChange}
        filterOption={createFilter({ ignoreAccents: false })}
        controlShouldRenderValue={!isMulti}
      />
    </div>
  );
}

/**
 * Supporting Components
 */

interface PillsProps {
  selected: typeof Option | MultiValue<typeof Option> | null | undefined;
  isMulti: boolean;
  onChange: Function;
}
const Pills = ({ selected, isMulti, onChange }: PillsProps) => {
  if (!isMulti || !selected || !selected.length) return null;
  return (
    <ul className='o-multiselect_choices pills'>
      {selected.map((v, i: number) => {
        return (
          <Pill
            key={i}
            value={v.label}
            close={makeCloser(selected, i, onChange)}
          />
        );
      })}
    </ul>
  );
};

interface PillProps {
  value: string;
  close: MouseEventHandler<HTMLLIElement>;
}
const Pill = ({ value, close }: PillProps) => {
  return (
    <li className='pill' onClick={close}>
      <Label htmlFor={value} inline>
        {value}
        <div>
          <Icon name='error' />
        </div>
      </Label>
    </li>
  );
};

/**
 * Utility Functions
 */

function makeCloser(
  selected,
  index: number,
  onChange: Function
): MouseEventHandler<HTMLLIElement> {
  return function () {
    if (!selected) return;
    const result: Array<any> = [];
    const length = selected?.length || 0;
    for (let i = 0; i < length; i++) {
      if (i !== index) result.push(selected[i]);
    }
    onChange(result);
  };
}

const filterOptions = (options, selected, isMulti: boolean) => {
  if (!selected || !options) return options;

  if (isMulti) return options.filter(o => !selected.includes(o.value));

  return options;
};

export default Dropdown;
