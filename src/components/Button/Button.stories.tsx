import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../index';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    appearance: { control: 'select' },
    size: { control: 'select' },
    isDisabled: { control: 'boolean' }
  }
};

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

export const ButtonAsLink: Story = {
  args: {
    ...Primary.args,
    size: 'full',
    asLink: true
  }
};

export const ButtonAsDestructiveLink: Story = {
  args: {
    ...Primary.args,
    label: 'Destructive button',
    appearance: 'warning',
    size: 'full',
    asLink: true
  }
};
