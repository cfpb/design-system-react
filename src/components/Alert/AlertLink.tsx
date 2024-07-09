import { Icon } from '../Icon/Icon';

export interface AlertLinkProperties {
  href: string;
  label: string;
  isExternal?: boolean;
}

export const AlertLink = ({
  href,
  label,
  isExternal
}: AlertLinkProperties): JSX.Element => (
  <li className='m-list_item'>
    <a className='m-list_link' href={href}>
      {label}{' '}
      {isExternal ? (
        <Icon ariaLabel='external link' name='external-link' />
      ) : null}
    </a>
  </li>
);
