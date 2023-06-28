import classnames from 'classnames';
import type { JSXElement } from '../../types/jsxElement';
import './Link.less';

interface LinkProperties {
  type?: 'default' | 'list';
}

export default function Link({
  children,
  type = 'default',
  ...others
}: LinkProperties & React.HTMLProps<HTMLAnchorElement>): JSXElement {
  const cname = ['a-link', others.className];
  if (type === 'list') cname.push('list-link');

  return (
    <a {...others} className={classnames(cname)}>
      {children}
    </a>
  );
}
