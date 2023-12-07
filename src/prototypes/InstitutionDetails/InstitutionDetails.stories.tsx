import type { Meta, StoryObj } from '@storybook/react';
import { FooterCfGov } from '~/src/components/Footer/FooterCfGov';
import PageHeader from '~/src/components/PageHeader/PageHeader';
import InstitutionDetails from './InstitutionDetails';

const meta: Meta<typeof InstitutionDetails> = {
  title: 'Prototypes/Institution Details',
  component: InstitutionDetails
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <PageHeader />
      <br />
      <br />
      <InstitutionDetails />
      <br />
      <br />
      <FooterCfGov />
    </>
  )
};
