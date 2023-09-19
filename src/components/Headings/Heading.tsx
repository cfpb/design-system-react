import classnames from 'classnames';
import type { JSXElement } from '~/src/types/jsxElement';

export type HeadingType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | 'eyebrow'
  | 'slug'
  | 'super';

interface HeadingProperties extends React.HTMLProps<HTMLHeadingElement> {
  /** Heading type (1-6, super, eyebrow, slug) */
  type?: HeadingType;
  /** Heading content */
  children: JSXElement | string;
}

export const Heading = ({
  type = '1',
  children,
  className,
  ...properties
}: HeadingProperties): JSXElement => {
  let DynamicHeading: keyof JSX.IntrinsicElements;
  const classes = [className];

  if (type === 'slug') {
    classes.push('m-slug-header');

    return (
      <header className={classnames(classes)} {...properties}>
        <h2 className='a-heading'>{children}</h2>
      </header>
    );
  }

  if (type === 'super') {
    DynamicHeading = 'h1';
    classes.push('superheading');
  } else if (type === 'eyebrow') {
    DynamicHeading = 'h5';
    classes.push('eyebrow');
  } else DynamicHeading = `h${type}`;

  return (
    <DynamicHeading {...properties} className={classnames(classes)}>
      {children}
    </DynamicHeading>
  );
};
