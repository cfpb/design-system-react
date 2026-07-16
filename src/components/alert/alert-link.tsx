import { JSX } from 'react';
import { ListLink } from '../link/link';

export interface AlertLinkProperties {
  to: string;
  label: string;
  isExternal?: boolean;
}

export const AlertLink = ({
  to,
  label,
  isExternal,
}: AlertLinkProperties): JSX.Element => (
  <ListLink
    to={to}
    label={label}
    iconRight={isExternal ? 'external-link' : undefined}
  />
);
