import { Meta, StoryObj } from '@storybook/react-vite';
import { JSX } from '../../../node_modules/react';
import { Pagination } from '../../index';
declare const meta: Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Base: Story;
export declare const PreviousDisabledAtMinPage: Story;
export declare const NextDisabledAtMaxPage: Story;
export declare const UsePagination: {
    name: string;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
    render: () => JSX.Element;
};
