import type { JSXElement } from '~/src/types/jsxElement';
import { Icon } from '../Icon/Icon';

export type AlertFieldLevelType = '' | 'error' | 'success' | 'warning';

export enum AlertFieldLevelClass {
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

export interface AlertFieldLevelProperties
  extends React.HTMLAttributes<HTMLDivElement> {
  status?: AlertFieldLevelType;
  message: React.ReactNode;
  isVisible?: boolean;
}

export const AlertFieldLevel = ({
  status = '',
  message,
  isVisible = true,
  ...properties
}: AlertFieldLevelProperties): JSXElement => {
  if (!isVisible || !message) return null;

  if (!['error', 'success', 'warning', ''].includes(status))
    return (
      <p data-testid='message'>
        [Error] Unsupported field-level alert type provided: {status}
      </p>
    );

  return (
    <div
      className={`a-form-alert a-form-alert${AlertFieldLevelClass[status]}`}
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
