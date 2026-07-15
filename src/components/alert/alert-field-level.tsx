import classNames from 'classnames';
import type { HTMLAttributes, ReactNode } from 'react';
import type { JSXElement } from '../../types/jsx-element';
import { Icon } from '../icon/icon';

export type AlertFieldLevelType = 'error' | 'info' | 'success' | 'warning';

export const MapTypeToIconName = {
  info: 'information',
  error: 'error',
  success: 'approved',
  warning: 'warning',
};

export interface AlertFieldLevelProperties extends HTMLAttributes<HTMLDivElement> {
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
      className={classNames('a-form-alert', {
        'a-form-alert--error': status === 'error',
        'a-form-alert--success': status === 'success',
        'a-form-alert--warning': status === 'warning',
      })}
      {...properties}
    >
      <Icon
        ariaLabel={`${status} icon`}
        name={MapTypeToIconName[status]}
        hasBg
      />
      <span className='a-form-alert__text' data-testid='message'>
        {message}
      </span>
    </div>
  );
};
