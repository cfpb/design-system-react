import { StoryObj } from '@storybook/react-vite';
import { HTMLAttributes, ReactElement } from '../../../node_modules/react';
type TaglineProperties = HTMLAttributes<HTMLElement> & {
    isLarge?: boolean;
};
declare const meta: {
    title: string;
    tags: string[];
    component: (properties: TaglineProperties) => ReactElement;
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
