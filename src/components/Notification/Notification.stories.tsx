import type { Meta, StoryObj } from '@storybook/react';
import { Notification, NotificationFieldLevel, TextInput } from '~/src/index';
import type { StatusType } from '../TextInput/TextInput';

const meta: Meta<typeof Notification> = {
  title: 'Components (Draft)/Notifications',
  component: Notification,
  argTypes: {
    message: { control: 'text' }
  }
  //   parameters: {
  //     docs: {
  //       description: {
  //         component: `
  // Alerts draw a user’s attention to a change in the status of a form or page. Form-level alerts reflect a user or system action and appear below the form title. Field-level alerts appear inline with input fields and can highlight successful submissions, errors that need to be corrected, or details to know before submitting a form.

  // Additional guidance: [Information (base) notification](https://cfpb.github.io/design-system/components/notifications#information-base-notification)&nbsp;&nbsp;[Modifier types](https://cfpb.github.io/design-system/components/notifications#modifier-types)&nbsp;&nbsp;[Behavior](https://cfpb.github.io/design-system/components/notifications#behavior)&nbsp;&nbsp;[Accessibility](https://cfpb.github.io/design-system/components/notifications#accessibility)&nbsp;&nbsp;[Related items](https://cfpb.github.io/design-system/components/notifications#related-items)
  // `
  //       }
  //     }
  //   }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Information: Story = {
  render: arguments_ => <Notification {...arguments_} />,
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
        status={_arguments.status as StatusType}
        value='Input Text'
        type='text'
      />
      <NotificationFieldLevel {..._arguments} />
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
        status={_arguments.status as StatusType}
        value='Input Text'
        type='text'
      />
      <NotificationFieldLevel {..._arguments} />
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
        status={_arguments.status as StatusType}
        value='Input Text'
        type='text'
      />
      <NotificationFieldLevel {..._arguments} />
    </div>
  ),
  name: 'Error (field-level)',
  args: {
    status: 'error',
    message: 'This is a field-level alert with an error status.'
  }
};
