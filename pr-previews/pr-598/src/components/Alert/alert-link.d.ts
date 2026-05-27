import { JSX } from '../../../node_modules/react';
export interface AlertLinkProperties {
    href: string;
    label: string;
    isExternal?: boolean;
}
export declare const AlertLink: ({ href, label, isExternal, }: AlertLinkProperties) => JSX.Element;
