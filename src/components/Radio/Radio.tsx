import type React from 'react';
import { HelperText } from '../HelperText/HelperText';

interface RadioProperties {
  id: string;
  label: string;
  className?: string;
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
    <div className={containerClasses} data-testid='radio-container'>
      <input
        id={id}
        type='radio'
        name={name ?? id}
        className={classes}
        ref={inputRef}
        disabled={isDisabled}
      />
      <label className='a-label' htmlFor={id}>
        {label}
        <HelperText>{helperText}</HelperText>
      </label>
    </div>
  );
};

export default Radio;
