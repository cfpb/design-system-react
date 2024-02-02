import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/src/index';
import { ButtonGroup } from './ButtonGroup';

/**
 Buttons signal actions. They should be used sparingly; each additional button on a page reduces the visual prominence of a call to action. In contrast, <a href="https://cfpb.github.io/design-system/components/links" target="_blank">links</a> should lead users to another page or further information.

 Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>
 */
const meta: Meta<typeof Button> = {
  title: 'Components (Verified)/Buttons',
  component: Button,
  tags: ['autodocs'],
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
    size: 'default',
    disabled: false,
    asLink: false,
    iconLeft: undefined,
    iconRight: undefined
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
  name: 'Destructive action',
  args: {
    ...Primary.args,
    label: 'Destructive action',
    appearance: 'warning',
    size: 'default',
    asLink: true
  },
  render: arguments_ => (
    <ButtonGroup>
      <Button label='Action' />
      &nbsp;
      <Button {...arguments_} />
    </ButtonGroup>
  )
};

export const FullWidthOnSmallScreens: Story = {
  name: 'Full width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Button',
    appearance: 'primary',
    size: 'full'
  }
};

export const ButtonsGroup: Story = {
  name: 'Button group',
  render: arguments_ => (
    <ButtonGroup>
      <Button key='Yes' {...arguments_} label='Yes' />
      <Button key='No' {...arguments_} label='No' />
      <Button key='Maybe So' {...arguments_} label='Maybe So' />
    </ButtonGroup>
  )
};

export const StaticIconButtons: Story = {
  name: 'With icon',
  args: {
    ...Primary.args
  },
  render: arguments_ => (
    <ButtonGroup>
      <Button {...arguments_} label='Back' iconLeft='left' />
      <Button {...arguments_} label='Next' iconRight='right' />
    </ButtonGroup>
  )
};

export const AnimatedIconButtons: Story = {
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint'
  },
  render: arguments_ => <Button {...arguments_} iconRight='updating' />
};
