import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TextIntroduction } from '~/src/index';
import placeholders from './testHelpers';

describe('<TextIntroduction />', () => {
  it('renders all elements when provided', () => {
    render(<TextIntroduction {...placeholders} />);
    expect(screen.getByText(placeholders.heading)).toBeInTheDocument();
    expect(screen.getByText(placeholders.subheading)).toBeInTheDocument();
    expect(screen.getByText(placeholders.description)).toBeInTheDocument();
    expect(screen.getByText('Call-to-action link')).toBeInTheDocument();
  });
});
