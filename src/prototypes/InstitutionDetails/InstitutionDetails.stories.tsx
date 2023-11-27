import type { Meta, StoryObj } from '@storybook/react';
import InstitutionDetails from './InstitutionDetails';

const meta: Meta<typeof InstitutionDetails> = {
  title: 'Prototypes/Institution Details',
  component: InstitutionDetails
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
