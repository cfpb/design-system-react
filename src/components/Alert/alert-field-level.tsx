import type { JSXElement } from '../../types/jsx-element';
import { Icon } from '../Icon/icon';
import type { HTMLAttributes, ReactNode } from 'react';

export type AlertFieldLevelType = 'error' | 'info' | 'success' | 'warning';

export enum AlertFieldLevelClass {
  'info' = '--info',
  'error' = '--error',
  'success' = '--success',
  'warning' = '--warning',
}

export const MapTypeToIconName = {
  info: 'information',
  error: 'error',
  success: 'approved',
  warning: 'warning',
};

export interface AlertFieldLevelProperties
  extends HTMLAttributes<HTMLDivElement> {
  status?: AlertFieldLevelType;
  message: ReactNode;
  isVisible?: boolean;
}

export const AlertFieldLevel = ({
  status = 'info',
  message,
  isVisible = true,
  ...properties
}: AlertFieldLevelProperties): JSXElement => {
  if (!isVisible || !message) return null;

  if (!['error', 'success', 'warning', 'info'].includes(status))
    return (
      <p data-testid='message'>
        [Error] Unsupported field-level alert type provided: {status}
      </p>
    );

  return (
    <div
      className={`a-form-alert a-form-alert${AlertFieldLevelClass[status]}`}
      {...properties}
    >
      <Icon
        ariaLabel={`${status} icon`}
        name={MapTypeToIconName[status]}
        withBg
      />
      <span className='a-form-alert__text' data-testid='message'>
        {message}
      </span>
    </div>
  );
};
