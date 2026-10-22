import { JSX, HTMLAttributes } from '../../../node_modules/react';
interface HeroSharedProperties extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'color'> {
    /** CSS background color on `.m-hero` (full bleed). Photo heroes also pass this to the wrapper for overlay image rules. */
    backgroundColor?: string;
    /** Content guidelines for heading: One-line (at largest breakpoint): 41 characters maximum; Two-lines (at largest breakpoint): 82 characters maximum */
    heading?: string;
    /** Illustration or photo URL for `.m-hero__image` / overlay wrapper background. */
    image?: string;
    /** Accessible name for the decorative hero image. */
    imageAltText?: string;
    /** When using a dark background, add the m-hero--knockout to switch the text to white. */
    isKnockout?: boolean;
    /** Content guidelines for subheading: After one-line heading, subheading text can be between 165 and 186 characters (three lines at largest breakpoint); After two-line heading, subheading text can be between 108 and 124 characters (two lines at largest breakpoint) */
    subheading?: string;
}
export type HeroProperties = HeroSharedProperties & ({
    /** Photo hero (`m-hero--overlay`): Two images must be created, one for large and one for small screens.*/
    imageIsPhoto: true;
    /** Required mobile photo URL for `.m-hero__image` when `imageIsPhoto` is true. */
    mobileImage: string;
} | {
    imageIsPhoto?: false;
    mobileImage?: string;
});
/**
 * CFPB hero pattern (illustration, photograph, knockout).
 *
 * Jumbo and 50/50 variants are not included — see
 * https://cfpb.github.io/design-system/patterns/heroes
 *
 * Heading uses DS `Heading` type 1 with `m-hero__heading`; subheading is `p.m-hero__subhead`.
 * Responsive type sizes are handled by DS CSS, not by configurable heading levels.
 */
export default function Hero({ backgroundColor, heading, image, imageAltText, imageIsPhoto, mobileImage, isKnockout, subheading, className, ...properties }: HeroProperties): JSX.Element;
export {};
