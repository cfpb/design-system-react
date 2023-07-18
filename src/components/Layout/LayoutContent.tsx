import classnames from 'classnames';

interface LayoutContentProperties {
  children: JSX.Element | JSX.Element[] | string;
  flushAllOnSmall?: boolean;
  flushBottom?: boolean;
  flushTopOnSmall?: boolean;
  narrow?: boolean;
}
export const LayoutContent = ({
  children,
  flushBottom,
  flushTopOnSmall,
  flushAllOnSmall,
  narrow,
  ...properties
}: LayoutContentProperties &
  React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const cnames = ['content_main'];
  if (flushBottom) cnames.push('content__flush-bottom');
  if (flushTopOnSmall) cnames.push('content__flush-top-on-small-bottom');
  if (flushAllOnSmall) cnames.push('content__flush-all-on-small');
  if (narrow) cnames.push('content_main__narrow');

  return (
    <div className={classnames(cnames)} {...properties}>
      {children}
    </div>
  );
};
