import type React from 'react';
import type { ReactNode } from 'react';
import { HelperText } from '../HelperText/HelperText';
import { Label } from '../Label/Label';

interface RadioProperties {
  id: string;
  label: ReactNode;
  className?: string;
  helperText?: string;
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | string
    | ((instance: HTMLInputElement | null) => void)
    | null
    | undefined;
  disabled?: boolean;
  isLarge?: boolean;
  name?: string;
  labelClassName: string;
  labelInline: boolean /** Removes/Adds 'label__heading' class to the Label * */;
}
const baseStyles = ['a-radio'];
const containerBaseStyles = ['m-form-field m-form-field__radio'];

export const RadioButton = ({
  id,
  name,
  helperText,
  className,
  disabled = false,
  isLarge = false,
  labelClassName,
  labelInline = true, // 'true' REMOVES the a.label__heading class
  label,
  inputRef,
  ...properties
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
        disabled={disabled}
        {...properties}
      />
      <Label htmlFor={id} className={labelClassName} inline={labelInline}>
        {label}
        <HelperText>{helperText}</HelperText>
      </Label>
    </div>
  );
};

export default RadioButton;
