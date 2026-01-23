import type { Meta, StoryObj } from '@storybook/react';
import type { SyntheticEvent } from 'react';
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
        label: (
          <Link href='/data-research/prepaid-accounts/'>
            Prepaid Account Agreements
          </Link>
        )
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
        label: (
          <Link href='/data-research/'>
            Data & research
          </Link>
        )
      },
      {
        href: '/data-research/prepaid-accounts/',
        label: (
          <Link href='/data-research/prepaid-accounts/'>
            Prepaid Account Agreements
          </Link>
        )
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
        label: (
          <Link href='/data-research/'>
            Data & research
          </Link>
        )
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

export const CustomSeparator: Story = {
  render: properties => <Breadcrumb {...properties} />,
  args: {
    separator: ' > ',
    crumbs: [
      {
        href: '/a',
        label: <Link href='/a'>Section</Link>
      },
      {
        href: '/a/b',
        label: <Link href='/a/b'>Subsection</Link>
      },
      { href: '/a/b/c', label: 'Current', isCurrent: true }
    ]
  }
};

CustomSeparator.storyName = 'Custom separator';
