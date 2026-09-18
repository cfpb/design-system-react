import classnames from 'classnames';
import type {
  HTMLAttributes,
  KeyboardEvent as ReactKeyboardEvent,
  ReactNode,
  MouseEvent,
} from 'react';
import type { JSXElement } from '../../types/jsx-element';
import { Button } from '../buttons/button';
import type { ButtonProperties } from '../buttons/button';
import './tab.scss';

export interface TabProperties extends Omit<
  ButtonProperties,
  'appearance' | 'size' | 'isLink'
> {
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
  const cname = classnames('tab', className, { 'tab--active': isActive });

  return (
    <Button
      role='tab'
      onClick={onClick}
      isLink
      className={cname}
      id={`tab-${id}`}
      aria-controls={`tabpanel-${id}`}
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      {...properties}
    >
      {children}
    </Button>
  );
};

export interface TabListProperties extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  /**
   * Render tabs without fills. Same chrome as default tabs (active border,
   * inactive link styles), but transparent backgrounds on every tab.
   */
  isInverted?: boolean;
}

export const TabList = ({
  className,
  children,
  isInverted = false,
  onKeyDown,
  ...properties
}: TabListProperties): JSXElement => {
  const cname = classnames('tablist', className, {
    'tablist--inverted': isInverted,
  });

  /**
   * WAI-ARIA tabs keyboard pattern (automatic activation): arrows move
   * selection with wrap, Home/End jump to the ends. Clicking the target
   * tab reuses the consumer's own onClick, so isActive, aria-selected
   * and tabindex stay in sync without TabList owning selection state.
   */
  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);

    if (event.defaultPrevented) {
      return;
    }

    const tabs = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]'),
    );

    if (tabs.length === 0) {
      return;
    }

    const currentIndex = tabs.indexOf(document.activeElement as HTMLElement);

    let targetIndex = -1;
    switch (event.key) {
      case 'ArrowRight':
        targetIndex = (currentIndex + 1 + tabs.length) % tabs.length;
        break;
      case 'ArrowLeft':
        targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        targetIndex = 0;
        break;
      case 'End':
        targetIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    if (targetIndex < 0) {
      return;
    }

    event.preventDefault();
    const target = tabs[targetIndex];
    target.focus();
    target.click();
  };

  return (
    <div
      role='tablist'
      className={cname}
      onKeyDown={handleKeyDown}
      {...properties}
    >
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
