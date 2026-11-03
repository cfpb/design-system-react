import { JSX, HTMLProps } from '../../../node_modules/react';
interface BannerProperties extends HTMLProps<HTMLDivElement> {
    isHorizontal?: boolean;
    links?: JSX.Element[];
    phoneNumber?: string;
    tagline?: JSX.Element | string;
}
/**
 * The US gov banner identifies official websites of government organizations in the United States. It helps visitors understand whether a website is official and secure.
 *
 * Source: <a href='https://cfpb.github.io/design-system/components/banner-us-gov' target='_blank'> https://cfpb.github.io/design-system/components/banner-us-gov</a>
 */
export declare const Banner: ({ isHorizontal, tagline, phoneNumber, links, className, ...properties }: BannerProperties) => JSX.Element;
export {};
