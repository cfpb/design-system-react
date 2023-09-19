import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '~/src/index';

/**
 *
 */
const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Buttons/Groups',
  component: ButtonGroup
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultButtons = [
  <Button key='Yes' label='Yes' />,
  <Button key='No' label='No' />,
  <Button key='Maybe So' label='Maybe So' />
];

export const Default: Story = {
  args: {
    children: defaultButtons
  },
  render: arguments_ => <ButtonGroup {...arguments_} />
};
