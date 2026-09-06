import classnames from 'classnames';
import {
  cloneElement,
  isValidElement,
  type FC,
  type HTMLProps,
  type JSX,
  type ReactNode,
} from 'react';
import { Heading } from '../headings/heading';
import { ListLink } from '../link/link';
import List from '../list/list';
import ListItem from '../list/list-item';
import { Paragraph } from '../paragraph/paragraph';

const renderDescription = (description: ReactNode | string): ReactNode => {
  if (!description) return null;
  if (typeof description === 'string')
    return <Paragraph>{description}</Paragraph>;
  return description;
};

interface TextIntroductionProperties extends HTMLProps<HTMLDivElement> {
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
      {isValidElement(callToAction) &&
      (callToAction.type === ListItem || callToAction.type === ListLink) ? (
        callToAction
      ) : (
        <ListItem>{cloneElement(callToAction, { type: 'list' })}</ListItem>
      )}
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

interface TextIntroductionSubProperties {
  children: ReactNode;
}

const TextIntroductionContainer: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  ...properties
}) => {
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
TextIntroductionContainer.displayName = 'TextIntroduction.Container';
TextIntroduction.Container = TextIntroductionContainer;

export { TextIntroductionContainer };

const TextIntroductionHeading: FC<TextIntroductionSubProperties> = ({
  children,
}) => <Heading type='1'>{children}</Heading>;
TextIntroductionHeading.displayName = 'TextIntroduction.Heading';
TextIntroduction.Heading = TextIntroductionHeading;

export { TextIntroductionHeading };

const TextIntroductionDescription: FC<TextIntroductionSubProperties> = ({
  children,
}) => renderDescription(children);
TextIntroductionDescription.displayName = 'TextIntroduction.Description';
TextIntroduction.Description = TextIntroductionDescription;

export { TextIntroductionDescription };

const TextIntroductionSubheading: FC<TextIntroductionSubProperties> = ({
  children,
}) => <Paragraph isLead>{children}</Paragraph>;
TextIntroductionSubheading.displayName = 'TextIntroduction.Subheading';
TextIntroduction.Subheading = TextIntroductionSubheading;

export { TextIntroductionSubheading };

export default TextIntroduction;
