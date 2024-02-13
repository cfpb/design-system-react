import classnames from 'classnames';
import type { ChangeEvent, ReactElement, ReactNode, RefObject } from 'react';
import { useCallback } from 'react';
import { HelperText } from '../HelperText/HelperText';

import { Label } from '../Label/Label';

export interface CheckboxProperties {
  /** Unique identifier for this checkbox */
  id: string;
  /** Text that appears next to the checkbox for clarification of purpose */
  label: ReactNode;
  /** Additional CSS classes applied to the checkbox's wrapper element */
  className?: string;
  /** Is checkboxed checked? */
  checked?: boolean;
  /** Additional text to further clarify purpose of checkbox */
  helperText?: ReactNode;
  /** Additional CSS classes that will be applied to checkbox input element */
  inputClassName?: string;
  /** Additional CSS classes that will be applied to checkbox label element */
  labelClassName?: string;
  /** React Ref to be enable direct access and control of the input element */
  inputRef?:
    | RefObject<HTMLInputElement>
    | string
    | ((instance: HTMLInputElement | null) => void)
    | null
    | undefined;
  /** Apply the "Large" styles for this element? */
  isLarge?: boolean;
  /** A name for this checkbox's value that can be referenced in javascript */
  labelInline?: boolean;
  /** Removes/Adds 'label__heading' class to the Label * */
  name?: string;
  /** Is this checkbox disabled? */
  disabled?: boolean;
  /** An event handler function that will be called when the checkbox's value is changed  */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Border status */
  status?: 'error' | 'success' | 'warning';
}

const containerBaseStyles = ['m-form-field m-form-field__checkbox'];

const borderStatus = {
  success: 'm-form-field__checkbox__success',
  warning: 'm-form-field__checkbox__warning',
  error: 'm-form-field__checkbox__error'
};

export const Checkbox = ({
  id,
  label,
  className,
  inputClassName,
  labelClassName = '',
  checked = false,
  helperText,
  inputRef,
  disabled = false,
  isLarge = false,
  labelInline = true, // 'true' REMOVES the a.label__heading class
  name,
  onChange,
  status,
  ...properties
}: CheckboxProperties & JSX.IntrinsicElements['input']): ReactElement => {
  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(event);
    },
    [onChange]
  );

  const containerClasses = [
    ...containerBaseStyles,
    isLarge ? 'm-form-field__lg-target' : '',
    borderStatus[status] ?? '',
    className
  ];

  return (
    <div
      className={classnames(containerClasses)}
      data-testid={`${id}-container`}
    >
      <input
        id={id}
        type='checkbox'
        checked={checked}
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        name={name ?? id}
        ref={inputRef}
        disabled={disabled}
        onChange={onChangeHandler}
        {...properties}
        data-testid={`${id}-input`}
        className={classnames(['a-checkbox', inputClassName])}
      />
      <Label
        id={`${id}-label`}
        className={labelClassName}
        htmlFor={id}
        inline={labelInline}
      >
        {label}
        <HelperText>{helperText}</HelperText>
      </Label>
    </div>
  );
};

export default Checkbox;
