import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/src/index';

/**
 * Button size variants
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Sizes',
  component: Button,
  argTypes: {
    appearance: { control: 'select' },
    size: { control: 'select' },
    disabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Super: Story = {
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'super'
  }
};

export const FullWidthOnSmallScreens: Story = {
  name: 'Full width on x-small screens',
  args: {
    ...Super.args,
    size: 'full'
  }
};
