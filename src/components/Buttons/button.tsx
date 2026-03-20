import {
  forwardRef,
  JSX,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { Icon } from '../Icon/icon';

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button contents
   */
  label?: string;
  /**
   * Any children to render within the button. Allows you to wrap any node with button tag
   */
  children?: ReactNode;
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
  isLink?: boolean;
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
  warning: ['a-btn--warning'],
};

const sizeStyles = {
  default: [],
  full: ['a-btn--full-on-xs'],
};

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProperties>(
  (
    {
      appearance = 'primary',
      isLink = false,
      size = 'default',
      label,
      className,
      iconLeft,
      iconRight,
      children,
      ...properties
    },
    reference, // Receive the ref as the second argument
  ): JSX.Element => {
    const styles = [
      ...baseStyles,
      ...appearanceStyles[appearance],
      ...sizeStyles[size],
    ];
    if (isLink) styles.push('a-btn--link');
    if (className) styles.push(className);
    if (properties.disabled) styles.push('a-btn--disabled');

    const hasLeftIcon = Boolean(iconLeft);
    const hasRightIcon = Boolean(iconRight);
    const hasIcons = hasLeftIcon || hasRightIcon;
    const labelNode = label ? hasIcons ? <span>{label}</span> : label : null;

    if (hasLeftIcon && hasRightIcon) {
      throw new Error(
        'Button component: only one of iconLeft or iconRight can be provided',
      );
    }

    return (
      <button
        ref={reference} // Attach the forwarded ref here
        type='button'
        className={[...styles].join(' ')}
        {...properties}
      >
        {children}
        {!!iconLeft && (
          <Icon
            name={iconLeft}
            isPresentational
            data-testid='button-icon-left'
          />
        )}
        {labelNode}
        {!!iconRight && (
          <Icon
            name={iconRight}
            isPresentational
            data-testid='button-icon-right'
          />
        )}
      </button>
    );
  },
);

// Optional: Set displayName for better debugging in React DevTools
Button.displayName = 'Button';
