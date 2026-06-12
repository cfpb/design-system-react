import type { HTMLProps, ReactElement } from 'react';

export const Divider = ({
  className = '',
  ...properties
}: HTMLProps<HTMLDivElement>): ReactElement => (
  <div className={`content__line ${className}`} {...properties} />
);

export default Divider;
