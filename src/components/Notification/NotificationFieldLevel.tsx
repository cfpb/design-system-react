import type { JSXElement } from '~/src/types/jsxElement';
import { Icon } from '../Icon/Icon';

export type NotificationFieldLevelType = '' | 'error' | 'success' | 'warning';

export enum NotificationFieldLevelClass {
  '' = '',
  'error' = '__error',
  'success' = '__success',
  'warning' = '__warning'
}

export const MapTypeToIconName = {
  '': 'information',
  error: 'error',
  success: 'approved',
  warning: 'warning'
};

export interface NotificationFieldLevelProperties
  extends React.HTMLAttributes<HTMLDivElement> {
  status?: NotificationFieldLevelType;
  message: React.ReactNode;
  isVisible?: boolean;
}

export const NotificationFieldLevel = ({
  status = '',
  message,
  isVisible = true,
  ...properties
}: NotificationFieldLevelProperties): JSXElement => {
  if (!isVisible || !message) return null;

  if (!['error', 'success', 'warning', ''].includes(status))
    return (
      <p data-testid='message'>
        [Error] Unsupported field-level notification type provided: {status}
      </p>
    );

  return (
    <div
      className={`a-form-alert a-form-alert${NotificationFieldLevelClass[status]}`}
      role='alert'
      {...properties}
    >
      <Icon name={MapTypeToIconName[status]} alt={status} withBg />
      <span className='a-form-alert_text' data-testid='message'>
        {message}
      </span>
    </div>
  );
};
