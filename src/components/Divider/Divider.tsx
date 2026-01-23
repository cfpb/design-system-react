import type { ReactElement } from 'react';
import type React from 'react';

export const Divider = ({
  className = '',
  ...properties
}: React.HTMLProps<HTMLDivElement>): ReactElement => {
  return <div className={`content__line ${className}`} {...properties} />;
};


export default Divider;
