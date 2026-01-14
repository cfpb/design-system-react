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
### CFPB DS - Expandable component

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


export const PaddedExpandable: Story = {
  args: {
    ...Default.args,
    header: 'Expandable label',
    icon: 'bank',
    isPadded: true
  }
};


export const OpenOnLoad: Story = {
  args: {
    ...Default.args,
    header: 'Expandable label',
    openOnLoad: true
  }
};

export const TestExpandCollapse: Story = {
  play: async ({ canvasElement }) => {
    const waitTime = 500;
    const canvas = within(canvasElement);

    // Wait for initialization
    await sleep(waitTime);

    const heading = canvas.getByText(OpenOnLoad.args?.header ?? '');
    expect(heading).toBeInTheDocument();

    // Content wrapper collapsed
    const showHide = canvas.getByRole('button');
    expect(showHide.getAttribute('aria-expanded')).toMatch('false');

    // Content hidden
    const content = canvas.queryByText(/lorem ipsum/gi);
    expect(content).not.toBeVisible();

    // Toggle
    userEvent.click(showHide);
    await sleep(waitTime);

    // Content visible
    expect(showHide.getAttribute('aria-expanded')).toMatch('true');
    expect(content).toBeVisible();

    // Toggle
    userEvent.click(showHide);
    await sleep(waitTime);

    // Content hidden
    expect(showHide.getAttribute('aria-expanded')).toMatch('false');
    expect(content).not.toBeVisible();
  },
  args: {
    ...Default.args,
    header: 'Expandable label'
  }
};
