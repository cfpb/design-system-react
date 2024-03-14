import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Heading, HeadingType } from './Heading';

describe('<Heading />', () => {
  it('Renders h1 by default', () => {
    const headingType = `default`;
    const testid = `h${headingType}`;
    const text = `Heading level ${headingType}`;

    render(<Heading data-testid={testid}>{text}</Heading>);

    const current = screen.getByTestId(testid);

    expect(current).toBeInTheDocument();
    expect(current.tagName.toLowerCase()).toBe('h1');
  });

  it('Renders standard heading levels (1-5)', () => {
    const headers: HeadingType[] = ['1', '2', '3', '4', '5'];

    for (const level of headers) {
      const headingType: HeadingType = `${level}`;
      const testid = `h${headingType}`;
      const text = `Heading level ${headingType}`;

      render(
        <Heading type={headingType} data-testid={testid}>
          {text}
        </Heading>
      );

      const current = screen.getByTestId(testid);
      expect(current).toBeInTheDocument();

      expect(current.tagName.toLowerCase()).toBe(testid);
    }
  });

  it('Renders Display heading', () => {
    const headingType = `display`;
    const testid = `h${headingType}`;
    const text = `Heading level ${headingType}`;

    render(
      <Heading type={headingType} data-testid={testid}>
        {text}
      </Heading>
    );

    const current = screen.getByTestId(testid);

    expect(current).toBeInTheDocument();
    expect(current.tagName.toLowerCase()).toBe('h1');
    expect(current.className === 'superheading').toBeTruthy();
  });

  it('Renders Eyebrow heading', () => {
    const headingType = `eyebrow`;
    const testid = `h${headingType}`;
    const text = `Heading level ${headingType}`;

    render(
      <Heading type={headingType} data-testid={testid}>
        {text}
      </Heading>
    );

    const current = screen.getByTestId(testid);

    expect(current).toBeInTheDocument();
    expect(current.tagName.toLowerCase()).toBe('div');
    expect(current.className.includes('eyebrow')).toBeTruthy();
    expect(current.className.includes('h5')).toBeTruthy();
  });

  it('Renders Slug heading', () => {
    const headingType = `slug`;
    const testid = `h${headingType}`;
    const text = `Heading level ${headingType}`;

    render(
      <Heading type={headingType} data-testid={testid}>
        {text}
      </Heading>
    );

    const wrapper = screen.getByTestId(testid);

    expect(wrapper).toBeInTheDocument();
    expect(wrapper.tagName.toLowerCase()).toBe('header');
    expect(wrapper.classList.contains('m-slug-header'));

    const content = screen.getByText(text);
    expect(content.tagName.toLowerCase()).toBe('h2');
    expect(content.classList.contains('a-heading'));
  });
});
