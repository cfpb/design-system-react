import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { Alert, AlertFieldLevel, TextInput } from '~/src/index';

const meta: Meta<typeof Alert> = {
  title: 'Components (Draft)/Alerts',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
type FieldLevelStory = StoryObj<typeof AlertFieldLevel>;

const FieldLevelAlertMessage = ({ status = 'a warning' }): ReactNode => (
  <>This is a field-level alert with {status} status.</>
);

const alertExplanation = (type: string): string =>
  `This is an optional explanation of the ${type}.`;

const externalLinkProperties = {
  href: '/',
  label: 'This is an external link',
  isExternal: true,
};

export const Information: Story = {
  render: (arguments_) => <Alert {...arguments_} />,
  args: { status: 'info', message: 'Information alert' },
};

export const InformationWithMessageAndExplanation: Story = {
  ...Information,
  name: 'Information with a message and an explanation',
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the alert.',
  },
};

export const InformationWithOnlyExplanation: Story = {
  ...Information,
  name: 'Information with only an explanation',
  args: {
    children: 'You can also only have an explanation in the notification.',
  },
};

export const InformationWithLinks: Story = {
  ...Information,
  name: 'Information with links',
  args: {
    ...Information.args,
    children: 'This is the explanation of the alert.',
    links: [
      {
        href: '/',
        label: 'This is a link below the explanation',
      },
      externalLinkProperties,
    ],
  },
};

export const Success: Story = {
  ...Information,
  args: {
    ...Information.args,
    status: 'success',
    message: '11 results',
    links: [externalLinkProperties],
    children: <>{alertExplanation('success message')}</>,
  },
};

export const Warning: Story = {
  ...Information,
  args: {
    ...Information.args,
    status: 'warning',
    message: 'No results found',
    links: [externalLinkProperties],
    children: <>{alertExplanation('warning')}</>,
  },
};

export const Error: Story = {
  ...Information,
  args: {
    ...Information.args,
    status: 'error',
    message: 'Page not found',
    links: [externalLinkProperties],
    children: <>{alertExplanation('error')}</>,
  },
};

export const InProgress: Story = {
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    status: 'loading',
    message: 'The page is loading….',
  },
};

export const SuccessFieldLevel: FieldLevelStory = {
  render: (_arguments) => (
    <div className='m-form-field'>
      <TextInput
        id={_arguments.status as string}
        name={_arguments.status as string}
        status={_arguments.status}
        placeholder='Input text'
        type='text'
      />
      <AlertFieldLevel {..._arguments} />
    </div>
  ),
  name: 'Success (field-level)',
  args: {
    status: 'success',
    message: <FieldLevelAlertMessage status='a success' />,
  },
};

export const WarningFieldLevel: FieldLevelStory = {
  render: (_arguments) => (
    <div className='m-form-field'>
      <TextInput
        id={_arguments.status as string}
        name={_arguments.status as string}
        status={_arguments.status}
        placeholder='Input text'
        type='text'
      />
      <AlertFieldLevel {..._arguments} />
    </div>
  ),
  name: 'Warning (field-level)',
  args: {
    status: 'warning',
    message: <FieldLevelAlertMessage status='a warning' />,
  },
};

export const ErrorFieldLevel: FieldLevelStory = {
  render: (_arguments) => (
    <div className='m-form-field'>
      <TextInput
        id={_arguments.status as string}
        name={_arguments.status as string}
        status={_arguments.status}
        placeholder='Input text'
        type='text'
      />
      <AlertFieldLevel {..._arguments} />
    </div>
  ),
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: <FieldLevelAlertMessage status='an error' />,
  },
};
