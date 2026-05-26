import { Meta, StoryObj } from '@storybook/react-vite';
import { TextIntroduction } from '../../index';
declare const meta: Meta<typeof TextIntroduction>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Standard: {
    name: string;
    args: {
        heading: string;
        subheading: string;
        description: string;
        callToAction: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const Flexible: Story;
