import { Meta, StoryObj } from '@storybook/react-vite';
import { default as Layout } from './layout';
declare const meta: Meta<typeof Layout.Wrapper>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Wrapper: Story;
