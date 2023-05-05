import type { Meta } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS Icon component

Source: https://cfpb.github.io/design-system/foundation/iconography
`
      }
    }
  }
};

export default meta;

const makeRows = (names: string[]): JSX.Element[] =>
  names.map(
    (name): JSX.Element => (
      <tr key={`${name}`}>
        <td>
          <Icon name={name} />
        </td>
        <td>
          <Icon name={name} withBg />
        </td>
        <td>{name}</td>
      </tr>
    )
  );

const IconTable = ({ children }: { children: JSX.Element[] }): JSX.Element => (
  <table>
    <thead>
      <tr>
        <th>icon</th>
        <th>withBg</th>
        <th>canonical name</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export const IconPlain = (): React.ReactElement => <Icon name='approved' />;

export const IconWithBackground = (): React.ReactElement => (
  <Icon name='approved' withBg />
);

export const NavigationIcons = (): React.ReactElement => {
  const names = ['up', 'right', 'down', 'left'];
  return <IconTable>{makeRows(names)}</IconTable>;
};

export const SocialSharingIcons = (): React.ReactElement => {
  const names = ['youtube'];
  return <IconTable>{makeRows(names)}</IconTable>;
};

export const StatusIcons = (): React.ReactElement => {
  const names = ['approved', 'error', 'warning', 'update', 'updating'];
  return <IconTable>{makeRows(names)}</IconTable>;
};

export const WebApplicationIcons = (): React.ReactElement => {
  const names = ['information', 'external-link'];
  return <IconTable>{makeRows(names)}</IconTable>;
};
