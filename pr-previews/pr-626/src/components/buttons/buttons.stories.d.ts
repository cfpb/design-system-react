import { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';
/**
 Buttons are interactive elements that signal actions. They should be used sparingly as each additional button on a page reduces the visual prominence of a call to action. In contrast, links should lead users to another page or further information.

 Source: <a href="https://cfpb.github.io/design-system/components/buttons" target="_blank">https://cfpb.github.io/design-system/components/buttons</a>
 */
declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Disabled: Story;
export declare const Destructive: Story;
export declare const StaticIconButtons: Story;
export declare const AnimatedIconButtons: Story;
export declare const ButtonsGroup: Story;
export declare const FullWidthOnSmallScreens: Story;
export declare const ButtonLink: Story;
