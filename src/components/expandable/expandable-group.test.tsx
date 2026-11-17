import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Expandable } from './expandable';
import { ExpandableGroup } from './expandable-group';

const renderGroup = (headers: string[], isAccordion = false) => (
  <ExpandableGroup groupId='test-group' accordion={isAccordion}>
    {headers.map((header) => (
      <Expandable key={header} header={header}>
        <p>{`${header} content`}</p>
      </Expandable>
    ))}
  </ExpandableGroup>
);

const expectAllInitialized = (): void => {
  for (const button of screen.getAllByRole('button')) {
    expect(button).toHaveAttribute('aria-expanded', 'false');
  }
  for (const content of screen.getAllByTestId('expandable-content')) {
    expect(content).toHaveClass('u-hidden');
  }
};

describe('<ExpandableGroup />', () => {
  it('initializes the expandables it renders with', () => {
    render(renderGroup(['First', 'Second']));
    expectAllInitialized();
  });

  it.each([false, true])(
    'initializes expandables added after mount (accordion: %s)',
    (isAccordion) => {
      const { rerender } = render(renderGroup(['First'], isAccordion));
      rerender(renderGroup(['First', 'Second', 'Third'], isAccordion));
      expectAllInitialized();
    },
  );

  it('initializes expandables that are re-added after being removed', () => {
    const { rerender } = render(renderGroup(['First', 'Second'], true));
    rerender(renderGroup(['First'], true));
    rerender(renderGroup(['First', 'Second'], true));
    expectAllInitialized();
  });
});
