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

const baseStyles = [
  'text-black',
  'placeholder-gray',
  'py-1',
  'px-2',
  'border',
  'border-gray-60'
];

const hoverStyles = [
  'hover:border-pacific',
  'hover:outline-1',
  'hover:outline-pacific',
  'hover:outline'
];

const focusStyles = [
  'focus:border-pacific',
  'focus:outline-1',
  'focus:outline-pacific',
  'focus:outline-dotted',
  'focus:outline-offset-2',
  'focus:shadow-glow'
];

const widthStyles = {
  default: [],
  full: ['w-full']
};

const disabledStyles = [
  'disabled:bg-gray-20',
  'disabled:text-gray',
  'disabled:cursor-not-allowed',
  'disabled:outline-0',
  'disabled:border-gray-60'
];

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
  const styles = [
    ...baseStyles,
    ...hoverStyles,
    ...focusStyles,
    ...disabledStyles,
    ...widthStyles[width]
  ];
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
