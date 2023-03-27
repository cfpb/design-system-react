import classnames from 'classnames';
import { HeadingLevel } from '../types/headingLevel';
import { Icon } from './Icon';
import './Notification.css';
import {
  NotificationLink,
  NotificationLinkProperties
} from './NotificationLink';

interface NotificationProperties {
  type: 'success' | 'warning' | 'error' | 'info' | 'loading';
  message?: React.ReactNode;
  headingLevel?: HeadingLevel;
  children?: React.ReactNode;
  links?: Array<NotificationLinkProperties>;
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
  ...props
}: NotificationProperties & React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  const classes = classnames(
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
    <div className={classes} data-testid='notification' {...props}>
      <Icon {...(iconByType[type] || {})} />
      <div className='m-notification_content'>
        {message && (
          <p className={`${headingLevel} m-notification_message`}>{message}</p>
        )}
        {children && <p className='m-notification_explanation'>{children}</p>}
        {links && links.length && (
          <ul className='m-list m-list__links'>
            {links.map(link => (
              <NotificationLink {...link} key={link.href} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const iconByType = {
  error: { name: 'error', withBg: true },
  info: { name: 'information', withBg: true },
  loading: { name: 'updating', withBg: false },
  success: { name: 'approved', withBg: true },
  warning: { name: 'warning', withBg: true }
};

export default Notification;
