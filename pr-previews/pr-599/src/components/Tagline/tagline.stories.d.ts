import { StoryObj } from '@storybook/react-vite';
import { HTMLAttributes, ReactElement } from '../../../node_modules/react';
type TaglineProps = HTMLAttributes<HTMLElement> & {
    isLarge?: boolean;
};
declare const meta: {
    title: string;
    tags: string[];
    component: (props: TaglineProps) => ReactElement;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Standard: Story;
export declare const Large: Story;
