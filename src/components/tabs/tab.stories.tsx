import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Heading, Tab, TabList, TabPanel } from '~/src/index';

const meta: Meta<typeof Tab> = {
  title: 'Components (Draft)/Tabs',
  tags: ['autodocs'],
  component: Tab,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Tabs',
  render: () => {
    const [activeTab, setActiveTab] = useState('one');
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setActiveTab(event.currentTarget.value);
    };
    return (
      <>
        <TabList>
          <Tab
            id='one'
            value='one'
            isActive={activeTab === 'one'}
            iconLeft='list'
            label='Tab one'
            onClick={onClick}
          />
          <Tab
            id='two'
            value='two'
            isActive={activeTab === 'two'}
            iconLeft='chart'
            label='Tab two'
            onClick={onClick}
          />
          <Tab
            id='three'
            value='three'
            isActive={activeTab === 'three'}
            iconLeft='map'
            label='Tab three'
            onClick={onClick}
          />
        </TabList>
        <TabPanel id={activeTab} style={{ padding: '30px' }}>
          <Heading type='4'>Panel {activeTab}</Heading>
        </TabPanel>
      </>
    );
  },
};
