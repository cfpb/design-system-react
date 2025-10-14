import { Link as RouterLink } from 'react-router-dom';
import type { JSXElement } from '../../types/jsxElement';

import classnames from 'classnames';
import ListItem from '../List/ListItem';
import './Link.scss';

export interface LinkProperties extends React.HTMLProps<HTMLAnchorElement> {
  children?: React.ReactNode;
  hasIcon?: boolean;
  href?: string;
  isJump?: boolean;
  isJumpLeft?: boolean;
  isRouterLink?: boolean;
  noWrap?: boolean;
  ref?: React.Ref<HTMLAnchorElement>;
  type?: 'default' | 'destructive' | 'list';
}

/**
 * Links are navigational elements that connect users to other locations, either on the current page or to a different page or site. In contrast, <a href="https://cfpb.github.io/design-system/components/buttons">buttons</a> are used to signal important actions.
 *
 * Source: https://cfpb.github.io/design-system/components/links
 */
export default function Link({
  children,
  hasIcon = false,
  href,
  isJump = false,
  isJumpLeft = false,
  isRouterLink = false,
  noWrap = false,
  type = 'default',
  ...others
}: LinkProperties): JSXElement {
  const cname = [others.className];

  if (type === 'destructive') {
    cname.push('a-btn a-btn--link a-btn--warning');
  } else {
    cname.push('a-link');
  }
  if (hasIcon) cname.push('a-link--icon');
  if (noWrap) cname.push('a-link--no-wrap');
  if (isJump) cname.push('a-link--jump');
  if (isJumpLeft) cname.push('a-link--jump');

  if (isRouterLink) {
    if (!href) {
      throw new Error(
        'Link component: href is a required attribute when isRouterLink is true'
      );
    }
    return (
      <RouterLink to={href} {...others} className={classnames(cname)}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a {...others} className={classnames(cname)} href={href}>
      {children}
    </a>
  );
}

export const LinkText = ({
  children,
  ...others
}: React.HTMLProps<HTMLSpanElement>): JSX.Element => (
  <span className='a-link__text' {...others}>
    {children}
  </span>
);

export const ListLink = (properties: LinkProperties): JSXElement => (
  <ListItem>
    <Link {...properties} isJump />
  </ListItem>
);

export const DestructiveLink = (properties: LinkProperties): JSXElement => (
  <Link {...properties} type='destructive' />
);
