import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Icon } from '../Icon/Icon';

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
  secondary: ['a-btn--secondary'],
  warning: ['a-btn--warning']
};

const sizeStyles = {
  default: [],
  full: ['a-btn--full-on-xs']
};

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProperties>(
  (
    {
      appearance = 'primary',
      asLink = false,
      size = 'default',
      label,
      className,
      iconLeft,
      iconRight,
      ...properties
    },
    ref, // Receive the ref as the second argument
  ): JSX.Element => {
    const styles = [
      ...baseStyles,
      ...appearanceStyles[appearance],
      ...sizeStyles[size],
    ];
    if (asLink) styles.push('a-btn--link');
    if (className) styles.push(className);
    if (properties.disabled) styles.push('a-btn--disabled');

    return (
      <button
        ref={ref} // Attach the forwarded ref here
        type="button"
        className={[...styles].join(' ')}
        {...properties}
      >
        {iconLeft ? <Icon name={iconLeft} isPresentational /> : null}
        {iconLeft || iconRight ? <span>{label}</span> : label}
        {iconRight ? <Icon name={iconRight} isPresentational /> : null}
      </button>
    );
  },
);

// Optional: Set displayName for better debugging in React DevTools
Button.displayName = 'Button';
