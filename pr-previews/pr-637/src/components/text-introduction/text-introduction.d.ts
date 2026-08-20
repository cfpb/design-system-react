import { FC, HTMLProps, JSX, ReactNode } from '../../../node_modules/react';
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
    Container: FC<HTMLProps<HTMLDivElement>>;
    Heading: FC<TextIntroductionSubProperties>;
    Description: FC<TextIntroductionSubProperties>;
    Subheading: FC<TextIntroductionSubProperties>;
};
interface TextIntroductionSubProperties {
    children: ReactNode;
}
declare const TextIntroductionContainer: FC<HTMLProps<HTMLDivElement>>;
export { TextIntroductionContainer };
declare const TextIntroductionHeading: FC<TextIntroductionSubProperties>;
export { TextIntroductionHeading };
declare const TextIntroductionDescription: FC<TextIntroductionSubProperties>;
export { TextIntroductionDescription };
declare const TextIntroductionSubheading: FC<TextIntroductionSubProperties>;
export { TextIntroductionSubheading };
export default TextIntroduction;
