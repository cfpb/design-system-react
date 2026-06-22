import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Component from './component';

describe('ComponentTemplate', () => {
  it('renders the label', () => {
    render(<Component label='Example label' />);

    expect(screen.getByText('Example label')).toBeInTheDocument();
  });

  it('renders helper text when provided', () => {
    render(<Component label='Example label' helperText='Helper text' />);

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });
});
