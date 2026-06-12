import { FC, HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface SummaryProperties extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    /** Label for the toggle button */
    label?: string;
    /** Whether the summary behavior should only apply on mobile viewports */
    isMobileOnly?: boolean;
    /** Use the minimal variation with toggle capabilities */
    isMinimal?: boolean;
}
/**
 * Summary components hides content over a certain height. When the hidden content is shown it can’t be reverted to the summary until the page is reloaded.
 *
 * Source: <a href='https://cfpb.github.io/design-system/components/summaries' target='_blank'>https://cfpb.github.io/design-system/components/summaries</a>
 */
export declare const Summary: FC<SummaryProperties>;
export default Summary;
