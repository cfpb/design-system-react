import classnames from 'classnames';
import type { JSXElement } from '../../types/jsxElement';

interface TaglineProperties {
  children: JSX.Element | string;
  isLarge?: boolean;
}

export const Tagline = ({
  isLarge = false,
  children
}: TaglineProperties): JSXElement => {
  const baseClasses = ['a-tagline'];
  if (isLarge) baseClasses.push('a-tagline__large');

  return (
    <div className={classnames(baseClasses)} data-testid='tagline'>
      <span className='u-usa-flag' data-testid='usa-flag' />
      <div className='a-tagline_text'>{children}</div>
    </div>
  );
};
