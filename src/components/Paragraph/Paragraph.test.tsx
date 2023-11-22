import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Paragraph } from './Paragraph';

describe('<Paragraph />', () => {
  const helperText = 'helperText goes here';

  it('renders Body text', () => {
    render(<Paragraph>{helperText}</Paragraph>);
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it('renders Lead paragraph', () => {
    render(<Paragraph isLead>{helperText}</Paragraph>);
    const element = screen.getByText(helperText);
    expect(element).toBeInTheDocument();
    expect(element.classList.contains('lead-paragraph')).toBe(true);
  });
});
