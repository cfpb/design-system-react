import type { Meta, StoryObj } from '@storybook/react';
import { Expandable } from '.';
import { ExpandableGroup } from './ExpandableGroup';

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

const Content = ({
  accordion
}: {
  accordion: boolean | undefined;
}): JSX.Element => {
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
