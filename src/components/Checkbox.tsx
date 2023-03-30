import type React from 'react';

interface CheckboxProperties {
  id: string;
  name: string;
  helperText?: string;
  className?: string;
  isDisabled?: boolean;
  isLarge?: boolean;
  label: string;
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | string
    | ((instance: HTMLInputElement | null) => void)
    | null
    | undefined;
}
const baseStyles = ['a-checkbox'];
const containerBaseStyles = ['m-form-field m-form-field__checkbox'];

export const Checkbox = ({
  id,
  name,
  helperText,
  className,
  isDisabled = false,
  isLarge = false,
  label,
  inputRef
}: CheckboxProperties & JSX.IntrinsicElements['input']): React.ReactElement => {
  const classes = [...baseStyles, className].join(' ');
  const containerClasses = [
    ...containerBaseStyles,
    isLarge ? 'm-form-field__lg-target' : ''
  ].join(' ');

  return (
    <div className={containerClasses}>
      <input
        id={id}
        type='checkbox'
        name={name}
        className={classes}
        ref={inputRef}
        disabled={isDisabled}
      />
      <label className='a-label' htmlFor={id}>
        {label}
        {helperText ? (
          <small className='a-label_helper'>{helperText}</small>
        ) : undefined}
      </label>
    </div>
  );
};

export default Checkbox;
