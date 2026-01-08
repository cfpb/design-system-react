import classnames from 'classnames';

interface LayoutContentProperties {
  children: JSX.Element | JSX.Element[] | string;
  flushAllOnSmall?: boolean;
  flushBottom?: boolean;
  flushTopOnSmall?: boolean;
}
export const LayoutContent = ({
  children,
  flushBottom,
  flushTopOnSmall,
  flushAllOnSmall,
  ...properties
}: LayoutContentProperties &
  React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const cnames = ['content__main'];
  if (flushBottom) cnames.push('content--flush-bottom');
  if (flushTopOnSmall) cnames.push('content--flush-top-on-small');
  if (flushAllOnSmall) cnames.push('content--flush-all-on-small');

  return (
    <div className={classnames(cnames)} {...properties}>
      {children}
    </div>
  );
};
