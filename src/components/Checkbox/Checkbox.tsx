import classnames from 'classnames';
import type {
  ChangeEvent,
  ReactElement,
  ReactNode,
  RefObject
} from 'react';
import { useCallback } from 'react';
import { HelperText } from '../HelperText/HelperText';

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
  name?: string;
  /** Is this checkbox disabled? */
  disabled?: boolean;
  /** An event handler function that will be called when the checkbox's value is changed  */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const containerBaseStyles = ['m-form-field m-form-field__checkbox'];

export const Checkbox = ({
  id,
  label,
  className,
  inputClassName,
  checked = false,
  helperText,
  inputRef,
  disabled = false,
  isLarge = false,
  name,
  onChange,
  ...properties
}: CheckboxProperties): ReactElement => {
  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      onChange?.(event);
    },
    [onChange]
  );

  const containerClasses = [
    ...containerBaseStyles,
    isLarge ? 'm-form-field__lg-target' : '',
    className
  ];

  return (
    <div
      className={classnames(containerClasses)}
      data-testid={`${id}-container`}
      {...properties}
    >
      <input
        id={id}
        type='checkbox'
        checked={checked}
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        data-testid={`${id}-input`}
        name={name ?? id}
        className={classnames(['a-checkbox', inputClassName])}
        ref={inputRef}
        disabled={disabled}
        onChange={onChangeHandler}
      />
      <label id={`${id}-label`} className='a-label' htmlFor={id}>
        {label}
        <HelperText>{helperText}</HelperText>
      </label>
    </div>
  );
};

export default Checkbox;
