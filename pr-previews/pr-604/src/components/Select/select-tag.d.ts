import { JSX, KeyboardEvent, MouseEvent } from '../../../node_modules/react';
interface TagProperties {
    value: string;
    label: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
    htmlFor: string;
    'data-testid'?: string;
}
export declare const SelectTag: ({ value, label, onClick, onKeyDown, htmlFor, ...properties }: TagProperties) => JSX.Element;
export {};
