import { HTMLAttributes } from '../../../node_modules/react';
import { JSXElement } from '../../types/jsx-element';
export interface BreadcrumbCrumb {
    to: string;
    label: string;
    isCurrent?: boolean;
}
export interface BreadcrumbProperties extends HTMLAttributes<HTMLDivElement> {
    crumbs: BreadcrumbCrumb[];
    ariaLabel?: string;
}
/**
 * Breadcrumbs provide secondary navigation to help users understand where they are in a website.
 *
 */
export declare const Breadcrumb: ({ crumbs, ariaLabel, className, ...properties }: BreadcrumbProperties) => JSXElement;
