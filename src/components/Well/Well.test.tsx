import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Well from './Well';
import { Standard } from './Well.stories';

describe('<Well />', () => {
  it('Displays elements', async () => {
    render(<Well {...Standard.args} />);

    const heading = screen.getByText(Standard.args.heading);
    expect(heading).toHaveClass('h4');

    const text = screen.getByText(Standard.args.text);
    expect(text).toHaveClass('text');

    const callToAction = screen.getByText('Call-to-action link');
    expect(callToAction).toHaveClass('m-list_link');
  });
});
