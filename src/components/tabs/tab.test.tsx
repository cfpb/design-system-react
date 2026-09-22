import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { Tab, TabList } from './tab';

const TabsDemo = () => {
  const [activeTab, setActiveTab] = useState('one');
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(event.currentTarget.value);
  };
  return (
    <TabList>
      <Tab id='one' value='one' isActive={activeTab === 'one'} onClick={onClick}>
        One tab
      </Tab>
      <Tab id='two' value='two' isActive={activeTab === 'two'} onClick={onClick}>
        Second tab
      </Tab>
      <Tab
        id='three'
        value='three'
        isActive={activeTab === 'three'}
        onClick={onClick}
      >
        Third tab
      </Tab>
    </TabList>
  );
};

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

  it('moves selection and focus with arrow keys, Home and End', () => {
    render(<TabsDemo />);

    const one = screen.getByRole('tab', { name: 'One tab' });
    const two = screen.getByRole('tab', { name: 'Second tab' });
    const three = screen.getByRole('tab', { name: 'Third tab' });

    one.focus();
    fireEvent.keyDown(screen.getByRole('tablist'), { key: 'ArrowRight' });

    expect(two).toHaveAttribute('aria-selected', 'true');
    expect(two).toHaveAttribute('tabindex', '0');
    expect(one).toHaveAttribute('tabindex', '-1');
    expect(two).toHaveFocus();

    fireEvent.keyDown(screen.getByRole('tablist'), { key: 'ArrowRight' });
    expect(three).toHaveAttribute('aria-selected', 'true');
    expect(three).toHaveFocus();

    // Wraps around the end.
    fireEvent.keyDown(screen.getByRole('tablist'), { key: 'ArrowRight' });
    expect(one).toHaveAttribute('aria-selected', 'true');
    expect(one).toHaveFocus();

    fireEvent.keyDown(screen.getByRole('tablist'), { key: 'End' });
    expect(three).toHaveAttribute('aria-selected', 'true');
    expect(three).toHaveFocus();

    fireEvent.keyDown(screen.getByRole('tablist'), { key: 'Home' });
    expect(one).toHaveAttribute('aria-selected', 'true');
    expect(one).toHaveFocus();

    fireEvent.keyDown(screen.getByRole('tablist'), { key: 'ArrowLeft' });
    expect(three).toHaveAttribute('aria-selected', 'true');
    expect(three).toHaveFocus();
  });
});
