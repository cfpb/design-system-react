import type React from 'react';
import type { ReactNode } from 'react';
import { JSX } from 'react';
import { HelperText } from '../HelperText/helper-text';
import { Label } from '../Label/label';

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
  labelClassName?: string;
  /** Removes/Adds 'label__heading' class to the Label. When true, uses inline label style. */
  isLabelInline?: boolean;
}
const baseStyles = ['a-radio'];
const containerBaseStyles = ['m-form-field m-form-field--radio'];

export const RadioButton = ({
  id,
  name,
  helperText,
  className,
  disabled = false,
  isLarge = false,
  labelClassName,
  isLabelInline = true,
  label,
  inputRef,
  ...properties
}: JSX.IntrinsicElements['input'] & RadioProperties): React.ReactElement => {
  const classes = [...baseStyles, className].join(' ');
  const containerClasses = [
    ...containerBaseStyles,
    isLarge ? 'm-form-field--lg-target' : '',
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
      <Label htmlFor={id} className={labelClassName} isInline={isLabelInline}>
        {label}
        <HelperText>{helperText}</HelperText>
      </Label>
    </div>
  );
};

export default RadioButton;
