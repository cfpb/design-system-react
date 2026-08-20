import { JSXElement } from '../../types/jsx-element';
export type LanguageDefinition = Record<string | symbol, Record<string | symbol, string>>;
export declare const LanguageMap: LanguageDefinition;
export declare const AllLanguageCodes: string[];
export interface LanguageLinkProperties {
    code: string;
    href?: string;
    label?: string;
    languageMap?: LanguageDefinition;
}
/**
 * CFGov language link
 *
 * @param code Language code
 * @param href URL
 * @param label Display text
 * @param languageMap A collection of language definitions
 *
 * @returns JSX.Element
 */
export declare const LanguageLink: ({ code, href, label, languageMap, ...others }: LanguageLinkProperties) => JSXElement;
