import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup } from '~/src/index';

/**
 Buttons signal actions. They should be used sparingly; each additional button on a page reduces the visual prominence of a call to action. In contrast, [links](https://cfpb.github.io/design-system/components/links) should lead users to another page or further information.

Source: [https://cfpb.github.io/design-system/components/buttons](https://cfpb.github.io/design-system/components/buttons)
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
