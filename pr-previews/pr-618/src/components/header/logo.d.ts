import { JSX } from '../../../node_modules/react';
export type LogoLanguage = 'en' | 'es';
export interface LogoProperties {
    language?: LogoLanguage;
    className?: string;
}
export declare function Logo({ language, className, }: LogoProperties): JSX.Element;
