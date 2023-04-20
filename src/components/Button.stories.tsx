import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  component: Button,
  argTypes: {
    appearance: { control: 'select' },
    size: { control: 'select' },
    isDisabled: { control: 'boolean' }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'default'
  }
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    appearance: 'secondary'
  }
};

export const Warning: Story = {
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
};

export const Super: Story = {
  args: {
    ...Primary.args,
    size: 'super'
  }
};

export const FullWidthOnMobile: Story = {
  args: {
    ...Primary.args,
    size: 'full'
  }
};
