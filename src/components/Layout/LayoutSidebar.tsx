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
  flushAllOnSmall
}: LayoutSidebarProperties): JSX.Element => {
  const cnames = ['sidebar', 'content_sidebar', 'o-sidebar-content'];
  if (flushBottom) cnames.push('content__flush-bottom');
  if (flushTopOnSmall) cnames.push('content__flush-top-on-small-bottom');
  if (flushAllOnSmall) cnames.push('content__flush-all-on-small');

  return <aside className={classnames(cnames)}>{children}</aside>;
};
