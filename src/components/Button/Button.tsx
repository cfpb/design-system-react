import type { ButtonHTMLAttributes } from 'react';

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
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button should be styled as a link?
   */
  asLink?: boolean;
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
  asLink = false,
  size = 'default',
  label,
  ...properties
}: ButtonProperties): JSX.Element {
  const styles = [
    ...baseStyles,
    ...appearanceStyles[appearance],
    ...sizeStyles[size]
  ];
  if (asLink) styles.push('a-btn__link');
  if (properties.className) styles.push(properties.className);

  return (
    <button type='button' className={[...styles].join(' ')} {...properties}>
      {label}
    </button>
  );
}
