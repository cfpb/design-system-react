import classnames from 'classnames';
import type { HTMLAttributes, ReactNode, MouseEvent } from 'react';
import type { JSXElement } from '../../types/jsx-element';
import { Button } from '../Buttons/button';
import type { ButtonProperties } from '../Buttons/button';
import './tab.scss';

export interface TabProperties extends Omit<ButtonProperties, 'appearance' | 'size' | 'isLink'> {
  /**
   * Id for the tab. Allows it to be associated with its content panel.
   */
  id: string;
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
  ...properties
}: TabProperties): JSXElement => {
  const cname = classnames('tab', className, {'tab--active': isActive});

  return (
     <Button
      role='tab'
      onClick={onClick}
      isLink
      className={cname}
      id={`tab-${id}`}
      aria-controls={`tabpanel-${id}`}
      aria-selected={isActive}
      tabIndex={isActive ? -1 : 0}
      {...properties}>
        {children}
      </Button>
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
    <div role="tablist" className={cname} {...properties}>
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
    <div role='tabpanel'
         id={`tabpanel-${id}`}
         aria-labelledby={`tab-${id}`}
         className={cname}
         {...properties}>
      {children}
    </div>
  );
};
