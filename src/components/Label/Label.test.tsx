import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

const htmlFor = 'sprinkler';
const text = 'Content';

describe('<Label />', () => {
  it('Default (Not inline)', () => {
    render(<Label htmlFor={htmlFor}>{text}</Label>);

    const element = screen.getByText(text);
    expect(element).toHaveAttribute('for', htmlFor);
    expect(element).toHaveClass('a-label');
    expect(element).toHaveClass('a-label__heading');
  });

  it('Inline Label', () => {
    render(
      <Label htmlFor={htmlFor} inline>
        {text}
      </Label>
    );

    const element = screen.getByText(text);
    expect(element).toHaveAttribute('for', htmlFor);
    expect(element).toHaveAttribute('class', 'a-label');
    expect(element).not.toHaveClass('a-label__heading');
  });

  it('applies provided class name', () => {
    const otherCName = 'other-cname';
    render(
      <Label htmlFor={htmlFor} className={otherCName}>
        {text}
      </Label>
    );

    const element = screen.getByText(text);
    expect(element).toHaveClass(otherCName);
  });

  it('does not render if no label text is provided', () => {
    const { container } = render(<Label htmlFor={htmlFor} />);
    expect(container.childElementCount).toBe(0);
  });
});
