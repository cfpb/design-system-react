import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import Paragraph from '../Paragraph/Paragraph';
import { Alert, AlertType } from './Alert';
import { AlertFieldLevel } from './AlertFieldLevel';

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
    render(<Alert />);
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

  it('does not include an explanation wrapper class when there is no message but children are provided', async () => {
    render(
      <Alert status='info'>
        <Paragraph>Test component</Paragraph>
      </Alert>
    );
    const explanation = screen.queryByTestId('explanation');
    expect(explanation).toBeInTheDocument();
    expect(explanation).not.toHaveClass('m-notification_explanation');
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
    expect(externalIcon).toHaveClass('cf-icon-svg--external-link');
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

  it('Can be hidden via the isVisible prop', async () => {
    const testId = 'not-visible';
    render(
      <Alert
        data-testid={testId}
        isVisible={false}
        status='warning'
        message='squish'
      />
    );
    const element = screen.queryByTestId(testId);

    // Does not render the Alert
    expect(element).not.toBeInTheDocument();
  });

  it('Can be rendered without an icon via the showIcon prop', async () => {
    const testId = 'without-icon';
    render(
      <Alert
        data-testid={testId}
        showIcon={false}
        status='warning'
        message='squish'
      />
    );
    const element = screen.getByTestId(testId);

    // Renders Message
    expect(screen.getByTestId('message'));

    // Renders Icon
    const icon = within(element).queryByRole('img');
    expect(icon).not.toBeInTheDocument();
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

  it('Can be hidden via isVisible prop', async () => {
    const testId = 'hide-field-level-warning';
    render(
      <AlertFieldLevel
        data-testid={testId}
        isVisible={false}
        message='squish'
      />
    );
    const element = screen.queryByTestId(testId);

    // Does not render the Alert
    expect(element).not.toBeInTheDocument();
  });
});
