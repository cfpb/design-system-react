import { expect, userEvent, waitFor, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Expandable } from '~/src/index';
import { sleep } from '../../utils/sleep';

// This is the expandable group
import { ExpandableGroup } from './ExpandableGroup';


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

const ContentForGroup = ({
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
    name: 'Single',
  args: {
    header: 'Expandable label',
    children: Content
  }
};

export const PaddedExpandable: Story = {
  name: 'Padded',
  args: {
    ...Default.args,
    header: 'Expandable label',
    isPadded: true
  }
};

export const OpenOnLoad: Story = {
   name: 'Open on load',
   args: {
    ...Default.args,
    header: 'Expandable label',
    openOnLoad: true
  }
};

export const DefaultExpandableGroup: Story = {
  name: 'Group',
  render: arguments_ => (
    <ExpandableGroup {...arguments_}>
      {['label', 'label', 'label'].map((value, index) => (
        <Expandable
          key={`item-${value}-${index}`}
          header={`Expandable ${value}`}
          inAccordion={arguments_.accordion}
        >
          <ContentForGroup accordion={arguments_.accordion} />
        </Expandable>
      ))}
    </ExpandableGroup>
  ),
  play: async ({ canvasElement, step }) => {
    // Setup
    const timeout = 1000;
    const options = { timeout };
    const canvas = within(canvasElement);
    const allElements = await canvas.findAllByTitle('Expandable label');

    // get the first one
    const element = allElements[0];

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
  ...DefaultExpandableGroup,
  name: 'Accordion',
  args: {
    accordion: true,
    groupId: 'AccordionGroup'
  }
};





