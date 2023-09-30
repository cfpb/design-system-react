import { useState } from 'react';
import type { CheckboxProperties } from './Checkbox';
import { Checkbox } from './Checkbox';

/*
 * Helper for controlled component state.
 * ARIA attributes won't updated without the updated onClick state being fed back into the component.
 */
export const CheckboxTestWrapper = ({
  onChange,
  ...others
}: CheckboxProperties): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const onWrapperChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    onChange?.(event);
    setChecked(event.target.checked);
  };

  return <Checkbox {...others} checked={checked} onChange={onWrapperChange} />;
};
