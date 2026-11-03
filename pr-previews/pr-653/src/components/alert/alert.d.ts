import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
import { HeadingLevel } from '../../types/heading-level';
import { JSXElement } from '../../types/jsx-element';
import { AlertFieldLevelType } from './alert-field-level';
import { AlertLinkProperties } from './alert-link';
export declare const iconByType: Record<string, {
    name: string;
    hasBg: boolean;
}>;
export type AlertType = 'error' | 'info' | 'loading' | 'success' | 'warning';
interface AlertProperties {
    status?: AlertFieldLevelType | AlertType;
    message?: ReactNode;
    headingLevel?: HeadingLevel;
    children?: ReactNode;
    links?: AlertLinkProperties[];
    isVisible?: boolean;
    isFieldLevel?: boolean;
    showIcon?: boolean;
}
/**
 * Alerts draw a user’s attention to a change in the status of a form or page. Form-level alerts reflect a user or system action and appear below the form title. Field-level alerts appear inline with input fields and can highlight successful submissions, errors that need to be corrected, or details to know before submitting a form.
 *
 * Source: https://cfpb.github.io/design-system/components/alerts
 *
 */
export declare const Alert: ({ children, className, links, message, status, isVisible, isFieldLevel, showIcon, ...properties }: AlertProperties & HTMLAttributes<HTMLDivElement>) => JSXElement;
export default Alert;
