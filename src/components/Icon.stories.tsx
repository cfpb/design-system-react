import { Icon } from './Icon';

export default {
  title: 'Components/Icon',
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

export const icon = (): React.ReactElement => (
  <>
    <Icon name='approved' />
    <Icon name='approved' withBg />
  </>
);

export const statusIcons = (): React.ReactElement => {
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

export const webApplicationIcons = (): React.ReactElement => {
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

export const navigationIcons = (): React.ReactElement => {
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
