import type { JSXElement } from '~/src/types/jsxElement';

interface ButtonGroupProperties extends React.HTMLProps<HTMLDivElement> {
  /** Button(s) to display */
  children?: JSXElement | JSXElement[];
}

/**
 * Display a collection of related Buttons
 */
export const ButtonGroup = ({
  children,
  ...properties
}: ButtonGroupProperties): JSXElement => {
  if (!children) return null;
  return (
    <div className='m-btn-group' {...properties}>
      {children}
    </div>
  );
};
