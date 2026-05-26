import { JSX, HTMLAttributes } from '../../../node_modules/react';
export interface HeroProperties extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'color'> {
    /** CSS background color on `.m-hero` (full bleed). Photo heroes also pass this to the wrapper for overlay image rules. */
    backgroundColor?: string;
    /** Hero heading copy (DS: 41 chars max for one line at largest breakpoint). */
    heading?: string;
    /** Illustration or photo URL for `.m-hero__image` / overlay wrapper background. */
    image?: string;
    /** Accessible name for the decorative hero image. */
    imageAltText?: string;
    /** Photo hero (`m-hero--overlay`): image on the wrapper at tablet+, in the image slot on mobile. */
    imageIsPhoto?: boolean;
    /** Dark background with light text (`m-hero--knockout`). Text color comes from DS styles. */
    isKnockout?: boolean;
    /** Lead copy under the heading (DS character counts vary by heading line count). */
    subheading?: string;
}
/**
 * CFPB hero pattern (illustration, photograph, knockout).
 *
 * Jumbo and 50/50 variants are not included — see
 * https://cfpb.github.io/design-system/patterns/heroes
 *
 * Heading uses DS `Heading` type 1 with `m-hero__heading`; subheading is `p.m-hero__subhead`.
 * Responsive type sizes are handled by DS CSS, not by configurable heading levels.
 */
export default function Hero({ backgroundColor, heading, image, imageAltText, imageIsPhoto, isKnockout, subheading, className, ...properties }: HeroProperties): JSX.Element;
