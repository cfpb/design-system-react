import { JSX } from '../../../node_modules/react';
import { HeadingLevel } from '../../types/heading-level';
interface WellContainerProperties {
    children?: (JSX.Element | string | null)[] | JSX.Element | string;
    className?: string;
}
/**
 * Wells are used to highlight specific information within a designated section of a page. This breaks up the flow of content on the page and helps to emphasize and set apart the content that is included. They are generally used on <a href="https://cfpb.github.io/design-system/pages/browse-pages">browse</a>, <a href="https://cfpb.github.io/design-system/pages/learn-pages">learn</a>, and <a href="https://cfpb.github.io/design-system/pages/document-detail-pages">document detail pages</a>.
 *
 * Source: https://cfpb.github.io/design-system/patterns/wells
 */
declare const WellContainer: ({ children, className, ...properties }: WellContainerProperties) => JSX.Element;
interface WellContentProperties {
    heading?: string;
    headingLevel?: HeadingLevel;
    links?: JSX.Element[];
    text?: JSX.Element | string;
    className?: string;
}
declare function WellContent({ heading, headingLevel, links, text, className, ...properties }: WellContentProperties): JSX.Element;
export { WellContainer, WellContent };
