import React, { ReactElement } from 'react';

export const Divider = ({
  className = '',
  ...properties
}: React.HTMLProps<HTMLDivElement>): ReactElement => {
  return <div className={`content__line ${className}`} {...properties} />;
};


export default Divider;
