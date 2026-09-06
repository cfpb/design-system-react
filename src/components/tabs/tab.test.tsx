import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Tab, TabList } from './tab';

describe('<Tabs />', () => {
  it('renders tabs', () => {
    render(
      <TabList>
        <Tab id='one'>One tab</Tab>
        <Tab id='two'>Second tab</Tab>
      </TabList>,
    );

    const tabs = screen.getByRole('tablist');
    expect(tabs).toBeInTheDocument();
  });

  it('applies inverted background class on TabList', () => {
    render(
      <TabList isInverted>
        <Tab id='one' isActive>
          One tab
        </Tab>
        <Tab id='two'>Second tab</Tab>
      </TabList>,
    );

    expect(screen.getByRole('tablist')).toHaveClass('tablist--inverted');
  });
});
