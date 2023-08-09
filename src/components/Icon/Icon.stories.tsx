import type { Meta } from '@storybook/react';
import { Icon } from '~/src/index';
import {
  communicationIcons,
  documentIcons,
  expenseIcons,
  financialIcons,
  navigationIcons,
  numberIcons,
  socialIcons,
  statusIcons,
  webIcons
} from './iconLists';

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

const biggerIcon = { fontSize: '2em' };

const makeRows = (names: string[]): JSX.Element[] =>
  names.map(
    (name): JSX.Element => (
      <tr key={`${name}`}>
        <td style={biggerIcon}>
          <Icon name={name} />
        </td>
        <td style={biggerIcon}>
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

export const IconPlain = (): React.ReactElement => (
  <span style={biggerIcon}>
    <Icon name='approved' />
  </span>
);

export const IconWithBackground = (): React.ReactElement => (
  <span style={biggerIcon}>
    <Icon name='approved' withBg />
  </span>
);

export const IconWithText = (): React.ReactElement => {
  const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'a'];

  return (
    <table className='t-icon-with-text'>
      <thead>
        <tr>
          <th>Element</th>
          <th>Text + Icon</th>
          <th>Icon + Text</th>
          <th>Round Icon + Text</th>
        </tr>
      </thead>
      <tbody>
        {elements.map(element => {
          const DynamicTag = element;

          return (
            <tr key={element}>
              <td>{element}</td>
              <td>
                <DynamicTag className='u-icon-after-text'>
                  {element} text
                  <Icon name='email' />
                </DynamicTag>
              </td>

              <td>
                <DynamicTag className='u-icon-before-text'>
                  <Icon name='email' />
                  {element} text
                </DynamicTag>
              </td>
              <td>
                <DynamicTag className='u-icon-before-text'>
                  <Icon name='zero' withBg />
                  {element} text
                </DynamicTag>
              </td>
            </tr>
          );
        })}
        <tr>
          <td>test space</td>
        </tr>
      </tbody>
    </table>
  );
};

export const NavigationIcons = (): React.ReactElement => (
  <IconTable>{makeRows(navigationIcons)}</IconTable>
);

export const StatusIcons = (): React.ReactElement => (
  <IconTable>{makeRows(statusIcons)}</IconTable>
);

export const SocialSharingIcons = (): React.ReactElement => (
  <IconTable>{makeRows(socialIcons)}</IconTable>
);

export const CommunicationIcons = (): React.ReactElement => (
  <IconTable>{makeRows(communicationIcons)}</IconTable>
);

export const NumberIcons = (): React.ReactElement => (
  <IconTable>{makeRows(numberIcons)}</IconTable>
);

export const DocumentIcons = (): React.ReactElement => (
  <IconTable>{makeRows(documentIcons)}</IconTable>
);

export const FinancialProductsServicesAndConceptIcons =
  (): React.ReactElement => <IconTable>{makeRows(financialIcons)}</IconTable>;

export const ExpenseIcons = (): React.ReactElement => (
  <IconTable>{makeRows(expenseIcons)}</IconTable>
);

export const WebApplicationIcons = (): React.ReactElement => (
  <IconTable>{makeRows(webIcons)}</IconTable>
);
