import { JSX } from '../../../node_modules/react';
export interface AlertLinkProperties {
    to: string;
    label: string;
    isExternal?: boolean;
}
export declare const AlertLink: ({ to, label, isExternal, }: AlertLinkProperties) => JSX.Element;
