import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '~/src/index';

/**
 * Use radio buttons when the user can select exactly one option from a group. Avoid long lists of radio buttons (usually no more than 6-8 options). When there are more than two options, stack radio buttons vertically. Use [checkboxes](https://cfpb.github.io/design-system/components/checkboxes) when the user can select more than one option from a group.
 *
 * Source: https://cfpb.github.io/design-system/components/radio-buttons
 */
const meta: Meta<typeof RadioButton> = {
  title: 'Components (Verified)/Radio buttons',
  tags: ['autodocs'],
  component: RadioButton,
  argTypes: {
    disabled: { control: 'boolean' },
    isLarge: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const helperText = 'This is optional helper text';

export const StandardRadio: Story = {
  name: 'Standard radio button',
  args: {
    id: 'testRadio',
    label: 'Standard radio button',
    name: 'Radio select'
  }
};

export const StandardRadioWithHelper: Story = {
  name: 'Standard radio button with helper text',
  args: {
    ...StandardRadio.args,
    id: 'StandardRadioWithHelper',
    helperText
  }
};

export const LargeRadio: Story = {
  name: 'Large target area radio button',
  args: {
    ...StandardRadio.args,
    id: 'LargeRadio',
    isLarge: true,
    label: 'Large target area radio button'
  }
};

export const LargeRadioWithHelper: Story = {
  name: 'Large target area radio button with helper text',
  args: {
    ...LargeRadio.args,
    id: 'LargeRadioWithHelper',
    isLarge: true,
    helperText
  }
};
