import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/src/index';

/**
 Buttons signal actions. They should be used sparingly; each additional button on a page reduces the visual prominence of a call to action. In contrast, [links](https://cfpb.github.io/design-system/components/links) should lead users to another page or further information.

Source: [https://cfpb.github.io/design-system/components/buttons](https://cfpb.github.io/design-system/components/buttons)
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

export const FullWidthOnSmallScreens: Story = {
  name: 'Full width on x-small screens',
  args: {
    label: 'Button',
    appearance: 'primary',
    size: 'full'
  }
};
