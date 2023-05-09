import classNames from 'classnames';
import type { HeadingLevel } from '../types/headingLevel';
import { Icon } from './Icon';
import './Notification.css';
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
  type?: string;
  // type?: NotificationType;
  message?: React.ReactNode;
  headingLevel?: HeadingLevel;
  children?: React.ReactNode;
  links?: NotificationLinkProperties[];
}

/**
 * CFPB DS Notification
 *
 * https://cfpb.github.io/design-system/components/notifications
 *
 * @param children Notification explaination
 * @param className Any additional classnames for the notification wrapper
 * @param headingLevel Controls sizing of primary message
 * @param links Links
 * @param message Notification reason
 * @param type Type of notification
 * @returns ReactElement
 */
export const Notification = ({
  children,
  className,
  headingLevel = 'h4',
  links,
  message,
  type = 'info',
  ...properties
}: NotificationProperties &
  React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  const classes = classNames(
    'm-notification',
    'm-notification__visible',
    {
      'm-notification__success': type === 'success',
      'm-notification__warning': type === 'warning',
      'm-notification__error': type === 'error',
      'm-notification__info': type === 'info'
    },
    className
  );

  return (
    <div className={classes} data-testid='notification' {...properties}>
      <Icon {...iconByType[type]} />
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
