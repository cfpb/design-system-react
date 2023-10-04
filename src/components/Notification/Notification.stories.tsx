import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '~/src/index';

const meta: Meta<typeof Notification> = {
  title: 'Components (Draft)/Notifications',
  component: Notification,
  argTypes: {
    message: { control: 'text' }
  },
  parameters: {
    docs: {
      description: {
        component: `
Notifications alert users to the state of a form or page. In forms, notifications can appear at the top of the form or in line with form fields and can highlight successful submissions, errors that need to be corrected, or details to know before submitting the form. When used on a page, notifications can call out important information about the content (including if the content is still loading).


Additional guidance: [Information (base) notification](https://cfpb.github.io/design-system/components/notifications#information-base-notification)&nbsp;&nbsp;[Modifier types](https://cfpb.github.io/design-system/components/notifications#modifier-types)&nbsp;&nbsp;[Behavior](https://cfpb.github.io/design-system/components/notifications#behavior)&nbsp;&nbsp;[Accessibility](https://cfpb.github.io/design-system/components/notifications#accessibility)&nbsp;&nbsp;[Related items](https://cfpb.github.io/design-system/components/notifications#related-items)
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Information: Story = {
  render: arguments_ => <Notification {...arguments_} />,
  args: { type: 'info', message: 'A Notification' }
};

export const InformationWithExplaination: Story = {
  ...Information,
  name: 'Information with explaination',
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the notification.'
  }
};

export const InformationWithLinks: Story = {
  ...Information,
  name: 'Information with links',
  args: {
    ...Information.args,
    children: 'This is the explanation of the notification.',
    links: [
      {
        href: '/',
        label: 'This is a link below the explaination'
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
  args: { ...Information.args, type: 'success', message: '11 results' }
};

export const SuccessFieldLevel: Story = {
  ...Information,
  name: 'Success (field-level)',
  args: {
    ...Success.args,
    isFieldLevel: true,
    message: 'This is an inline alert with a success state.'
  }
};

export const Warning: Story = {
  ...Information,
  args: { ...Information.args, type: 'warning', message: 'No results found.' }
};

export const WarningFieldLevel: Story = {
  ...Information,
  name: 'Warning (field-level)',
  args: {
    ...Warning.args,
    isFieldLevel: true,
    message: 'This is an inline alert with a warning state.'
  }
};

export const Error: Story = {
  ...Information,
  args: { ...Information.args, type: 'error', message: 'Page not found.' }
};

export const ErrorFieldLevel: Story = {
  ...Information,
  name: 'Error (field-level)',
  args: {
    ...Error.args,
    isFieldLevel: true,
    message: 'This is an inline alert with an error state.'
  }
};

export const InProgress: Story = {
  ...Information,
  name: 'In-progress',
  args: {
    ...Information.args,
    type: 'loading',
    message: 'The page is loading….'
  }
};
