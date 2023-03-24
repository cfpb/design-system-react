import React from 'react';
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

const message = 'A Notification';

export const information = (): React.ReactElement => (
  <Notification type='info' message={message} />
);

export const informationWithExplaination = (): React.ReactElement => (
  <Notification type='info' message={message}>
    You can also add an explanation to the notification.
  </Notification>
);

export const informationWithLinks = (): React.ReactElement => {
  const links = [
    {
      href: '/',
      label: 'This is a link below the explaination'
    },
    {
      href: '/',
      label: 'This is an external link',
      isExternal: true
    }
  ];

  return (
    <Notification type='info' message={message} links={links}>
      This is the explanation of the notification.
    </Notification>
  );
};

export const success = (): React.ReactElement => (
  <Notification type='success' message='11 results' />
);

export const warning = (): React.ReactElement => (
  <Notification type='warning' message='No results found.' />
);

export const error = (): React.ReactElement => (
  <Notification type='error' message='Page not found.' />
);

export const loading = (): React.ReactElement => (
  <Notification type='loading' message='The page is loading….' />
);
