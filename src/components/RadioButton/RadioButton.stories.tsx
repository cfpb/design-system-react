import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '~/src/index';

/**
 * Use radio buttons when the user can choose only one option out of a list. Use these for a small number of discrete elements—avoid long lists of radio buttons (usually no more than 6-8 options). When there are more than two options, stack radio buttons vertically.
 *
 * Source: https://cfpb.github.io/design-system/components/radio-buttons
 */
const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: 'Components/Radio buttons',
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
