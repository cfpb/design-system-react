import { Meta, StoryObj } from '@storybook/react-vite';
import { default as Hero } from './hero';
declare const meta: Meta<typeof Hero>;
export default meta;
type Story = StoryObj<typeof Hero>;
export declare const WithIllustration: Story;
export declare const WithPhotograph: Story;
export declare const WithKnockoutText: Story;
