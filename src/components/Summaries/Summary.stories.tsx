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
      This is a long block of text that should be truncated by the Summary
      component. The component is designed to automatically wrap long blocks of
      content and provide a toggle button to reveal the full text when the
      content exceeds a certain height (typically 88px or 5.5em).
    </p>
    <p>
      By default, the Summary component is always active, but it can also be
      configured to only apply the summary behavior on mobile viewports using
      the <code>isMobileOnly</code> prop.
    </p>
    <p>
      The button label can be customized as well. In this example, we are using
      the default label &quot;Show full text&quot;. When the user clicks the button, the
      content expands to its full height and the button is hidden.
    </p>
    <p>
      This implementation follows the CFPB Design System standards for
      summaries, ensuring a consistent user experience across platforms.
    </p>
  </>
);

export const Default: Story = {
  name: 'Summary (on desktop)',
  args: {
    label: 'Show full text',
    children: longTextContent
  }
};

export const MobileOnly: Story = {
  name: 'Summary on Mobile',
  args: {
    label: 'Show full text',
    isMobileOnly: true,
    children: (
      <>
        <p>
          This summary behavior will only be applied on mobile viewports (widths
          below 600px). On larger screens, the content will be fully visible and
          the &quot;Show full text&quot; button will be hidden.
        </p>
        <p>
          Try resizing your browser or switching to a mobile view in Storybook
          to see the behavior change.
        </p>
        {longTextContent}
      </>
    )
  }
};

export const Minimal: Story = {
  name: 'Summary Minimal',
  args: {
    label: 'Show full text',
    isMinimal: true,
    children: (
      <>
        <p>
          This summary behavior will only be applied on mobile viewports (widths
          below 600px). On larger screens, the content will be fully visible and
          the &quot;Show full text&quot; button will be hidden.
        </p>
        <p>
          Try resizing your browser or switching to a mobile view in Storybook
          to see the behavior change.
        </p>
        {longTextContent}
      </>
    )
  }
};
