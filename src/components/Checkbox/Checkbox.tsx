import classnames from 'classnames';
import type React from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import { useCallback } from 'react';

interface CheckboxProperties {
  id: string;
  label: ReactNode;
  className?: string;
  checked?: boolean;
  helperText?: string;
  inputClassName?: string;
  inputRef?:
    | React.RefObject<HTMLInputElement>
    | string
    | ((instance: HTMLInputElement | null) => void)
    | null
    | undefined;
  isLarge?: boolean;
  name?: string;
  disabled?: boolean;
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
}: CheckboxProperties): React.ReactElement => {
  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
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
        {helperText ? (
          <small className='a-label_helper'>{helperText}</small>
        ) : undefined}
      </label>
    </div>
  );
};

export default Checkbox;
