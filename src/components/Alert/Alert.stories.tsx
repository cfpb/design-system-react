import type { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';
import { Alert, AlertFieldLevel, Icon, Link, TextInput } from '~/src/index';
import type { TextInputStatusType } from '../TextInput/TextInputStatus';

type AlertStatusType = TextInputStatusType & ['loading'];

const meta: Meta<typeof Alert> = {
  title: 'Components (Draft)/Alerts',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const AlertMessage = ({ status = 'a warning' }): ReactNode => (
  <>
    This is a field-level alert with {status} status.{' '}
    <Link hasIcon href={window.location.pathname}>
      Link to more info <Icon name='external-link' />
    </Link>
    .
  </>
);

const alertExplanation = (type: string): string =>
  `This is an optional explanation of the ${type} message.`;

const externalLinkProperties = {
  href: '/',
  label: 'This is an external link',
  isExternal: true
};

export const Information: Story = {
  render: arguments_ => <Alert {...arguments_} />,
  args: { status: 'info', message: 'A Notification' }
};

export const InformationWithExplanation: Story = {
  ...Information,
  name: 'Information with explanation',
  args: {
    ...Information.args,
    children:
      'This is a longer explanation to demonstrate how text wrapping is applied to more extensive alert content.'
  }
};

export const InformationWithLinks: Story = {
  ...Information,
  name: 'Information with explanation and links',
  args: {
    ...Information.args,
    children: 'This is the explanation of the notification.',
    links: [
      {
        href: '/',
        label: 'This is a link below the explanation'
      },
      externalLinkProperties
    ]
  }
};

export const Success: Story = {
  ...Information,
  args: {
    ...Information.args,
    status: 'success',
    message: '11 results',
    links: [externalLinkProperties],
    children: <>{alertExplanation('success')}</>
  }
};

export const Warning: Story = {
  ...Information,
  args: {
    ...Information.args,
    status: 'warning',
    message: 'No results found.',
    links: [externalLinkProperties],
    children: <>{alertExplanation('warning')}</>
  }
};

export const Error: Story = {
  ...Information,
  args: {
    ...Information.args,
    status: 'error',
    message: 'Page not found.',
    links: [externalLinkProperties],
    children: <>{alertExplanation('error')}</>
  }
};

export const InProgress: Story = {
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    status: 'loading',
    message: 'The page is loading….'
  }
};

export const SuccessFieldLevel: Story = {
  render: _arguments => (
    <div className='m-form-field'>
      <TextInput
        id={_arguments.status as string}
        name={_arguments.status as string}
        status={_arguments.status as AlertStatusType}
        value='Input Text'
        type='text'
      />
      <AlertFieldLevel {..._arguments} />
    </div>
  ),
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: <AlertMessage status='a success' />
  }
};

export const WarningFieldLevel: Story = {
  render: _arguments => (
    <div className='m-form-field'>
      <TextInput
        id={_arguments.status as string}
        name={_arguments.status as string}
        status={_arguments.status as AlertStatusType}
        value='Input Text'
        type='text'
      />
      <AlertFieldLevel {..._arguments} />
    </div>
  ),
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: <AlertMessage status='a warning' />
  }
};

export const ErrorFieldLevel: Story = {
  render: _arguments => (
    <div className='m-form-field'>
      <TextInput
        id={_arguments.status as string}
        name={_arguments.status as string}
        status={_arguments.status as AlertStatusType}
        value='Input Text'
        type='text'
      />
      <AlertFieldLevel {..._arguments} />
    </div>
  ),
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: <AlertMessage status='an error' />
  }
};
