import { JSX } from "react";
import { Link as RouterLink } from 'react-router-dom';
import type { JSXElement } from '../../types/jsxElement';

import classnames from 'classnames';
import type { HTMLProps, ReactNode, Ref } from 'react';
import { Icon } from '~/src';
import ListItem from '../List/ListItem';
import './Link.scss';

export interface LinkProperties extends HTMLProps<HTMLAnchorElement> {
  /**
   * Whether the link should be rendered as a button.
   */
  asButton?: boolean;
  /**
   * Any children to render within the link. Allows you to wrap any node with anchor tag
   */
  children?: ReactNode;
  /**
   * The link's destination URL.
   */
  href: string;
  /**
   * Name of icon to display left of link text
   */
  iconLeft?: string;
  /**
   * Name of icon to display right of link text
   */
  iconRight?: string;
  /**
   * Whether the link is a standalone link
   */
  isJump?: boolean;
  /**
   * Whether the link is a react router link
   */
  isRouterLink?: boolean;
  /**
   * The link's text content, not required if children are provided
   */
  label?: string;
  ref?: Ref<HTMLAnchorElement>;
  /**
   * What type of link should be rendered
   */
  type?: 'default' | 'destructive';
}

/**
 * Links are navigational elements that connect users to other locations, either on the current page or to a different
 * page or site. In contrast, buttons are used to signal important actions.
 *
 * Source: https://cfpb.github.io/design-system/components/links
 */
export default function Link({
  asButton = false,
  children,
  href,
  iconLeft,
  iconRight,
  isJump = false,
  isRouterLink = false,
  label,
  type = 'default',
  ...others
}: LinkProperties): JSXElement {
  const cname = [others.className];

  if (asButton || type === 'destructive') {
    cname.push('a-btn');
  }

  if (type === 'destructive') {
    cname.push('a-btn a-btn--link a-btn--warning');
  }
  if (isJump) cname.push('a-link--jump');
  if (iconLeft || iconRight || isJump) cname.push('a-link');

  if (isRouterLink) {
    if (!href) {
      throw new Error(
        'Link component: href is a required attribute when isRouterLink is true'
      );
    }
    return (
      <RouterLink to={href} {...others} className={classnames(cname)}>
        {label}
      </RouterLink>
    );
  }

  return (
    <a {...others} className={classnames(cname)} href={href}>
      {children}
      {iconLeft ? (
        <Icon name={iconLeft} isPresentational data-testid='link-icon-left' />
      ) : null}
      {iconLeft || iconRight || isJump ? (
        <span className='a-link__text'>{label}</span>
      ) : (
        label
      )}
      {iconRight ? (
        <Icon name={iconRight} isPresentational data-testid='link-icon-right' />
      ) : null}
    </a>
  );
}

export const LinkText = ({
  children,
  ...others
}: HTMLProps<HTMLSpanElement>): JSX.Element => (
  <span className='a-link__text' {...others}>
    {children}
  </span>
);

export const ListLink = (properties: LinkProperties): JSXElement => (
  <ListItem>
    <Link {...properties} isJump />
  </ListItem>
);
