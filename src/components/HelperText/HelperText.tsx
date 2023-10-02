import classNames from 'classnames';
import type React from 'react';

type HelperTextProperties = React.HTMLProps<HTMLDivElement>;

/**
 * A utility component to consistently display helper text for input elements
 */
export const HelperText = ({
  children,
  className,
  ...properties
}: HelperTextProperties): JSX.Element | null => {
  if (!children) return null;
  const cnames = ['a-label_helper', className];

  return (
    <small className={classNames(cnames)} {...properties}>
      ({children})
    </small>
  );
};
