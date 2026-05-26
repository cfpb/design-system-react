import { JSX, HTMLAttributes, ReactNode } from '../../../node_modules/react';
import { HeadingLevel } from '../../types/heading-level';
interface HeroProperties extends HTMLAttributes<HTMLDivElement> {
    backgroundColor?: string;
    heading?: ReactNode;
    headingLevel?: HeadingLevel;
    image?: string;
    imageAltText?: string;
    imageIsPhoto?: boolean;
    isKnockout?: boolean;
    subheading?: ReactNode;
    subheadingLevel?: HeadingLevel | 'p';
    textColor?: string;
}
/**
 * https://cfpb.github.io/design-system/patterns/heroes
 *
 * The Jumbo and 50/50 hero variants, included in the CFPB Design System,
 * and used on the CF.gov homepage are not included by this component.
 *
 * The implementation of the hero on https://www.consumerfinance.gov/es/
 * uses a combination of Jumbo and 50/50 hero variants including some tweaks in
 * wagtail.
 */
export default function Hero({ backgroundColor, heading, headingLevel, image, imageAltText, imageIsPhoto, isKnockout, subheading, subheadingLevel, textColor, className, ...properties }: HeroProperties): JSX.Element;
export {};
