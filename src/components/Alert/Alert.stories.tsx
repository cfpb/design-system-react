import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertFieldLevel, TextInput } from '~/src/index';
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

export const Information: Story = {
  render: arguments_ => <Alert {...arguments_} />,
  args: { status: 'info', message: 'A Notification' }
};

export const InformationWithExplanation: Story = {
  ...Information,
  name: 'Information with explanation',
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the notification.'
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
      {
        href: '/',
        label: 'This is an external link',
        isExternal: true
      }
    ]
  }
};

export const Success: Story = {
  ...Information,
  args: { ...Information.args, status: 'success', message: '11 results' }
};

export const Warning: Story = {
  ...Information,
  args: { ...Information.args, status: 'warning', message: 'No results found.' }
};

export const Error: Story = {
  ...Information,
  args: { ...Information.args, status: 'error', message: 'Page not found.' }
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
    message: 'This is a field-level alert with a success status.'
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
    message: 'This is a field-level alert with a warning status.'
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
    message: 'This is a field-level alert with an error status.'
  }
};
