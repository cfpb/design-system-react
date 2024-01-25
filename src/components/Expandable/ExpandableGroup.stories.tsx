import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { sleep } from '../../utils/sleep';
import { Expandable } from './Expandable';
import { ExpandableGroup } from './ExpandableGroup';

const meta: Meta<typeof ExpandableGroup> = {
  title: 'Components (Draft)/Expandable/Groups',
  component: ExpandableGroup,
  tags: ['autodocs'],
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

const Content = ({
  accordion
}: {
  accordion: boolean | undefined;
}): JSX.Element => {
  const linkPath = `/?path=/story/components-expandablegroup--${
    accordion ? 'accordion' : 'default'
  }`;

  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsa
      voluptatibus soluta nobis unde quisquam temporibus magnam debitis quidem.
      Ducimus ratione corporis nesciunt earum vel est quaerat blanditiis dolore
      ipsa?&nbsp;
      <a href={linkPath}>Lorem link</a>
    </p>
  );
};

export const Default: Story = {
  render: arguments_ => (
    <ExpandableGroup {...arguments_}>
      {['A', 'B', 'C'].map(value => (
        <Expandable
          key={`item-${value}`}
          header={`Expandable ${value}`}
          inAccordion={arguments_.accordion}
        >
          <Content accordion={arguments_.accordion} />
        </Expandable>
      ))}
    </ExpandableGroup>
  ),
  play: async ({ canvasElement, step }) => {
    // Setup
    const timeout = 1000;
    const options = { timeout };
    const canvas = within(canvasElement);
    const element = await canvas.findByTitle('Expandable A');

    // Helpers
    const expectAriaExpanded = (isExpanded: string): void =>
      expect(element.ariaExpanded).toBe(isExpanded);

    // Test
    await step('Starts out collapsed', async () => {
      await waitFor(async () => expectAriaExpanded('false'), options);
    });

    await step('Click to expanded', async () => {
      userEvent.click(element);
      await waitFor(async () => expectAriaExpanded('true'), options);
      await sleep(timeout);
    });

    await step('Click to collapse', async () => {
      userEvent.click(element);
      await waitFor(async () => expectAriaExpanded('false'), options);
    });
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
