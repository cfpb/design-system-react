import { ButtonHTMLAttributes } from 'react';

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
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

const baseStyles = ['a-btn'];

const appearanceStyles = {
  primary: [],
  secondary: ['a-btn__secondary'],
  warning: ['a-btn__warning']
};

const sizeStyles = {
  default: [],
  super: ['a-btn__super'],
  full: ['a-btn__full-on-xs']
};

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
  const styles = [
    ...baseStyles,
    ...appearanceStyles[appearance],
    ...sizeStyles[size]
  ];
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
