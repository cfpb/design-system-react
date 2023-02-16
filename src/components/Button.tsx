interface ButtonProperties {
  /**
   * Button contents
   */
  label: string;
  /**
   * What is the button's appearance?
   */
  appearance?: 'primary' | 'secondary' | 'warning';
  /**
   * How large should the button be?
   */
  size?: 'default' | 'full' | 'super';
  /**
   * Disable the button?
   */
  isDisabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const baseStyles = ['text-white', 'rounded', 'font-medium'];

const appearanceStyles = {
  primary: ['bg-pacific', 'hover:bg-pacific-dark'],
  secondary: ['bg-gray', 'hover:bg-gray-dark'],
  warning: ['bg-red-mid-dark', 'hover:bg-red-dark']
};

const sizeStyles = {
  default: ['px-3.5', 'py-2'],
  super: ['text-lg', 'px-7', 'py-3'],
  full: ['px-3.5', 'py-2', 'w-full']
};

const disabledStyles = ['bg-gray-20', 'text-gray', 'cursor-not-allowed'];

/**
 * Primary UI component for user interaction
 */
export function Button({
  appearance = 'primary',
  size = 'default',
  isDisabled = false,
  label,
  ...properties
}: ButtonProperties): JSX.Element {
  let styles = [
    ...baseStyles,
    ...appearanceStyles[appearance],
    ...sizeStyles[size]
  ];
  if (isDisabled) {
    styles = [...styles, ...disabledStyles];
  }
  return (
    <button
      type='button'
      className={[...styles].join(' ')}
      disabled={isDisabled}
      {...properties}
    >
      {label}
    </button>
  );
}
