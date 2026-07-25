import classnames from 'classnames';
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
} from 'react';
import type { JSXElement } from '../../types/jsx-element';
import { Icon } from '../icon/icon';
import './tab.scss';

export interface TabProperties extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> {
  /**
   * Id for the tab. Allows it to be associated with its content panel.
   */
  id: string;
  /**
   * Visible tab label. Prefer this over children when using icons.
   */
  label?: string;
  /**
   * Name of icon to display left of tab text
   */
  iconLeft?: string;
  /**
   * Name of icon to display right of tab text
   */
  iconRight?: string;
  /**
   * Any additional classes for the tab
   */
  className?: string;
  /**
   * Whether this is the active tab
   */
  isActive?: boolean;
  /**
   * Any children to render within the tab. Allows you to wrap any node with tab tag
   */
  children?: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Tab = ({
  id,
  className,
  isActive,
  onClick = () => null,
  children,
  label,
  iconLeft,
  iconRight,
  type = 'button',
  ...properties
}: TabProperties): JSXElement => {
  const cname = classnames('tab', className, { 'tab--active': isActive });

  if (iconLeft && iconRight) {
    throw new Error(
      'Tab component: only one of iconLeft or iconRight can be provided',
    );
  }

  const hasIcons = Boolean(iconLeft || iconRight);
  const labelNode = label ? (hasIcons ? <span>{label}</span> : label) : null;

  return (
    <button
      type={type}
      role='tab'
      onClick={onClick}
      className={cname}
      id={`tab-${id}`}
      aria-controls={`tabpanel-${id}`}
      aria-selected={isActive}
      tabIndex={isActive ? -1 : 0}
      {...properties}
    >
      {children}
      {iconLeft ? (
        <Icon name={iconLeft} isPresentational data-testid='tab-icon-left' />
      ) : null}
      {labelNode}
      {iconRight ? (
        <Icon name={iconRight} isPresentational data-testid='tab-icon-right' />
      ) : null}
    </button>
  );
};

export interface TabListProperties extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export const TabList = ({
  className,
  children,
  ...properties
}: TabListProperties): JSXElement => {
  const cname = classnames('tablist', className);

  return (
    <div role='tablist' className={cname} {...properties}>
      {children}
    </div>
  );
};

export interface TabPanelProperties extends HTMLAttributes<HTMLDivElement> {
  id: string;
  className?: string;
  children?: ReactNode;
}

export const TabPanel = ({
  id,
  className,
  children,
  ...properties
}: TabPanelProperties): JSXElement => {
  const cname = classnames('tab-panel', className);

  return (
    <div
      role='tabpanel'
      id={`tabpanel-${id}`}
      aria-labelledby={`tab-${id}`}
      className={cname}
      {...properties}
    >
      {children}
    </div>
  );
};
