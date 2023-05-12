import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

const htmlFor = 'sprinkler';
const text = 'Content';

describe('<Label />', () => {
  it('Default', () => {
    render(<Label htmlFor={htmlFor}>{text}</Label>);

    const element = screen.getByText(text);
    expect(element).toHaveAttribute('for', htmlFor);
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
  });

  it('applies provided class name', () => {
    render(
      <Label htmlFor={htmlFor} className='other-cname'>
        {text}
      </Label>
    );

    const element = screen.getByText(text);
    expect(element).toHaveClass('other-cname');
  });
});
