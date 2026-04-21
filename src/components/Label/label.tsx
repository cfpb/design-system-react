import classnames from 'classnames';
import { JSX } from 'react';
import type { ReactNode } from 'react';
import type { JSXElement } from '../../types/jsx-element';

interface LabelProperties {
  children: ReactNode;
  /** When true, uses inline label style instead of heading style */
  isInline?: boolean;
  htmlFor: string;
  className?: string;
}

const baseStyles = ['a-label'];

export const Label = ({
  children,
  isInline = false,
  htmlFor,
  className,
  ...other
}: JSX.IntrinsicElements['label'] &
  LabelProperties): JSXElement => {
  const styles = [...baseStyles, isInline ? '' : 'a-label--heading'];
  const classes = [...styles, className];

  if (!children) return null;

  return (
    <label {...other} className={classnames(classes)} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
