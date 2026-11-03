import { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './heading';
/**
 * A successful type hierarchy establishes the order of importance of elements on a page. Consistent scaling, weights, and capitalization are used to create distinction between headings and provide users with familiar focus points when scanning text.
 *
 * Source: <a href='https://cfpb.github.io/design-system/foundation/headings' target='_blank'> https://cfpb.github.io/design-system/foundation/headings</a>
 */
declare const meta: Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const H1: Story;
export declare const H2: Story;
export declare const H3: Story;
export declare const H4: Story;
export declare const H5: Story;
export declare const Display: Story;
export declare const Eyebrow: Story;
export declare const Slug: Story;
