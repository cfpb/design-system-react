import classnames from 'classnames';
import { cloneElement, type ReactNode } from 'react';
import { Heading } from '../Headings/Heading';
import List from '../List/List';
import ListItem from '../List/ListItem';
import { Paragraph } from '../Paragraph/Paragraph';

interface TextIntroductionProperties extends React.HTMLProps<HTMLDivElement> {
  // Page title
  heading: string;
  // Lead paragraph
  subheading: string;
  // Descriptive paragraph
  description?: ReactNode;
  // Call-to-action <Link>
  callToAction?: JSX.Element;
}

/**
 * The text introduction is the standard page introduction pattern used across all pages that do not have a <a href="https://cfpb.github.io/design-system/patterns/heroes">hero</a> or <a href="https://cfpb.github.io/design-system/patterns/item-introductions">item introduction</a>. They introduce a page, or collection of pages, with a brief description of the goals of that section.
 *
 * Source: https://cfpb.github.io/design-system/patterns/text-introductions
 */
export const TextIntroduction = ({
  callToAction,
  className,
  children,
  ...properties
}: TextIntroductionProperties): JSX.Element => {
  const cnames = ['o-text-introduction', className];

  const call2action = callToAction && (
    <List isLinks>
      <ListItem>{cloneElement(callToAction, { type: 'list' })}</ListItem>
    </List>
  );

  return (
    <div
      className={classnames(cnames)}
      {...properties}
      data-testid='text-introduction-wrapper'
    >
      {children}
      {call2action}
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
