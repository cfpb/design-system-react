import { ComponentStory } from '@storybook/react';
import { Notification } from './Notification';

export default {
  title: 'Components/Notification',
  component: Notification,
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

const Template: ComponentStory<typeof Notification> = args => (
  <Notification {...args} />
);

export const information = Template.bind({});
information.args = { type: 'info', message: 'A Notification' };

export const informationWithExplaination = Template.bind({});
informationWithExplaination.args = {
  ...information.args,
  children: 'You can also add an explanation to the notification.'
};

export const informationWithLinks = Template.bind({});
informationWithLinks.args = {
  ...information.args,
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
};

export const success = Template.bind({});
success.args = { type: 'success', message: '11 results' };

export const warning = Template.bind({});
warning.args = { type: 'warning', message: 'No results found.' };

export const error = Template.bind({});
error.args = { type: 'error', message: 'Page not found.' };

export const loading = Template.bind({});
loading.args = { type: 'loading', message: 'The page is loading….' };
