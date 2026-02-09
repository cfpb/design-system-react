import type { Meta, StoryObj } from '@storybook/react-vite';
import Component from './component';

// Best practice checklist:
// - Add the component description from the CFPB Design System page for the component in the component file JSDoc block (autodocs uses it).
// - Add the link to the component's CFPB Design System documentation page in https://cfpb.github.io/design-system/components/
// - Keep stories focused on behavior/appearance; avoid test-only props.
// - Each CFPB Design System component variant is implemented as a separate story
// - Story name is written in sentence case (eg., Radio Button => Radio button)
// - Use args for the "Default" story and reuse them in variants.
// - The order of the stories matches between the DS and the DSR (same component names, same placeholder text, etc.)
// - The components have the same sample text between the DS and the DSR

const meta: Meta<typeof Component> = {
  // TODO: Update to your component's category and name.
  title: 'Templates/Component name',
  component: Component,
  tags: ['autodocs'],
  // TODO: Add only the controls you want exposed in the UI.
  argTypes: {
    // Example:
    // size: { control: 'select', options: ['sm', 'md', 'lg'] },
    // disabled: { control: 'boolean' }
  },
  parameters: {
    // Optional: add a short summary if JSDoc is not enough.
    // docs: {
    //   description: { component: 'Short component summary.' }
    // }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

// Reuse args between stories to keep the control panel consistent.
const baseArgs = {
  // TODO: Add the minimal required props.
  label: 'Example label',
  // The sample text we use in these components should match the CFPB Design
  // System component page example.
  helperText: 'Optional helper text'
};

export const Default: Story = {
  args: {
    ...baseArgs
  }
};

export const WithVariant: Story = {
  name: 'With variant',
  args: {
    ...baseArgs
    // TODO: Override a prop to demonstrate a meaningful variant.
    // Example:
    // variant: 'secondary'
  },
  parameters: {
    // Optional: explain why this variant exists.
    // docs: { description: { story: 'Use for secondary actions.' } }
  }
};
