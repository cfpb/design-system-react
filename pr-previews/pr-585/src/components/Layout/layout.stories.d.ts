import { Meta, StoryObj } from '@storybook/react-vite';
import { Layout } from '../../index';
declare const meta: Meta<typeof Layout.Main>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const MainContentAndSidebar: Story;
export declare const LeftHandSidebarLayout: Story;
export declare const RightHandSidebarLayout: Story;
