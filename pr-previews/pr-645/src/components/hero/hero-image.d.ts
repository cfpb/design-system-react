import { JSXElement } from '../../types/jsx-element';
interface HeroImageProperties {
    image?: string;
    mobileImage?: string;
    altText?: string;
}
/**
 * DS pattern: empty `.m-hero__image` with `background-image` (not `<img>`), so
 * `background-size: contain` and aspect ratio control the slot height.
 * https://cfpb.github.io/design-system/patterns/heroes
 */
export declare const HeroImage: ({ image, mobileImage, altText, }: HeroImageProperties) => JSXElement;
export {};
