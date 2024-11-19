import classNames from 'classnames';
import type { HeadingLevel } from '../../types/headingLevel';
import { Icon } from '../Icon/Icon';
import './Alert.css';
import type { AlertFieldLevelType } from './AlertFieldLevel';
import { AlertFieldLevel } from './AlertFieldLevel';
import type { AlertLinkProperties } from './AlertLink';
import { AlertLink } from './AlertLink';

export const iconByType: Record<string, { name: string; withBg: boolean }> = {
  error: { name: 'error', withBg: true },
  info: { name: 'information', withBg: true },
  loading: { name: 'updating', withBg: false },
  success: { name: 'approved', withBg: true },
  warning: { name: 'warning', withBg: true }
};

export type AlertType = 'error' | 'info' | 'loading' | 'success' | 'warning';

interface AlertProperties {
  status?: AlertFieldLevelType | AlertType;
  message?: React.ReactNode;
  headingLevel?: HeadingLevel;
  children?: React.ReactNode;
  links?: AlertLinkProperties[];
  isVisible?: boolean;
  isFieldLevel?: boolean;
  showIcon?: boolean;
}

/**
 * Alerts draw a user’s attention to a change in the status of a form or page. Form-level alerts reflect a user or system action and appear below the form title. Field-level alerts appear inline with input fields and can highlight successful submissions, errors that need to be corrected, or details to know before submitting a form. *
 *
 * Source: https://cfpb.github.io/design-system/components/alerts
 *
 */
export const Alert = ({
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
}: AlertProperties &
  React.HTMLAttributes<HTMLDivElement>): React.ReactElement | null => {
  if (!isVisible) return null;

  if (isFieldLevel) {
    return (
      // @ts-expect-error NotificationFieldLevel provides feedback for incompatible `type` values
      <AlertFieldLevel {...{ status, message, isVisible, ...properties }} />
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
      {showIcon ? (
        <Icon ariaLabel={`${status} icon`} {...iconByType[status]} />
      ) : null}
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
          <div
            className={`${message ? 'm-notification_explanation' : ''}`}
            data-testid='explanation'
          >
            {children}
          </div>
        ) : null}
        {links && links.length > 0 ? (
          <ul className='m-list m-list__links'>
            {links.map(link => (
              <AlertLink {...link} key={link.href} />
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Alert;
