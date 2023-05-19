import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Expandable } from './Expandable';

const header = 'Tuesday Rememberance';
const children = 'It was a warm Spring morning in the midwest...';

describe('<Expandable />', () => {
  it('Default', async () => {
    render(<Expandable header={header}>{children}</Expandable>);

    const heading = screen.getByText(header);
    expect(heading).toBeInTheDocument();

    const expandable = screen.getByTestId('expandable');
    expect(expandable).not.toHaveClass('o-expandable__onload-open');

    const content = screen.getByText(children);
    expect(content).toBeInTheDocument();
  });

  it('Supports openOnLoad', async () => {
    render(
      <Expandable header={header} openOnLoad>
        {children}
      </Expandable>
    );

    const heading = screen.getByText(header);
    expect(heading).toBeInTheDocument();

    const expandable = screen.getByTestId('expandable');
    expect(expandable.getAttribute('class')).toMatch(
      /o-expandable__onload-open/g
    );

    const content = screen.getByText(children);
    expect(content).toBeInTheDocument();
  });

  // TODO:
  // Figure out why the user interactions are not reflected in the DOM.
  // To compensate, we've implemented a Storybook interaction to test this functionality.
  it.skip('Shows/Hides correctly', async () => {
    const user = userEvent.setup();
    render(<Expandable header={header}>{children}</Expandable>);

    const heading = screen.getByText(header);
    expect(heading).toBeInTheDocument();

    // Content wrapper collapsed
    const showHide = screen.getByRole('button');
    expect(showHide.getAttribute('aria-expanded')).toMatch('false');

    // Content hidden
    const content = screen.getByText(children);
    expect(content).toBeInTheDocument();
    expect(content).not.toHaveClass('o-expandable_content__onload-open');

    // Click to expand
    await act(async () => {
      await user.click(showHide);
    });

    // Verify expanded
    await waitFor(async () => {
      expect(showHide.getAttribute('aria-expanded')).toMatch('true');
    });

    // Click to collapse
    await act(async () => {
      await user.click(showHide);
    });

    // Verify collapsed
    await waitFor(() =>
      expect(showHide.getAttribute('aria-expanded')).toMatch('false')
    );
  });
});
