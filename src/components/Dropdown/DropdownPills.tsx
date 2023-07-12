import type { ReactEventHandler, Ref } from 'react';
import type { PropsValue } from 'react-select';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Label } from '../Label/Label';
import type { SelectOption } from './Dropdown';
import './DropdownPills.less';

/**
 * Event Handlers
 */

export function onCloser(
  index: number,
  onChange: (result: PropsValue<SelectOption>) => void,
  selected?: PropsValue<SelectOption>
): ReactEventHandler<HTMLButtonElement> {
  return () => {
    if (!selected || !Array.isArray(selected)) return;
    const result = selected.filter((_, index_) => index_ !== index);
    onChange(result);
  };
}

function onKeyCloser(
  event: React.KeyboardEvent<HTMLButtonElement>,
  functionClose: ReactEventHandler<HTMLButtonElement>
): void {
  const validKeys = ['Enter', 'Delete', 'Backspace'];
  if (validKeys.includes(event.key)) functionClose(event);
}

/**
 * Components
 */

interface DropdownPillProperties {
  value: string;
  onClose: ReactEventHandler<HTMLButtonElement>;
}
export const DropdownPill = ({
  value,
  onClose
}: DropdownPillProperties): JSX.Element => (
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

interface DropdownPillsProperties {
  onChange: (event: PropsValue<SelectOption>) => void;
  selected: PropsValue<SelectOption>;
  isMulti?: boolean;
  pillAlign?: 'bottom' | 'top';
  selectRef: Ref<any>;
}

export const DropdownPills = ({
  selectRef,
  selected,
  isMulti,
  onChange,
  pillAlign = 'top'
}: DropdownPillsProperties): JSX.Element | null => {
  if (
    !isMulti ||
    !selected ||
    !Array.isArray(selected) ||
    selected.length === 0
  )
    return null;

  return (
    <figure
      className={`o-multiselect_choices${
        pillAlign === 'bottom' ? ' o-multiselect_choices__bottom' : ''
      }`}
    >
      <figcaption>Selected:</figcaption>
      <ul>
        {selected.map(({ value, label }: SelectOption, index: number) => (
          <DropdownPill
            key={value}
            value={label}
            onClose={onCloser(index, onChange, selected)}
          />
        ))}
        <li className='pill clear-selected'>
          <Button
            label='Clear All Selected Institutions'
            onClick={() => selectRef?.current?.clearValue()}
          />
        </li>
      </ul>
    </figure>
  );
};
