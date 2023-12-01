import classNames from 'classnames';
import type { HeadingLevel } from '../../types/headingLevel';
import { Icon } from '../Icon/Icon';
import './Notification.css';
import type { NotificationFieldLevelType } from './NotificationFieldLevel';
import { NotificationFieldLevel } from './NotificationFieldLevel';
import type { NotificationLinkProperties } from './NotificationLink';
import { NotificationLink } from './NotificationLink';

export const iconByType: Record<string, { name: string; withBg: boolean }> = {
  error: { name: 'error', withBg: true },
  info: { name: 'information', withBg: true },
  loading: { name: 'updating', withBg: false },
  success: { name: 'approved', withBg: true },
  warning: { name: 'warning', withBg: true }
};

export type NotificationType =
  | 'error'
  | 'info'
  | 'loading'
  | 'success'
  | 'warning';

interface NotificationProperties {
  status?: NotificationFieldLevelType | NotificationType;
  message?: React.ReactNode;
  headingLevel?: HeadingLevel;
  children?: React.ReactNode;
  links?: NotificationLinkProperties[];
  isVisible?: boolean;
  isFieldLevel?: boolean;
  showIcon?: boolean;
}

/**
 * Alerts draw a user’s attention to a change in the status of a form or page. Form-level alerts reflect a user or system action and appear below the form title. Field-level alerts appear inline with input fields and can highlight successful submissions, errors that need to be corrected, or details to know before submitting a form. *
 *
 * Source: https://cfpb.github.io/design-system/components/alerts
 *
 * @param children Notification explaination
 * @param className Any additional classnames for the notification wrapper
 * @param headingLevel Controls sizing of primary message
 * @param links Links
 * @param message Notification reason
 * @param status Type of notification
 * @param isVisible Display/hide notification
 * @param isFieldLevel Render a field-level notification
 * @param showIcon Display/hide notification icon
 * @returns ReactElement
 */
export const Notification = ({
  children,
  className,
  headingLevel = 'h4',
  links,
  message,
  status = 'info',
  isVisible = true,
  isFieldLevel = false,
  showIcon = true,
  ...properties
}: NotificationProperties &
  React.HTMLAttributes<HTMLDivElement>): React.ReactElement | null => {
  if (!isVisible) return null;

  if (isFieldLevel) {
    return (
      // @ts-expect-error NotificationFieldLevel provides feedback for incompatible `type` values
      <NotificationFieldLevel
        {...{ status, message, isVisible, ...properties }}
      />
    );
  }

  const classes = classNames(
    'm-notification',
    'm-notification__visible',
    {
      'm-notification__success': status === 'success',
      'm-notification__warning': status === 'warning',
      'm-notification__error': status === 'error',
      'm-notification__info': status === 'info'
    },
    className
  );

  return (
    <div className={classes} data-testid='notification' {...properties}>
      {showIcon ? <Icon {...iconByType[status]} /> : null}
      <div className='m-notification_content'>
        {message ? (
          <p
            className={`${headingLevel} m-notification_message`}
            data-testid='message'
          >
            {message}
          </p>
        ) : null}
        {children ? (
          <p className='m-notification_explanation' data-testid='explaination'>
            {children}
          </p>
        ) : null}
        {links && links.length > 0 ? (
          <ul className='m-list m-list__links'>
            {links.map(link => (
              <NotificationLink {...link} key={link.href} />
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Notification;
