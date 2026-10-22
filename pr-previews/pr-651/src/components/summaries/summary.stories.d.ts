import { Meta, StoryObj } from '@storybook/react-vite';
import { Summary } from './summary';
declare const meta: Meta<typeof Summary>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const MobileOnly: Story;
export declare const Minimal: Story;
