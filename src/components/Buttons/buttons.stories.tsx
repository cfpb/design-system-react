import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Button, Link } from '~/src/index';
import { ButtonGroup } from './button-group';

/**
 Buttons are interactive elements that signal actions. They should be used sparingly as each additional button on a page reduces the visual prominence of a call to action. In contrast, links should lead users to another page or further information.

 Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>
 */
const meta: Meta<typeof Button> = {
  title: 'Components (Verified)/Buttons',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select' },
    size: { control: 'select' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
    appearance: 'primary',
    size: 'default',
    disabled: false,
    isLink: false,
    iconLeft: undefined,
    iconRight: undefined,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /primary/i });

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: 'Secondary',
    appearance: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    label: 'Disabled',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /disabled/i });

    await userEvent.click(button);
    await expect(button).toBeDisabled();
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

export const Destructive: Story = {
  args: {
    ...Primary.args,
    label: 'Destructive',
    appearance: 'warning',
  },
};

export const StaticIconButtons: Story = {
  name: 'With icon',
  args: {
    ...Primary.args,
  },
  render: (arguments_) => (
    <>
      <ButtonGroup>
        <Button
          {...arguments_}
          label='Go back'
          iconLeft='left'
          appearance='secondary'
        />
        <Button
          {...arguments_}
          label='Continue'
          iconRight='right'
          appearance='secondary'
        />
      </ButtonGroup>
      <br />
      <Button iconRight='upload' label='Upload file' />
    </>
  ),
};

export const AnimatedIconButtons: Story = {
  name: 'With animated icon',
  args: {
    ...Primary.args,
    label: 'Submit your complaint',
  },
  render: (arguments_) => <Button {...arguments_} iconRight='updating' />,
};

export const ButtonsGroup: Story = {
  name: 'Button group',
  render: (arguments_) => (
    <>
      <ButtonGroup>
        <Button
          key='Go back'
          {...arguments_}
          appearance='secondary'
          label='Go back'
          iconLeft='left'
        />
        <Button
          key='Continue'
          {...arguments_}
          label='Continue'
          iconRight='right'
        />
      </ButtonGroup>
      <br />
      <ButtonGroup>
        <Button key='Submit' {...arguments_} label='Submit' />
        <Button
          appearance='warning'
          isLink
          key='Clear form'
          {...arguments_}
          label='Clear form'
        />
      </ButtonGroup>
    </>
  ),
};

export const FullWidthOnSmallScreens: Story = {
  name: 'Full-width (on x-small screens)',
  args: {
    ...Primary.args,
    label: 'Resize to mobile to see effect',
    appearance: 'primary',
    size: 'full',
  },
};

export const ButtonLink: Story = {
  name: 'Button link',
  render: (arguments_) => (
    <ButtonGroup>
      <Link
        isButton
        href='/'
        label='Link styled as a button'
        iconRight='download'
      />
      <Button
        isLink
        key='1'
        {...arguments_}
        label='Button styled as a link'
        iconRight='download'
      />
    </ButtonGroup>
  ),
};
