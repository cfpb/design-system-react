import classnames from 'classnames';
import type React from 'react';
import Label from './Label';

interface DropdownProps {
  /** Identifer to associate `label` with the `select` input */
  id: string;
  /** Identifer used to reference drop-down data after form submission */
  name: string;
  /** Added to `select` input */
  className?: string;
  /** Text label associated with the `select` input */
  label?: string;
  /** Dropdown options */
  children: React.ReactNode;
  /** Ref to directly access the `select` value */
  inputRef?:
    | string
    | ((instance: HTMLSelectElement | null) => void)
    | React.RefObject<HTMLSelectElement>
    | null
    | undefined;
}

const baseStyles = ['a-select'];
const containerBaseStyles = ['m-form-field m-form-field__select'];

export const Dropdown = ({
  id,
  name,
  className,
  inputRef,
  children,
  label,
  ...inputProps
}: DropdownProps & JSX.IntrinsicElements['select']): React.ReactElement => {
  const selectStyles = [className];

  return (
    <div className={classnames(containerBaseStyles)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className={classnames(baseStyles)}>
        <select
          data-testid='dropdown'
          className={classnames(selectStyles)}
          id={id}
          name={name}
          ref={inputRef}
          {...inputProps}
        >
          {children}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
