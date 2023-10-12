import classnames from 'classnames';
import { cloneElement, type ReactNode } from 'react';
import { Heading } from '../Headings/Heading';
import List from '../List/List';
import ListItem from '../List/ListItem';
import { Paragraph } from '../Paragraph/Paragraph';
import './TextIntroduction.less';

interface TextIntroductionProperties extends React.HTMLProps<HTMLDivElement> {
  // Page title
  heading: string;
  // Lead paragraph
  subheading: string;
  // Descriptive paragraph
  description?: ReactNode | string;
  // Call-to-action <Link>
  callToAction?: JSX.Element;
  // Remove top margin?
  isFlushTop?: boolean;
  // Remove bottom margin?
  isFlushBottom?: boolean;
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
  isFlushTop,
  isFlushBottom,
  ...properties
}: TextIntroductionProperties): JSX.Element => {
  const cnames = ['block', 'text-intro', className];

  if (isFlushTop) cnames.push('block__flush-top');
  if (isFlushBottom) cnames.push('block__flush-bottom');

  const call2action = callToAction && (
    <List isLinks>
      <ListItem>{cloneElement(callToAction, { type: 'list' })}</ListItem>
    </List>
  );

  return (
    <div
      className={classnames(cnames)}
      {...properties}
      data-testid='text-intro-wrapper'
    >
      <Heading type='1'>{heading}</Heading>
      <Paragraph isLead>{subheading}</Paragraph>
      {description ? <p>{description}</p> : null}
      {call2action}
    </div>
  );
};

export default TextIntroduction;
