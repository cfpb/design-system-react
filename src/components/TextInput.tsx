type TextInputReference =
  | React.RefObject<HTMLInputElement>
  | string
  | ((instance: HTMLInputElement | null) => void)
  | null
  | undefined;

interface RequiredTextInputProperties {
  id: string;
  name: string;
  type: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
}

interface CustomTextInputProperties {
  className?: string;
  width?: 'default' | 'full';
  isDisabled?: boolean;
  inputRef?: TextInputReference;
  inputProps?: JSX.IntrinsicElements['input'];
}

export type OptionalTextInputProperties = CustomTextInputProperties &
  JSX.IntrinsicElements['input'];

export type TextInputProperties = OptionalTextInputProperties &
  RequiredTextInputProperties;

const baseStyles = ['a-text-input'];

const widthStyles = {
  default: [],
  full: ['a-text-input__full']
};

export function TextInput({
  id,
  name,
  type,
  className,
  width = 'default',
  isDisabled = false,
  inputRef,
  ...inputProperties
}: TextInputProperties): JSX.Element {
  const styles = [...baseStyles, ...widthStyles[width]];
  const classes = [className, ...styles].join(' ');

  return (
    <input
      data-testid='textInput'
      className={classes}
      disabled={isDisabled}
      id={id}
      name={name}
      type={type}
      ref={inputRef}
      {...inputProperties}
    />
  );
}

export default TextInput;
