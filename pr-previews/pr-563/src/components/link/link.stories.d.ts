import { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../../index';
declare const meta: Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Inline: Story;
export declare const Standalone: Story;
export declare const WithIcon: Story;
export declare const Listlink: Story;
export declare const Destructive: Story;
/**
 * You can configure the DSR to use a router library's link component by wrapping your app
 * in the DSRContext provider and setting a `LinkComponent` value.
 * Your custom link component will be output instead of the default anchor element
 * everywhere the DSR's Link component is used.
 *
 * Example usage:
 *
 *  \<DSRContext value={{LinkComponent: YourRouterLinkComponent}} >
 *    App content
 *  \</DSRContext>
 */
export declare const LinkWithCustomLinkComponent: Story;
