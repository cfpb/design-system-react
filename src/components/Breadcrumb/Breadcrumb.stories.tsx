import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, Link } from '~/src/index';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components (Draft)/Breadcrumb',
  tags: ['autodocs'],
  component: Breadcrumb,
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof meta>;


export const SingleCrumb: Story = {
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [
      {
        href: '/data-research/prepaid-accounts/',
        label: 'Prepaid Account Agreements'
      }
    ]
  }
};
SingleCrumb.storyName = 'Single crumb';

export const MultipleCrumbs: Story = {
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [
      {
        href: '/data-research/',
        label: 'Data & research'
      },
      {
        href: '/data-research/prepaid-accounts/',
        label: 'Prepaid Account Agreements'
      }
    ]
  }
};
MultipleCrumbs.storyName = 'Multiple crumbs';

export const CurrentPage: Story = {
  render: properties => <Breadcrumb {...properties} />,
  args: {
    crumbs: [
      {
        href: '/data-research/',
        label: 'Data & research'
      },
      {
        href: '/data-research/prepaid-accounts/',
        label: 'Prepaid Account Agreements',
        isCurrent: true
      }
    ]
  }
};

CurrentPage.storyName = 'Current page (aria-current)';
