import { Icon } from './Icon';

export interface NotificationLinkProperties {
  href: string;
  label: string;
  isExternal?: boolean;
}

export const NotificationLink = ({
  href,
  label,
  isExternal
}: NotificationLinkProperties) => {
  return (
    <li className='m-list_item'>
      <a className='m-list_link' href={href}>
        {label} {isExternal && <Icon name='external-link' />}
      </a>
    </li>
  );
};
