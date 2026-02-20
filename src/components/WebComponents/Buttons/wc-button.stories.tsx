import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { CfpbButton } from '~/node_modules/@cfpb/cfpb-design-system/src/elements/cfpb-button/index.js';

// Storybook control shape for the CFPB web-component button demo.
// We keep this explicit so Storybook generates predictable controls/docs.
interface WebComponentButtonArguments {
  variant: 'primary' | 'secondary' | 'warning';
  disabled: boolean;
  label: string;
  styleAsLink: boolean;
}

// Registers <cfpb-button> and its dependent custom elements once at module load.
// Necessary so React can render the custom element tag in the story canvas.
CfpbButton.init();

const meta: Meta<WebComponentButtonArguments> = {
  title: 'CFPB Web Components (Beta)/Buttons/CFPB button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'warning'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    styleAsLink: { control: 'boolean' },
  },
  // React renders the custom element, mapping args to element attributes and
  // using children as the button label slot content.
  render: ({ variant, disabled, label, styleAsLink }) =>
    React.createElement(
      'cfpb-button',
      {
        variant,
        disabled,
        styleAsLink,
      },
      label,
    ),
  parameters: {
    docs: {
      description: {
        component:
          'Proof-of-concept using the native CFPB Design System web component from `@cfpb/cfpb-design-system` to validate a package-only web-components path in this Storybook.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    label: 'Primary button',
    styleAsLink: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
    label: 'Secondary button',
  },
};

export const Warning: Story = {
  args: {
    ...Primary.args,
    variant: 'warning',
    label: 'Warning button',
  },
};

export const LinkStyle: Story = {
  args: {
    ...Primary.args,
    styleAsLink: true,
    label: 'Link-style button',
  },
};
