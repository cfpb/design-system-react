import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor } from '@storybook/testing-library';
import { within } from '@testing-library/react';
import Expandable from './Expandable';
import { ExpandableGroup } from './ExpandableGroup';

import { expect } from '@storybook/jest';

const meta: Meta<typeof ExpandableGroup> = {
  component: ExpandableGroup,
  argTypes: {
    accordion: { control: 'boolean' }
  },
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - ExpandableGroup component

Source: https://cfpb.github.io/design-system/components/expandables
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const Content = ({ accordion }: { accordion: boolean | undefined }) => {
  const linkPath = `/?path=/story/components-expandablegroup--${
    accordion ? 'accordion' : 'default'
  }`;

  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
      voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem.
      Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore
      ipsa?&nbsp;
      <a href={linkPath}>Lorem link</a>
    </div>
  );
};

export const Default: Story = {
  render: args => (
    <ExpandableGroup {...args}>
      {[1, 2, 3].map(val => (
        <Expandable header={`Expandable ${val}`} inAccordion={args.accordion}>
          <Content accordion={args.accordion} />
        </Expandable>
      ))}
    </ExpandableGroup>
  ),
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    const el = await canvas.findByTitle('Expandable 1');

    await step('Expand tile - Aria Expanded is true', async () => {
      await userEvent.click(el);
      waitFor(
        () => {
          expect(el.ariaExpanded).toBe('true');
        },
        { timeout: 1000 }
      );
    });

    // await step('Collapse tile - Aria Expanded is false', async () => {
    //   await userEvent.click(el);
    //   waitFor(
    //     () => {
    //       expect(el.ariaExpanded).toBe('false');
    //     },
    //     { timeout: 1000 }
    //   );
    // });
  },
  args: {
    groupId: 'DefaultGroup'
  }
};

export const Accordion: Story = {
  ...Default,
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
};
