import { JSX } from 'react';
import { ListLink } from '../link/link';

export interface AlertLinkProperties {
  href: string;
  label: string;
  isExternal?: boolean;
}

export const AlertLink = ({
  href,
  label,
  isExternal,
}: AlertLinkProperties): JSX.Element => (
  <ListLink
    href={href}
    label={label}
    iconRight={isExternal ? 'external-link' : undefined}
  />
);
