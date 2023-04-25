import type { Meta, StoryObj } from '@storybook/react';
import { Expandable } from './Expandable';

const meta: Meta<typeof Expandable> = {
  component: Expandable,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - Expandable component

Source: https://cfpb.github.io/design-system/components/expandables
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Content = <>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem.
Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore
ipsa?&nbsp;
<a href='/?path=/story/components-expandable--default'>Lorem link</a>
</>

export const Default: Story = {
  args: {
    header: 'Expandable Header',
    children: Content
  }
}

export const OpenOnLoad: Story = {
  args: {
    ...Default.args,
    header: 'Expandable Header',
    openOnLoad: true
  }
}

