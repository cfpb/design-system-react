import { Icon } from '../Icon/Icon';
import { LinkText, ListLink } from '../Link/Link';
import ListItem from '../List/ListItem';

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
  <ListItem>
    <ListLink href={href}>
      <LinkText>{label}</LinkText>
      {isExternal ? (
        <Icon ariaLabel='external link' name='external-link' />
      ) : null}
    </ListLink>
  </ListItem>
);
