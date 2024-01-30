import { useArgs } from '@storybook/client-api';
import { useState } from 'react';
import type { CheckboxProperties } from './Checkbox';
import { Checkbox } from './Checkbox';

/*
 * Helper for controlled component state.
 * ARIA attributes won't updated without the updated onClick state being fed back into the component.
 */
export const CheckboxTestWrapper = ({
  onChange,
  checked,
  ...others
}: CheckboxProperties): JSX.Element => {
  const [inputChecked, setChecked] = useState(false);

  const onWrapperChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    onChange?.(event);
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked || inputChecked}
      {...others}
      onChange={onWrapperChange}
    />
  );
};

export function CheckboxWrapper({ ...arguments_ }): JSX.Element {
  const [, updateArguments] = useArgs();

  return (
    <Checkbox
      {...arguments_}
      checked={arguments_.checked}
      onChange={(): void => {
        updateArguments({
          checked: !arguments_.checked
        });
      }}
    />
  );
}
