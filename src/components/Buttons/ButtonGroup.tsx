import type { JSXElement } from '~/src/types/jsxElement';

/**
 * Display a collection of related Buttons
 */
export const ButtonGroup = ({
  className,
  children,
  ...other
}: React.HTMLProps<HTMLDivElement>): JSXElement => {
  if (!children) return null;
  return (
    <div className={`m-btn-group ${className}`} {...other}>
      {children}
    </div>
  );
};
