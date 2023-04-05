interface SelectOption {
  value: number | string;
  label: string;
}

type DropdownReference =
  | React.RefObject<HTMLSelectElement>
  | string
  | ((instance: HTMLSelectElement | null) => void)
  | null
  | undefined;

interface RequiredSelectProperties {
  id: string;
  name: string;
  options: SelectOption[];
}

interface CustomDropdownProperties {
  className?: string;
  isDisabled?: boolean;
  inputRef?: DropdownReference;
  inputProps?: JSX.IntrinsicElements['select'];
}

export type OptionalTextInputProperties = CustomDropdownProperties &
  JSX.IntrinsicElements['select'];

export type SelectProperties = OptionalTextInputProperties &
  RequiredSelectProperties;

const baseStyles = ['a-select'];

export function Dropdown({
  id,
  name,
  className,
  options,
  isDisabled = false,
  inputRef,
  ...inputProperties
}: SelectProperties): JSX.Element {
  const classes = [className].join(' ');

  return (
    <div className='m-form-field m-form-field__select'>
      <div
        className={[
          ...baseStyles,
          ...(isDisabled ? ['a-select__disabled'] : [])
        ].join(' ')}
      >
        <select
          id={id}
          name={name}
          className={classes}
          disabled={isDisabled}
          {...inputProperties}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
