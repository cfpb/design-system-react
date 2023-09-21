import classnames from 'classnames';
import type React from 'react';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

interface CheckboxProperties extends React.HTMLProps<HTMLInputElement> {
  id: string;
  label: ReactNode;
  className?: string;
  // defaultChecked?: boolean;
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
}
const containerBaseStyles = ['m-form-field m-form-field__checkbox'];

export const Checkbox = ({
  id,
  label,
  className,
  inputClassName,
  checked = false,
  // defaultChecked = false,
  helperText,
  inputRef,
  disabled = false,
  isLarge = false,
  name,
  onChange,
  ...properties
}: CheckboxProperties & JSX.IntrinsicElements['input']): React.ReactElement => {
  // const [sChecked, setChecked] = useState(defaultChecked);

  const onChangeHandler = useMemo(
    () =>
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        // setChecked(event.target.checked);
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
