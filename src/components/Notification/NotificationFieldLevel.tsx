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
  '': '',
  error: 'error',
  success: 'approved',
  warning: 'warning'
};

interface NotificationFieldLevelProperties
  extends React.HTMLAttributes<HTMLDivElement> {
  type: NotificationFieldLevelType;
  message: React.ReactNode;
  isVisible: boolean;
}

export const NotificationFieldLevel = ({
  type,
  message,
  isVisible,
  ...properties
}: NotificationFieldLevelProperties): JSXElement => {
  if (!isVisible) return null;

  if (!['error', 'success', 'warning'].includes(type))
    return (
      <>[Error] Unsupported field-level notification type provided: {type}</>
    );

  return (
    <div
      className={`a-form-alert a-form-alert${NotificationFieldLevelClass[type]}`}
      role='alert'
      {...properties}
    >
      <Icon name={MapTypeToIconName[type]} alt={type} withBg />
      <span className='a-form-alert_text'>{message}</span>
    </div>
  );
};
