import { Meta } from '@storybook/react-vite';
import { Paragraph } from './paragraph';
declare const meta: Meta<typeof Paragraph>;
export default meta;
export declare const Body: {
    name: string;
    args: {
        children: string;
    };
};
export declare const Lead: {
    name: string;
    args: {
        children: string;
        isLead: boolean;
    };
};
