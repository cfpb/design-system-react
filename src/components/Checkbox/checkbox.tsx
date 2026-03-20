import classnames from 'classnames';
import type { ChangeEvent, ReactElement, ReactNode, RefObject } from 'react';
import { JSX, useCallback } from 'react';
import { HelperText } from '../HelperText/helper-text';

import { Label } from '../Label/label';

export interface CheckboxProperties {
  /** Unique identifier for this checkbox */
  id: string;
  /** Text that appears next to the checkbox for clarification of purpose */
  label: ReactNode;
  /** Additional CSS classes applied to the checkbox's wrapper element */
  className?: string;
  /** Is the checkbox checked? (controlled mode). Omit for uncontrolled mode. */
  checked?: boolean;
  /** Initial checked state (uncontrolled mode only) */
  defaultChecked?: boolean;
  /** Additional text to further clarify purpose of checkbox */
  helperText?: ReactNode;
  /** Additional CSS classes that will be applied to checkbox input element */
  inputClassName?: string;
  /** Additional CSS classes that will be applied to checkbox label element */
  labelClassName?: string;
  /** React Ref to enable direct access and control of the input element */
  inputRef?:
    | RefObject<HTMLInputElement>
    | ((instance: HTMLInputElement | null) => void)
    | null
    | undefined;
  /** Apply the "Large" styles for this element? */
  isLarge?: boolean;
  /** Removes/Adds 'label__heading' class to the Label. When true, uses inline label style. */
  isLabelInline?: boolean;
  /** A name for this checkbox's value that can be referenced in javascript */
  name?: string;
  /** Is this checkbox disabled? */
  disabled?: boolean;
  /** An event handler function that will be called when the checkbox's value is changed  */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Border status */
  status?: 'error' | 'success' | 'warning';
}

const containerBaseStyles = ['m-form-field m-form-field--checkbox'];

const borderStatus = {
  success: 'm-form-field--checkbox-success',
  warning: 'm-form-field--checkbox-warning',
  error: 'm-form-field--checkbox-error',
};

export const Checkbox = ({
  id,
  label,
  className,
  inputClassName,
  labelClassName = '',
  checked,
  defaultChecked,
  helperText,
  inputRef,
  disabled = false,
  isLarge = false,
  isLabelInline = true,
  name,
  onChange,
  status,
  ...properties
}: CheckboxProperties & JSX.IntrinsicElements['input']): ReactElement => {
  const isControlled = checked !== undefined;

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(event);
    },
    [onChange],
  );

  const containerClasses = [
    ...containerBaseStyles,
    isLarge ? 'm-form-field--lg-target' : '',
    status ? borderStatus[status] : '',
    className,
  ];

  const inputProps = {
    ...properties,
    id,
    type: 'checkbox' as const,
    'aria-labelledby': `${id}-label`,
    name: name ?? id,
    ref: inputRef,
    disabled,
    onChange: onChangeHandler,
    'data-testid': `${id}-input`,
    className: classnames(['a-checkbox', inputClassName]),
  };

  if (isControlled) {
    Object.assign(inputProps, { checked, 'aria-checked': checked });
  } else {
    Object.assign(inputProps, {
      defaultChecked: defaultChecked ?? false,
    });
  }

  return (
    <div
      className={classnames(containerClasses)}
      data-testid={`${id}-container`}
    >
      <input {...inputProps} />
      <Label
        id={`${id}-label`}
        className={labelClassName}
        htmlFor={id}
        isInline={isLabelInline}
      >
        {label}
        <HelperText>{helperText}</HelperText>
      </Label>
    </div>
  );
};

export default Checkbox;
