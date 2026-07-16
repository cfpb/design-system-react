import { Meta, StoryObj } from '@storybook/react-vite';
import { Fieldset } from '../../index';
/**
 *
 * Source: https://cfpb.github.io/design-system/components/fieldsets
 */
declare const meta: Meta<typeof Fieldset>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const WithCheckboxes: Story;
export declare const WithRadioButtons: Story;
export declare const LargeTargetWithCheckboxes: Story;
export declare const LargeTargetWithRadioButtons: Story;
