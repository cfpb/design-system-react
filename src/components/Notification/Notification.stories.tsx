import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '~/src/index';

const meta: Meta<typeof Notification> = {
  component: Notification,
  argTypes: {
    message: { control: 'text' }
  },
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS Notification component

Source: https://cfpb.github.io/design-system/components/notifications
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
  args: {
    ...Information.args,
    children: 'You can also add an explanation to the notification.'
  }
};

export const InformationWithLinks: Story = {
  ...Information,
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

export const Warning: Story = {
  ...Information,
  args: { ...Information.args, type: 'warning', message: 'No results found.' }
};

export const Error: Story = {
  ...Information,
  args: { ...Information.args, type: 'error', message: 'Page not found.' }
};

export const Loading: Story = {
  ...Information,
  args: {
    ...Information.args,
    type: 'loading',
    message: 'The page is loading….'
  }
};
