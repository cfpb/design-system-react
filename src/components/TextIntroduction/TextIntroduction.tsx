import classnames from 'classnames';
import { type ReactNode } from 'react';
import { Heading } from '../Headings/Heading';
import { Paragraph } from '../Paragraph/Paragraph';

type TextIntroductionProperties = React.HTMLProps<HTMLDivElement>;

/**
 * The text introduction is the standard page introduction pattern used across all pages that do not have a <a href="https://cfpb.github.io/design-system/patterns/heroes">hero</a> or <a href="https://cfpb.github.io/design-system/patterns/item-introductions">item introduction</a>. They introduce a page, or collection of pages, with a brief description of the goals of that section.
 *
 * Source: https://cfpb.github.io/design-system/patterns/text-introductions
 */
export const TextIntroduction = ({
  className,
  children,
  ...properties
}: TextIntroductionProperties): JSX.Element => {
  const cnames = ['o-text-introduction', className];

  return (
    <div
      className={classnames(cnames)}
      {...properties}
      data-testid='text-introduction-wrapper'
    >
      {children}
    </div>
  );
};
interface TextIntroductionSubProperties {
  children: ReactNode;
}

TextIntroduction.Heading = ({
  children
}: TextIntroductionSubProperties): JSX.Element => (
  <Heading type='1'>{children}</Heading>
);

TextIntroduction.Description = ({
  children
}: TextIntroductionSubProperties): JSX.Element => <p>{children}</p>;

TextIntroduction.Subheading = ({
  children
}: TextIntroductionSubProperties): JSX.Element => (
  <Paragraph isLead>{children}</Paragraph>
);

export default TextIntroduction;
