import classnames from 'classnames';

export type HeadingType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | 'display'
  | 'eyebrow'
  | 'slug';

interface HeadingProperties extends React.HTMLProps<HTMLHeadingElement> {
  /** Heading type (1-5, display, eyebrow, slug) */
  type?: HeadingType;
}

export const Heading = ({
  type = '1',
  children,
  className,
  ...properties
}: HeadingProperties): JSX.Element => {
  let DynamicHeading: keyof JSX.IntrinsicElements;
  const classes = [className];

  if (type === 'slug') {
    classes.push('m-slug-header');

    return (
      <header className={classnames(classes)} {...properties}>
        <h2 className='m-slug-header_heading'>{children}</h2>
      </header>
    );
  }

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
