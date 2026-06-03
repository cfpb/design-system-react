import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { FormSearch, type FormSearchProperties } from './form-search';

const logSubmit = (value: string): void => {
  // eslint-disable-next-line no-console -- Storybook demo feedback
  console.log('FormSearch submit:', value);
};

const FormSearchWithSubmitLog = (args: FormSearchProperties) => (
  <FormSearch
    {...args}
    onSubmit={(value) => {
      logSubmit(value);
      args.onSubmit?.(value);
    }}
  />
);

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
Minimal wrapper around the DS \`<cfpb-form-search>\` web component: search field,
clear control, optional typeahead (hidden \`<ul>\` slot), and submit button.
Use \`onChange\` / \`onSubmit\` for app logic; wrap in a parent \`<form>\` only when
you need native form submission.

**App setup:** call \`setSharedConfig({ iconPath: '/your/icons/' })\` from
\`@cfpb/cfpb-design-system\` before rendering (icons load from that URL). Storybook
configures this in \`.storybook/preview.js\`.

Source: [Reference for custom elements — Search widget](https://cfpb.github.io/design-system/components/reference-for-custom-elements)
        `,
      },
    },
  },
  argTypes: {
    showSubmitButton: { control: 'boolean' },
    disabled: { control: 'boolean' },
    // `value` forces controlled mode and blocks typing unless the parent updates it.
    value: { control: false, table: { disable: true } },
    defaultValue: { control: 'text' },
    onChange: { action: 'changed' },
    onSubmit: { action: 'submitted' },
  },
  render: (args) => <FormSearchWithSubmitLog {...args} />,
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

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue ?? '');

    return (
      <FormSearch
        {...args}
        onChange={(next) => {
          setValue(next);
          args.onChange?.(next);
        }}
        onSubmit={(next) => {
          logSubmit(next);
          args.onSubmit?.(next);
        }}
        value={value}
      />
    );
  },
  args: {
    ...Default.args,
    defaultValue: 'mortgage',
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
    defaultValue: 'a'.repeat(80),
  },
};
