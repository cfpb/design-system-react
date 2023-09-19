import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/src/index';
import { ButtonGroup } from './ButtonGroup';

/**
 * Button type variants
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Types',
  component: Button,
  argTypes: {
    appearance: { control: 'select' },
    size: { control: 'select' },
    disabled: { control: 'boolean' }
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

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true
  }
};

export const Destructive: Story = {
  args: {
    ...Primary.args,
    appearance: 'warning'
  }
};

export const DestructiveAction: Story = {
  args: {
    ...Primary.args,
    label: 'Destructive action',
    appearance: 'warning',
    size: 'full',
    asLink: true
  },
  render: arguments_ => (
    <ButtonGroup>
      <Button label='Action' />
      <Button {...arguments_} />
    </ButtonGroup>
  )
};
