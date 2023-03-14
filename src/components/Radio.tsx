import type React from 'react';

interface RadioProperties {
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
const baseStyles = ['a-radio'];
const containerBaseStyles = ['m-form-field m-form-field__radio'];

export const Radio = ({
  id,
  name,
  helperText,
  className,
  isDisabled = false,
  isLarge = false,
  label,
  inputRef
}: JSX.IntrinsicElements['input'] & RadioProperties): React.ReactElement => {
  const classes = [...baseStyles, className].join(' ');
  const containerClasses = [
    ...containerBaseStyles,
    isLarge ? 'm-form-field__lg-target' : ''
  ].join(' ');

  return (
    <div className={containerClasses}>
      <input
        id={id}
        type='radio'
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

export default Radio;
