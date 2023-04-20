import type { Meta } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
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
} satisfies Meta<typeof Icon>;

export default meta;

const makeRows = (names: Array<string>) => {
  return names.map((name, idx) => (
    <>
      <tr>
        <td>
          <Icon name={name} key={idx} />
        </td>
        <td>
          <Icon name={name} key={idx} withBg />
        </td>
        <td>{name}</td>
      </tr>
    </>
  ));
};

export const IconDefault = (): React.ReactElement => (
  <>
    <Icon name='approved' />
  </>
);

export const IconWithBackground = (): React.ReactElement => (
  <>
    <Icon name='approved' withBg />
  </>
);

export const StatusIcons = (): React.ReactElement => {
  const names = ['approved', 'error', 'warning', 'update', 'updating'];
  return (
    <table>
      <thead>
        <th>icon</th>
        <th>withBg</th>
        <th>canonical name</th>
      </thead>
      <tbody>{makeRows(names)}</tbody>
    </table>
  );
};

export const WebApplicationIcons = (): React.ReactElement => {
  const names = ['information', 'external-link'];
  return (
    <table>
      <thead>
        <th>icon</th>
        <th>withBg</th>
        <th>canonical name</th>
      </thead>
      <tbody>{makeRows(names)}</tbody>
    </table>
  );
};

export const NavigationIcons = (): React.ReactElement => {
  const names = ['up', 'right', 'down', 'left'];
  return (
    <table>
      <thead>
        <th>icon</th>
        <th>withBg</th>
        <th>canonical name</th>
      </thead>
      <tbody>{makeRows(names)}</tbody>
    </table>
  );
};
