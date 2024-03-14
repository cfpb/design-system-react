import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WellContainer, WellContent } from './Well';
import { Container, Content } from './Well.stories';

describe('<WellContainer />', () => {
  it('Display text content', async () => {
    const text = 'bazinga';
    render(<WellContainer {...Container.args}>{text}</WellContainer>);

    const content = screen.getByText(text);
    expect(content).toBeInTheDocument();
  });

  it('Displays element content', async () => {
    const text = 'bazinga';
    const textClass = `${text}-test`;
    render(
      <WellContainer {...Container.args}>
        <div className={textClass}>{text}</div>
      </WellContainer>
    );

    const content = screen.getByText(text);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass(textClass);
  });
});

describe('<WellContent />', () => {
  it('Displays elements', async () => {
    render(<WellContent {...Content.args} />);

    const heading = screen.getByText(Content.args?.heading);
    expect(heading).toHaveClass('h3');

    const text = screen.getByText(Content.args?.text);
    expect(text).toHaveClass('text');

    const callToAction = screen.getByText('Call-to-action link');
    expect(callToAction).toHaveClass('m-list_link');
  });
});
