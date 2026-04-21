import type { HTMLProps } from 'react';
import type { JSXElement } from '../../types/jsx-element';

/**
 * Display a collection of related Buttons
 */
export const ButtonGroup = ({
  className,
  children,
  ...other
}: HTMLProps<HTMLDivElement>): JSXElement => {
  if (!children) return null;
  return (
    <div className={`m-btn-group ${className ?? ''}`} {...other}>
      {children}
    </div>
  );
};
