import type { ChangeEvent } from 'react';
import { noOp } from '~/src/utils/noOp';
import type { SelectOption, SelectProperties } from './Select';
import { buildOptions, findOptionByValue } from './selectUtils';

export const SelectSingle = ({
  id,
  options,
  label,
  onChange = noOp,
  maxSelections,
  value = '',
  defaultOptionLabel = '-- select an option --',
  ...properties
}: SelectProperties): JSX.Element => {
  const onSelect = (
    event: ChangeEvent<HTMLSelectElement>
  ): SelectOption | undefined => {
    const selected = findOptionByValue(options, event.target.value);
    onChange(selected); // Notify parent component of changes
    return selected;
  };

  return (
    <>
      <label className='a-label a-label__heading' htmlFor={id}>
        {label}
      </label>
      <div className='a-select'>
        <select
          id={id}
          data-testid={id}
          {...properties}
          onChange={onSelect}
          value={value}
        >
          {buildOptions(options, defaultOptionLabel)}
        </select>
      </div>
    </>
  );
};
