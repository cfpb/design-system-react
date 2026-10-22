import { SVGProps } from '../../../node_modules/react';
import { JSXElement } from '../../types/jsx-element';
interface IconProperties extends Omit<SVGProps<SVGSVGElement>, 'name'> {
    name: string;
    alt?: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    isPresentational?: boolean;
    hasBg?: boolean;
    size?: string;
}
/**
 * CFPB DS Icon
 *
 * https://cfpb.github.io/design-system/foundation/iconography
 *
 * @param name Canonical icon name
 * @param alt Alt text for image
 * @param ariaLabel Labels the SVG for accessibility
 * @param ariaLabelledby ID of element that labels the SVG for accessibility
 * @param ariaDescribedby ID of element that describes the SVG for accessibility
 * @param isPresentational Is SVG purely presentational and should be ignored by screen readers?
 * @param hasBg With background?
 * @param size Match the icon size to a specified HTML element or provide a custom size. By default the icon size is determined by it's parent element's font-size.
 * @returns JSXElement
 */
export declare const Icon: ({ name, alt, ariaLabel, ariaLabelledby, ariaDescribedby, isPresentational, hasBg, size, ...others }: IconProperties) => JSXElement;
export {};
