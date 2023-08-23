import classnames from 'classnames';
import type { JSXElement } from '../../types/jsxElement';
import ListItem from '../List/ListItem';
import './Link.less';

interface LinkProperties extends React.HTMLProps<HTMLAnchorElement> {
  type?: 'default' | 'destructive' | 'list';
  hasIcon?: boolean;
  noWrap?: boolean;
  isJump?: boolean;
  isJumpLeft?: boolean;
}

export default function Link({
  children,
  type = 'default',
  hasIcon = false,
  noWrap = false,
  isJump = false,
  isJumpLeft = false,
  ...others
}: LinkProperties): JSXElement {
  const cname = [others.className];

  if (type === 'list') {
    cname.push('m-list_link');
  } else {
    cname.push('a-link');
  }

  if (type === 'destructive') cname.push('a-btn a-btn__link a-btn__warning');
  if (hasIcon) cname.push('a-link__icon');
  if (noWrap) cname.push('a-link__no-wrap');
  if (isJump) cname.push('a-link__jump a-link__icon-after-text');
  if (isJumpLeft) cname.push('a-link__jump a-link__icon-before-text');

  return (
    <a {...others} className={classnames(cname)}>
      {children}
    </a>
  );
}

export const LinkText = ({
  children,
  ...others
}: React.HTMLProps<HTMLSpanElement>): JSX.Element => (
  <span className='a-link_text' {...others}>
    {children}
  </span>
);

export const ListLink = (properties: LinkProperties): JSXElement => (
  <ListItem>
    <Link {...properties} type='list' />
  </ListItem>
);

export const DestructiveLink = (properties: LinkProperties): JSXElement => (
  <Link {...properties} type='destructive' />
);
