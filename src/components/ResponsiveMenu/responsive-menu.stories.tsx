import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResponsiveMenu } from '~/src/index';
import '../Header/header.scss';
import { ExampleLinks } from './responsive-menu';

const meta: Meta<typeof ResponsiveMenu> = {
  title: 'Components (Draft)/ResponsiveMenu',
  tags: ['autodocs'],
  component: ResponsiveMenu,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: ExampleLinks,
  },
  decorators: [
    (Story) => (
      <div className='o-header-scope'>
        <Story />
      </div>
    ),
  ],
};
