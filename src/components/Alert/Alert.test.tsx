import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { Alert, AlertFieldLevel } from '~/src/index';
import { AlertType } from './Alert';

const testType = (status: AlertType) => async (): Promise<void> => {
  render(<Alert status={status} />);
  const element = screen.getByTestId('notification');
  expect(element).toHaveClass(`m-notification__${status}`);

  // Renders Icon
  const icon = await within(element).findByRole('img');
  expect(icon).toBeInTheDocument();
};

const notificationStatuses: AlertType[] = [
  'success',
  'warning',
  'error',
  'info'
];

describe('<Alert />', () => {
  for (const status of notificationStatuses) {
    it(`renders alert of type "${status}"`, testType(status));
  }

  it('displays message when provided', () => {
    render(<Alert status='info' />);
    const noMessage = screen.queryByTestId('message');
    expect(noMessage).not.toBeInTheDocument();

    render(<Alert status='info' message='testing' />);
    const message = screen.queryByTestId('message');
    expect(message).toBeInTheDocument();
  });

  it('displays explanation when provided', () => {
    render(<Alert status='info' />);
    const noExplanation = screen.queryByTestId('explanation');
    expect(noExplanation).not.toBeInTheDocument();

    render(<Alert status='info'>Explanation</Alert>);
    const explanation = screen.queryByTestId('explanation');
    expect(explanation).toBeInTheDocument();
  });

  it('displays links when provided', async () => {
    render(<Alert status='info' />);
    const noLinks = screen.queryAllByRole('listitem');
    expect(noLinks.length).toBe(0);

    const linkItems = [
      { href: '/1', label: 'one' },
      { href: '/2', label: 'two', isExternal: true }
    ];

    render(<Alert status='info' links={linkItems} />);
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

  it('renders field-level alerts', async () => {
    const testId = 'field-level-warning';
    render(
      <Alert
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

  it('renders field-level alerts as its own component', async () => {
    const testId = 'field-level-warning';
    render(
      <AlertFieldLevel data-testid={testId} status='warning' message='squish' />
    );
    const element = screen.getByTestId(testId);

    // Renders Icon
    const icon = await within(element).findByRole('img');
    expect(icon).toBeInTheDocument();

    // Render message
    const message = screen.queryByTestId('message');
    expect(message).toBeInTheDocument();
  });

  it('provides feedback for unsupported field-level alert type', async () => {
    const testId = 'field-level-warning';
    const unSupportedStatus = 'incorrect-status';
    render(
      <AlertFieldLevel
        data-testid={testId}
        status={unSupportedStatus}
        message='squish'
      />
    );
    // Renders error message
    const message = `[Error] Unsupported field-level alert type provided: ${unSupportedStatus}`;
    expect(await screen.findByText(message)).toBeVisible();
  });
});
