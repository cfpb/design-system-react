import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { FormSearch } from './form-search';

const SAMPLE_SUGGESTIONS = [
  { label: 'How do I add money to my prepaid card?' },
  { label: 'What are credit card “add-on products?”' },
  { label: 'How do I qualify for an advertised 0% auto financing?' },
  { label: 'Can I make additional payments on my student loan?' },
  { label: 'How do I tell if I have a fixed or adjustable rate mortgage?' },
];

const meta: Meta<typeof FormSearch> = {
  title: 'Components (Draft)/Form search',
  tags: ['autodocs', 'web-component'],
  component: FormSearch,
  parameters: {
    docs: {
      description: {
        component: `
Wraps the DS \`<cfpb-form-search>\` web component: search field, clear control,
optional typeahead suggestions, and submit button.

Source: [Reference for custom elements — Search widget](https://cfpb.github.io/design-system/components/reference-for-custom-elements)
        `,
      },
    },
  },
  argTypes: {
    showSubmitButton: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'q',
    placeholder: 'Enter your search term(s)',
    submitLabel: 'Search',
  },
};

export const WithTypeahead: Story = {
  name: 'With typeahead',
  args: {
    ...Default.args,
    suggestions: SAMPLE_SUGGESTIONS,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('searchbox');

    await userEvent.click(input);
    await userEvent.type(input, 'pre');

    await expect(canvas.getByText(SAMPLE_SUGGESTIONS[0].label)).toBeVisible();
  },
};

export const CustomSubmitButton: Story = {
  name: 'Custom submit button',
  args: {
    ...Default.args,
    submitLabel: 'Find answers',
    submitAriaLabel: 'Find answers to your question',
  },
};

export const WithoutSubmitButton: Story = {
  name: 'Without submit button',
  args: {
    ...Default.args,
    showSubmitButton: false,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const ValidationError: Story = {
  name: 'Validation error',
  args: {
    ...Default.args,
    validation: 'error',
    value: 'a'.repeat(80),
  },
};
