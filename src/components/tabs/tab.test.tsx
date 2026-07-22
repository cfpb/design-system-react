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
});
