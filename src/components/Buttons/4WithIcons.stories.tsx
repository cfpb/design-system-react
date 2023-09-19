import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '~/src/index';
import { Primary } from './1Types.stories';

/**
 * Display an icon within a button
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/With icons',
  component: Button,
  argTypes: {
    appearance: { control: 'select' },
    size: { control: 'select' },
    disabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StaticIconButtons: Story = {
  name: 'Static icon buttons',
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'default'
  },
  render: arguments_ => (
    <ButtonGroup>
      <Button {...arguments_} label='Back' iconLeft='left' />
      <Button {...arguments_} label='Next' iconRight='right' />
    </ButtonGroup>
  )
};

export const AnimatedIconButtons: Story = {
  name: 'Animated icon buttons',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
};
