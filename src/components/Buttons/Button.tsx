import type { ButtonHTMLAttributes } from 'react';
import { ButtonIcon } from './ButtonIcon';

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
  size?: 'default' | 'full';
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button should be styled as a link?
   */
  asLink?: boolean;
  /**
   * Name of icon to display left of button text
   */
  iconLeft?: string;
  /**
   * Name of icon to display right of button text
   */
  iconRight?: string;
}

const baseStyles = ['a-btn'];

const appearanceStyles = {
  primary: [],
  secondary: ['a-btn__secondary'],
  warning: ['a-btn__warning']
};

const sizeStyles = {
  default: [],
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
  className,
  iconLeft,
  iconRight,
  ...properties
}: ButtonProperties): JSX.Element {
  const styles = [
    ...baseStyles,
    ...appearanceStyles[appearance],
    ...sizeStyles[size]
  ];
  if (asLink) styles.push('a-btn__link');
  if (className) styles.push(className);
  if (properties.disabled) styles.push('a-btn__disabled');

  return (
    <button type='button' className={[...styles].join(' ')} {...properties}>
      <ButtonIcon name={iconLeft} isLeft />
      {label}
      <ButtonIcon name={iconRight} isRight />
    </button>
  );
}
