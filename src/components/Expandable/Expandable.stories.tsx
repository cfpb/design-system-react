import { expect } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { Expandable } from '~/src/index';
import { sleep } from '../../utils/sleep';

const meta: Meta<typeof Expandable> = {
  title: 'Components (Draft)/Expandables',
  component: Expandable,
  tags: ['autodocs'], 
  parameters: {
    docs: {
      description: {
        component: `
Expandables are components that have additional content that can be opened (expanded) and closed (collapsed). They can appear on their own or in groups. They may be helpful for FAQ sections, schedules, and for conserving vertical space by collapsing secondary information on mobile devices.

Source: https://cfpb.github.io/design-system/components/expandables
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Content = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
    voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem.
    Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore
    ipsa?&nbsp;
    <a href='/?path=/story/components-expandable--default'>Lorem link</a>
  </p>
);

export const Default: Story = {
  args: {
    header: 'Expandable label',
    children: Content
  }
};

export const OpenOnLoad: Story = {
  args: {
    ...Default.args,
    header: 'Expandable label',
    openOnLoad: true
  }
};

export const PaddedExpandable: Story = {
  args: {
    ...Default.args,
    header: 'Expandable label',
    icon: 'bank',
    isPadded: true
  }
};
