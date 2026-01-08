import classnames from 'classnames';

interface LayoutSidebarProperties {
  children: JSX.Element | JSX.Element[] | string;
  flushBottom?: boolean;
  flushTopOnSmall?: boolean;
  flushAllOnSmall?: boolean;
}
export const LayoutSidebar = ({
  children,
  flushBottom,
  flushTopOnSmall,
  flushAllOnSmall,
  ...properties
}: LayoutSidebarProperties &
  React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const cnames = ['sidebar', 'content__sidebar', 'o-sidebar-content'];
  if (flushBottom) cnames.push('content--flush-bottom');
  if (flushTopOnSmall) cnames.push('content--flush-top-on-small');
  if (flushAllOnSmall) cnames.push('content--flush-all-on-small');

  return (
    <aside className={classnames(cnames)} {...properties}>
      {children}
    </aside>
  );
};
