import { Meta, StoryObj } from '@storybook/react-vite';
import { Layout } from '../../index';
declare const meta: Meta<typeof Layout.Main>;
export default meta;
type Story = StoryObj<typeof meta>;
/** Composed page shell — use Controls to switch column layout or preview main-only. */
export declare const PageLayout: Story;
export declare const BuildingBlockMain: Story;
export declare const BuildingBlockContent: Story;
export declare const BuildingBlockSidebar: Story;
