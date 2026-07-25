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

  it('renders a native tab button without a-btn / a-btn--link classes', async () => {
    render(
      <TabList>
        <Tab id='one' label='Trends' iconLeft='chart' isActive />
      </TabList>,
    );

    const tab = screen.getByRole('tab', { name: /trends/i });
    expect(tab).toHaveClass('tab', 'tab--active');
    expect(tab).not.toHaveClass('a-btn');
    expect(tab).not.toHaveClass('a-btn--link');
    expect(await screen.findByTestId('tab-icon-left')).toBeInTheDocument();
  });
});
