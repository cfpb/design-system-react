import type { Meta, StoryObj } from '@storybook/react';
import FilingLanding from './FilingLanding';

const meta: Meta<typeof FilingLanding> = {
  component: FilingLanding,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Filing: Story = {};
