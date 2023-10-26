import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TextIntroduction } from './TextIntroduction';
import placeholders from './testHelpers';

describe('<TextIntroduction />', () => {
  it('renders all elements when provided', () => {
    render(<TextIntroduction {...placeholders} />);
    expect(screen.getByText(placeholders.heading)).toBeInTheDocument();
    expect(screen.getByText(placeholders.subheading)).toBeInTheDocument();
    expect(screen.getByText(placeholders.description)).toBeInTheDocument();
    expect(screen.getByText('Call-to-action link')).toBeInTheDocument();
  });

  it('supports setting top/bottom as flush (remove margin)', () => {
    render(<TextIntroduction {...placeholders} isFlushTop isFlushBottom />);
    const element = screen.getByTestId('text-intro-wrapper');
    expect(element).toBeInTheDocument();
    expect(element.classList.contains('block__flush-top')).toBe(true);
    expect(element.classList.contains('block__flush-bottom')).toBe(true);
  });
});
