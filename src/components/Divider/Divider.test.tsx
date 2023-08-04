import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Divider from './Divider';

const testId = 'divider';

const defaultProps = {
  'data-testid': testId
};

describe('<Divider />', () => {
  it('Renders default', () => {
    render(<Divider {...defaultProps} />);
    const divider = screen.getByTestId(testId);

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('content_line');
  });

  it('Integrates className', () => {
    const cname = 'addition';
    render(<Divider {...defaultProps} className={cname} />);
    const divider = screen.getByTestId(testId);

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass(cname);
  });

  it('Propagates attributes', () => {
    const label = 'addition';
    render(<Divider {...defaultProps} label={label} />);
    const divider = screen.getByTestId(testId);

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('label', label);
  });
});
