import type { Meta, StoryObj } from '@storybook/react-vite';
import { JSX } from 'react';
import type { ReactElement } from 'react';
import { Heading, Icon } from '~/src/index';
import type { HeadingType } from '../Headings/heading';
import {
  communicationIcons,
  documentIcons,
  expenseIcons,
  financialIcons,
  navigationIcons,
  numberIcons,
  socialIcons,
  statusIcons,
  webIcons,
} from './icon-lists';

const meta: Meta<typeof Icon> = {
  title: 'Components (Draft)/Icons',
  tags: ['autodocs'],
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS Icon component

Source: https://cfpb.github.io/design-system/foundation/iconography
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

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
    ),
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

export const IconPlain = (): ReactElement => (
  <span style={biggerIcon}>
    <Icon name='approved' />
  </span>
);

export const IconWithBackground = (): ReactElement => (
  <span style={biggerIcon}>
    <Icon name='approved' withBg />
  </span>
);

export const NavigationIcons = (): ReactElement => (
  <IconTable>{makeRows(navigationIcons)}</IconTable>
);

export const StatusIcons = (): ReactElement => (
  <IconTable>{makeRows(statusIcons)}</IconTable>
);

export const SocialSharingIcons = (): ReactElement => (
  <IconTable>{makeRows(socialIcons)}</IconTable>
);

export const CommunicationIcons = (): ReactElement => (
  <IconTable>{makeRows(communicationIcons)}</IconTable>
);

export const NumberIcons = (): ReactElement => (
  <IconTable>{makeRows(numberIcons)}</IconTable>
);

export const DocumentIcons = (): ReactElement => (
  <IconTable>{makeRows(documentIcons)}</IconTable>
);

export const FinancialProductsServicesAndConceptIcons =
  (): ReactElement => <IconTable>{makeRows(financialIcons)}</IconTable>;

export const ExpenseIcons = (): ReactElement => (
  <IconTable>{makeRows(expenseIcons)}</IconTable>
);

export const WebApplicationIcons = (): ReactElement => (
  <IconTable>{makeRows(webIcons)}</IconTable>
);

export const IconWithText: Story = {
  name: 'Icon with text',
  render: () => {
    interface LevelExample {
      type: HeadingType;
      text: string;
    }

    const acceptableLevels: LevelExample[] = [
      { type: '2', text: 'Auto loans' },
      { type: '3', text: 'Bank accounts' },
      { type: '4', text: 'Credit cards' },
      { type: '5', text: 'Submit a complaint' },
    ];

    return (
      <table>
        <thead>
          <tr>
            <th>Text element</th>
            <th>Icon with background</th>
            <th>Icon without background</th>
          </tr>
        </thead>
        <tbody>
          {acceptableLevels.map(({ type, text }) => (
            <tr key={type}>
              <td>h{type}</td>
              <td>
                <Heading type={type}>
                  <Icon name='credit-card' withBg /> {text}
                </Heading>
              </td>
              <td>
                <Heading type={type}>
                  <Icon name='credit-card' /> {text}
                </Heading>
              </td>
            </tr>
          ))}
          <tr>
            <td>p</td>
            <td>
              <p>
                <Icon name='college' withBg /> Student loans
              </p>
            </td>
            <td>
              <p>
                <Icon name='college' /> Student loans
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  },
};
