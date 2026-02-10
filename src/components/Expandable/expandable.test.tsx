import { Expandable as CFPB_Expandable } from '@cfpb/cfpb-design-system/src/components/cfpb-expandables';
import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Expandable } from './expandable';

const header = 'Tuesday Rememberance';
const children = 'It was a warm Spring morning in the midwest...';

describe('<Expandable />', () => {
  let initSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    initSpy = vi.spyOn(CFPB_Expandable, 'init');
  });

  it('Default', async () => {
    render(<Expandable header={header}>{children}</Expandable>);

    const heading = screen.getByText(header);
    expect(heading).toBeInTheDocument();

    const expandable = screen.getByTestId('expandable');
    expect(expandable).not.toHaveClass('o-expandable--onload-open');

    const content = screen.getByText(children);
    expect(content).toBeInTheDocument();
  });

  it('Initializes when not in an accordion', () => {
    render(<Expandable header={header}>{children}</Expandable>);
    expect(initSpy).toHaveBeenCalledTimes(1);
  });

  it('Does not initialize when in an accordion', () => {
    render(
      <Expandable header={header} inAccordion>
        {children}
      </Expandable>
    );
    expect(initSpy).not.toHaveBeenCalled();
  });

  it('Adds default standalone styles when not in an accordion', () => {
    render(<Expandable header={header}>{children}</Expandable>);
    const expandable = screen.getByTestId('expandable');
    expect(expandable).toHaveClass('o-expandable--background');
    expect(expandable).toHaveClass('o-expandable--border');
  });

  it('Omits default standalone styles when in an accordion', () => {
    render(
      <Expandable header={header} inAccordion>
        {children}
      </Expandable>
    );
    const expandable = screen.getByTestId('expandable');
    expect(expandable).not.toHaveClass('o-expandable--background');
    expect(expandable).not.toHaveClass('o-expandable--border');
  });

  it('Supports padded content', () => {
    render(
      <Expandable header={header} isPadded>
        {children}
      </Expandable>
    );
    const expandable = screen.getByTestId('expandable');
    expect(expandable).toHaveClass('o-expandable--padded');
  });

  it('Renders a custom icon when provided', async () => {
    render(
      <Expandable header={header} icon='left'>
        {children}
      </Expandable>
    );
    expect(
      await screen.findByRole('img', { name: 'left' })
    ).toBeInTheDocument();
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
      /o-expandable--onload-open/g
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
    expect(content).not.toHaveClass('o-expandable__content--onload-open');

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
