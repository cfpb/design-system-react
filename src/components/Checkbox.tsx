import type React from 'react';
import { useMemo, useState } from 'react';

interface CheckboxProperties {
  id: string;
  label: string;
  className?: string;
  defaultChecked?: boolean;
  helperText?: string;
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | string
    | ((instance: HTMLInputElement | null) => void)
    | null
    | undefined;
  isDisabled?: boolean;
  isLarge?: boolean;
  name?: string;
  onChange?: (value: boolean) => void;
}
const baseStyles = ['a-checkbox'];
const containerBaseStyles = ['m-form-field m-form-field__checkbox'];

export const Checkbox = ({
  id,
  label,
  className,
  defaultChecked = false,
  helperText,
  inputRef,
  isDisabled = false,
  isLarge = false,
  name,
  onChange
}: CheckboxProperties & JSX.IntrinsicElements['input']): React.ReactElement => {
  const [checked, setChecked] = useState(defaultChecked);

  const onChangeHandler = useMemo(
    () =>
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        setChecked(event.target.checked);
        onChange?.(event.target.checked);
      },
    [onChange, setChecked]
  );

  const classes = [...baseStyles, className].join(' ');

  const containerClasses = [
    ...containerBaseStyles,
    isLarge ? 'm-form-field__lg-target' : ''
  ].join(' ');

  return (
    <div className={containerClasses} data-testid={`${id}-container`}>
      <input
        id={id}
        type='checkbox'
        checked={checked}
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        name={name ?? id}
        className={classes}
        ref={inputRef}
        disabled={isDisabled}
        onChange={onChangeHandler}
      />
      <label id={`${id}-label`} className='a-label' htmlFor={id}>
        {label}
        {helperText ? (
          <small className='a-label_helper'>{helperText}</small>
        ) : undefined}
      </label>
    </div>
  );
};

export default Checkbox;
