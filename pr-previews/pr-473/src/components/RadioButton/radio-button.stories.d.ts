import { Meta, StoryObj } from '@storybook/react-vite';
import { RadioButton } from '../../index';
/**
 * Use radio buttons when the user can select exactly one option from a group. Avoid long lists of radio buttons (usually no more than 6-8 options). When there are more than two options, stack radio buttons vertically. Use [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) when the user can select more than one option from a group.
 *
 * Source: https://cfpb.github.io/design-system/components/radio-buttons
 */
declare const meta: Meta<typeof RadioButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const StandardRadio: Story;
export declare const StandardRadioWithHelper: Story;
export declare const LargeRadio: Story;
export declare const LargeRadioWithHelper: Story;
