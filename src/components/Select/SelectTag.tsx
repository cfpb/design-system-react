import type { KeyboardEvent, MouseEvent } from 'react';
import { Icon } from '~/src/index';

interface TagProperties {
  value: string;
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
  htmlFor: string;
  'data-testid'?: string;
}

/* TODO: Delete this once we're ready to move Multiselect to "Verified". 
   I just don't want to pre-emptively delete this component then have
   to rebuild it a later.
 */
export const SelectTag = ({
  value,
  label,
  onClick,
  onKeyDown,
  htmlFor,
  ...properties
}: TagProperties): JSX.Element => (
  <li key={value} data-testid={properties['data-testid']}>
    <button onClick={onClick} onKeyDown={onKeyDown} type='button'>
      <label htmlFor={htmlFor}>
        {label} <Icon name='error' />
      </label>
    </button>
  </li>
);
