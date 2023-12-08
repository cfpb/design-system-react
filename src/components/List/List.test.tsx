import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import List from './List';

describe('List', () => {
  it('Adds the "m-list__horizontal" class to the List when the isHorizontal prop is passed in', async () => {
    render(
      <List isHorizontal>
        <p>Test</p>
      </List>
    );

    const list = screen.getByRole('list');

    expect(list).toHaveClass('m-list__horizontal');
  });

  it('Adds the "m-list__links" class to the List when the isLinks prop is passed in', async () => {
    render(
      <List isLinks>
        <p>Test</p>
      </List>
    );

    const list = screen.getByRole('list');

    expect(list).toHaveClass('m-list__links');
  });

  it('Adds the "m-list__spaced" class to the List when the isSpaced prop is passed in', async () => {
    render(
      <List isSpaced>
        <p>Test</p>
      </List>
    );

    const list = screen.getByRole('list');

    expect(list).toHaveClass('m-list__spaced');
  });

  it('Adds the "m-list__unstyled" class to the List when the isUnstyled prop is passed in', async () => {
    render(
      <List isUnstyled>
        <p>Test</p>
      </List>
    );

    const list = screen.getByRole('list');

    expect(list).toHaveClass('m-list__unstyled');
  });

  it('Renders an ol when the isOrdered prop is passed in', async () => {
    render(
      <List isOrdered>
        <p>Test</p>
      </List>
    );
    const list = screen.getByRole('list');

    expect(list).toHaveProperty('nodeName', 'OL');
    expect(list).not.toHaveProperty('nodeName', 'UL');
  });
});
