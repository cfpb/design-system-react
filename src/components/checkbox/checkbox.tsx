import classnames from 'classnames';
import type { ChangeEvent, ReactElement, ReactNode, RefObject } from 'react';
import { JSX, useCallback, useEffect, useRef } from 'react';
import { HelperText } from '../helper-text/helper-text';

import { Label } from '../label/label';
import './checkbox.scss'


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
  /** Apply indeterminate attribute to checkbox? */
  isIndeterminate?: boolean
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
  isIndeterminate = false,
  name,
  onChange,
  status,
  ...properties
}: CheckboxProperties & JSX.IntrinsicElements['input']): ReactElement => {
  const isControlled = checked !== undefined;
  const internalRef = useRef(null);
  const ref = inputRef ?? internalRef;

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

  const inputProperties = {
    ...properties,
    id,
    type: 'checkbox' as const,
    'aria-labelledby': `${id}-label`,
    name: name ?? id,
    ref: ref,
    disabled,
    onChange: onChangeHandler,
    'data-testid': `${id}-input`,
    className: classnames(['a-checkbox', inputClassName]),
  };

  if (isControlled) {
    Object.assign(inputProperties, { checked, 'aria-checked': checked });
  } else {
    Object.assign(inputProperties, {
      defaultChecked: defaultChecked ?? false,
    });
  }

  if (isIndeterminate) {
    Object.assign(inputProperties, { 'aria-checked': 'mixed' });
  }

  useEffect(() => {
    if (typeof ref === 'object' && ref.current !== null) {
      ref.current.indeterminate = isIndeterminate
    }
  }, [isIndeterminate])

  return (
    <div
      className={classnames(containerClasses)}
      data-testid={`${id}-container`}
    >
      <input {...inputProperties} />
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
