import type { Meta, StoryObj } from '@storybook/react';
import { Summary } from './Summary';

const meta: Meta<typeof Summary> = {
  title: 'Components (Draft)/Summaries',
  component: Summary,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the toggle button'
    },
    isMobileOnly: {
      control: 'boolean',
      description:
        'Whether the summary behavior should only apply on mobile viewports'
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const longTextContent = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. <a href='#'>Duis</a> aute irure dolor in reprehenderit
      in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <p>
      <ul>
        <li>
          <a href='#'>Link</a>
        </li>
        <li>
          <a href='#'>Link</a>
        </li>
        <li>
          <a href='#'>Link</a>
        </li>
      </ul>
    </p>
  </>
);

export const Default: Story = {
  name: 'Default',
  args: {
    label: 'Show full text',
    children: longTextContent
  }
};

export const MobileOnly: Story = {
  name: 'Mobile-only',
  args: {
    label: 'Show full text',
    isMobileOnly: true,
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. <a href='#'>Duis</a> aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </>
    )
  }
};

export const Minimal: Story = {
  name: 'Minimal',
  args: {
    isMinimal: true,
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. <a href='#'>Duis</a> aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </>
    )
  }
};
