import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { Notification, NotificationFieldLevel } from '~/src/index';
import { NotificationType } from './Notification';

const testType = (status: NotificationType) => async (): Promise<void> => {
  render(<Notification status={status} />);
  const element = screen.getByTestId('notification');
  expect(element).toHaveClass(`m-notification__${status}`);

  // Renders Icon
  const icon = await within(element).findByRole('img');
  expect(icon).toBeInTheDocument();
};

const notificationStatuses: NotificationType[] = [
  'success',
  'warning',
  'error',
  'info'
];

describe('<Notification />', () => {
  for (const status of notificationStatuses) {
    it(`renders notification of type "${status}"`, testType(status));
  }

  it('displays message when provided', () => {
    render(<Notification status='info' />);
    const noMessage = screen.queryByTestId('message');
    expect(noMessage).not.toBeInTheDocument();

    render(<Notification status='info' message='testing' />);
    const message = screen.queryByTestId('message');
    expect(message).toBeInTheDocument();
  });

  it('displays explaination when provided', () => {
    render(<Notification status='info' />);
    const noExplaination = screen.queryByTestId('explaination');
    expect(noExplaination).not.toBeInTheDocument();

    render(<Notification status='info'>Explaination</Notification>);
    const explaination = screen.queryByTestId('explaination');
    expect(explaination).toBeInTheDocument();
  });

  it('displays links when provided', async () => {
    render(<Notification status='info' />);
    const noLinks = screen.queryAllByRole('listitem');
    expect(noLinks.length).toBe(0);

    const linkItems = [
      { href: '/1', label: 'one' },
      { href: '/2', label: 'two', isExternal: true }
    ];

    render(<Notification status='info' links={linkItems} />);
    const links = screen.queryAllByRole('listitem');
    expect(links.length).toBe(2);

    // Link attributes are correctly propagated
    const linkOne = screen.getByText(linkItems[0].label);
    expect(linkOne).toHaveAttribute('href', '/1');

    const linkTwo = screen.getByText(linkItems[1].label);
    expect(linkTwo).toHaveAttribute('href', '/2');

    // Icon is displayed: External link
    const externalIcon = await within(linkTwo).findByRole('img');
    expect(externalIcon).toBeInTheDocument();
    expect(externalIcon).toHaveClass('cf-icon-svg__external-link');
  });

  it('renders field-level notifications', async () => {
    const testId = 'field-level-warning';
    render(
      <Notification
        data-testid={testId}
        status='warning'
        isFieldLevel
        message='squish'
      />
    );
    const element = screen.getByTestId(testId);

    // Renders Icon
    const icon = await within(element).findByRole('img');
    expect(icon).toBeInTheDocument();

    // Render message
    const message = screen.queryByTestId('message');
    expect(message).toBeInTheDocument();
  });

  it('renders field-level notifications as its own component', async () => {
    const testId = 'field-level-warning';
    render(
      <NotificationFieldLevel
        data-testid={testId}
        status='warning'
        message='squish'
      />
    );
    const element = screen.getByTestId(testId);

    // Renders Icon
    const icon = await within(element).findByRole('img');
    expect(icon).toBeInTheDocument();

    // Render message
    const message = screen.queryByTestId('message');
    expect(message).toBeInTheDocument();
  });

  it('provides feedback for unsupported field-level notification type', async () => {
    const testId = 'field-level-warning';
    render(
      <Notification
        data-testid={testId}
        status='info'
        isFieldLevel
        message='squish'
      />
    );
    // Renders error message
    const message =
      '[Error] Unsupported field-level notification type provided: info';
    expect(await screen.findByText(message)).toBeVisible();
  });
});
