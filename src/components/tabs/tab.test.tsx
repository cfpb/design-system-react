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

  it('uses roving tabindex: only the active tab is in the tab order', () => {
    render(
      <TabList>
        <Tab id='one' isActive>
          One tab
        </Tab>
        <Tab id='two'>Second tab</Tab>
      </TabList>,
    );

    // Per WAI-ARIA tabs pattern, the active tab keeps tabindex 0 so
    // keyboard users can reach it; inactive tabs are tabindex -1.
    expect(screen.getByRole('tab', { name: 'One tab' })).toHaveAttribute(
      'tabindex',
      '0',
    );
    expect(screen.getByRole('tab', { name: 'Second tab' })).toHaveAttribute(
      'tabindex',
      '-1',
    );
  });
});
