import { JSX, HTMLProps, ReactNode } from '../../../node_modules/react';
interface TextIntroductionProperties extends HTMLProps<HTMLDivElement> {
    heading: string;
    subheading: string;
    description?: ReactNode;
    callToAction?: JSX.Element;
}
/**
 * The text introduction is the standard page introduction pattern used across all pages that do not have a <a href="https://cfpb.github.io/design-system/patterns/heroes">hero</a> or <a href="https://cfpb.github.io/design-system/patterns/item-introductions">item introduction</a>. They introduce a page, or collection of pages, with a brief description of the goals of that section.
 *
 * Source: https://cfpb.github.io/design-system/patterns/text-introductions
 */
export declare const TextIntroduction: {
    ({ heading, subheading, description, callToAction, className, ...properties }: TextIntroductionProperties): JSX.Element;
    Container({ className, children, ...properties }: HTMLProps<HTMLDivElement>): JSX.Element;
    Heading({ children, }: TextIntroductionSubProperties): JSX.Element;
    Description({ children, }: TextIntroductionSubProperties): ReactNode;
    Subheading({ children, }: TextIntroductionSubProperties): JSX.Element;
};
export declare const TextIntroductionContainer: ({ className, children, ...properties }: HTMLProps<HTMLDivElement>) => JSX.Element;
interface TextIntroductionSubProperties {
    children: ReactNode;
}
export declare const TextIntroductionHeading: ({ children, }: TextIntroductionSubProperties) => JSX.Element;
export declare const TextIntroductionDescription: ({ children, }: TextIntroductionSubProperties) => ReactNode;
export declare const TextIntroductionSubheading: ({ children, }: TextIntroductionSubProperties) => JSX.Element;
export default TextIntroduction;
