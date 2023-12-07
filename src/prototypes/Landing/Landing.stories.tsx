import type { Meta, StoryObj } from '@storybook/react';
import { FooterCfGov } from '~/src/components/Footer/FooterCfGov';
import PageHeader from '~/src/components/PageHeader/PageHeader';
import Landing from './index';

const meta: Meta<typeof Landing> = {
  title: 'Prototypes/Landing',
  component: Landing
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <PageHeader />
      <Landing />
      <FooterCfGov />
    </>
  )
};
