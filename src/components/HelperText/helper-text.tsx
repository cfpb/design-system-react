import classNames from 'classnames';
import type { HTMLProps } from 'react';
import type { JSXElement } from '../../types/jsx-element';

type HelperTextProperties = HTMLProps<HTMLDivElement>;

/**
 * A utility component to consistently display helper text for input elements
 */
export const HelperText = ({
  children,
  className,
  ...properties
}: HelperTextProperties): JSXElement => {
  if (!children) return null;
  const cnames = ['a-label__helper', className];

  return (
    <small className={classNames(cnames)} {...properties}>
      ({children})
    </small>
  );
};
