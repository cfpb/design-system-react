import classnames from 'classnames';
import { JSX } from 'react';
import type { HTMLProps } from 'react';

export type HeadingType =
  '1' | '2' | '3' | '4' | '5' | 'display' | 'eyebrow' | 'slug';

interface HeadingProperties extends HTMLProps<HTMLHeadingElement> {
  /** Heading type (1-5, display, eyebrow, slug) */
  type?: HeadingType;
}

export const Heading = ({
  type = '1',
  children,
  className,
  ...properties
}: HeadingProperties): JSX.Element => {
  if (type === 'slug') {
    return (
      <header
        className={classnames('m-slug-header', className)}
        {...properties}
      >
        <h2 className='m-slug-header__heading'>{children}</h2>
      </header>
    );
  }

  let DynamicHeading: keyof JSX.IntrinsicElements;
  const classes = [className];

  if (type === 'display') {
    DynamicHeading = 'h1';
    classes.push('superheading');
  } else if (type === 'eyebrow') {
    DynamicHeading = 'div';
    classes.push('h5 eyebrow');
  } else DynamicHeading = `h${type}`;

  return (
    <DynamicHeading {...properties} className={classnames(classes)}>
      {children}
    </DynamicHeading>
  );
};
