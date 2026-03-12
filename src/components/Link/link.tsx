import { JSX } from 'react';
import { Link as RouterLink } from 'react-router';
import type { JSXElement } from '../../types/jsx-element';

import classnames from 'classnames';
import type { HTMLProps, ReactNode, Ref } from 'react';
import { Icon } from '../Icon/icon';
import ListItem from '../List/list-item';
import './link.scss';

export interface LinkProperties extends HTMLProps<HTMLAnchorElement> {
  /**
   * Whether the link should be rendered as a button.
   */
  isButton?: boolean;
  /**
   * What is the link's appearance?
   */
  appearance?: 'primary' | 'secondary' | 'destructive' | 'warning';
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
}

/**
 * Links are navigational elements that connect users to other locations, either on the current page or to a different
 * page or site. In contrast, buttons are used to signal important actions.
 *
 * Source: https://cfpb.github.io/design-system/components/links
 */
export default function Link({
  isButton = false,
  appearance,
  children,
  href,
  iconLeft,
  iconRight,
  isJump = false,
  isRouterLink = false,
  label,
  ...others
}: LinkProperties): JSXElement {
  const hasLeftIcon = Boolean(iconLeft);
  const hasRightIcon = Boolean(iconRight);
  const hasIcons = hasLeftIcon || hasRightIcon;
  const shouldUseLinkStyles = !isButton && (hasIcons || isJump);
  const shouldWrapLabel = isButton || shouldUseLinkStyles;
  const labelNode = shouldWrapLabel ? <LinkText>{label}</LinkText> : label;
  const isDestructive = ['destructive', 'warning'].includes(appearance);
  const cname = classnames(others.className, {
    'a-btn': isButton || isDestructive,
    'a-btn--link': isDestructive && !isButton,
    'a-btn--warning': isDestructive,
    'a-btn--secondary': isButton && appearance === 'secondary',
    'a-link--jump': isJump,
    'a-link': shouldUseLinkStyles,
  });

  if (hasLeftIcon && hasRightIcon) {
    throw new Error(
      'Link component: only one of iconLeft or iconRight can be provided',
    );
  }

  if (isRouterLink) {
    if (!href) {
      throw new Error(
        'Link component: href is a required attribute when isRouterLink is true',
      );
    }
    return (
      <RouterLink to={href} {...others} className={cname}>
        {children}
        {!!iconLeft && (
          <Icon name={iconLeft} isPresentational data-testid='link-icon-left' />
        )}
        {labelNode}
        {!!iconRight && (
          <Icon
            name={iconRight}
            isPresentational
            data-testid='link-icon-right'
          />
        )}
      </RouterLink>
    );
  }

  return (
    <a {...others} className={cname} href={href}>
      {children}
      {!!iconLeft && (
        <Icon name={iconLeft} isPresentational data-testid='link-icon-left' />
      )}
      {labelNode}
      {!!iconRight && (
        <Icon name={iconRight} isPresentational data-testid='link-icon-right' />
      )}
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
