import { Meta, StoryObj } from '@storybook/react-vite';
import { default as Checkbox } from './checkbox';
/**
Source: https://cfpb.github.io/design-system/components/checkboxes
*/
declare const meta: Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Enabled: Story;
export declare const Hover: Story;
export declare const Focus: Story;
export declare const Selected: Story;
export declare const Disabled: Story;
export declare const DisabledSelected: Story;
export declare const WithHelperText: Story;
