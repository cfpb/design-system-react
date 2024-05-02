import classnames from 'classnames';
import { cloneElement, type ReactNode } from 'react';
import { Heading } from '../Headings/Heading';
import List from '../List/List';
import ListItem from '../List/ListItem';
import { Paragraph } from '../Paragraph/Paragraph';

const renderDescription = (description: ReactNode | string): ReactNode => {
  if (!description) return null;
  if (typeof description === 'string')
    return <Paragraph>{description}</Paragraph>;
  return description;
};

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
  heading,
  subheading,
  description,
  callToAction,
  className,
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
      <Heading type='1'>{heading}</Heading>
      <Paragraph isLead>{subheading}</Paragraph>
      {renderDescription(description)}
      {call2action}
    </div>
  );
};

TextIntroduction.Container = ({
  className,
  children,
  ...properties
}: React.HTMLProps<HTMLDivElement>): JSX.Element => {
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

export const TextIntroductionContainer = TextIntroduction.Container;
interface TextIntroductionSubProperties {
  children: ReactNode;
}

TextIntroduction.Heading = ({
  children
}: TextIntroductionSubProperties): JSX.Element => (
  <Heading type='1'>{children}</Heading>
);

export const TextIntroductionHeading = TextIntroduction.Heading;

TextIntroduction.Description = ({
  children
}: TextIntroductionSubProperties): ReactNode => renderDescription(children);

export const TextIntroductionDescription = TextIntroduction.Description;

TextIntroduction.Subheading = ({
  children
}: TextIntroductionSubProperties): JSX.Element => (
  <Paragraph isLead>{children}</Paragraph>
);

export const TextIntroductionSubheading = TextIntroduction.Subheading;

export default TextIntroduction;
