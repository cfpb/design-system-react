import type { HeadingLevel } from '../../types/headingLevel';
import List from '../List/List';
import ListItem from '../List/ListItem';

interface WellProperties {
  heading: string;
  headingLevel?: HeadingLevel;
  links?: JSX.Element[];
  text: JSX.Element | string;
  className?: string | undefined;
}

/**
 * Wells are used to highlight specific information within a designated section of a page. This breaks up the flow of content on the page and helps to emphasize and set apart the content that is included. They are generally used on <a href="https://cfpb.github.io/design-system/pages/browse-pages">browse), <a href="https://cfpb.github.io/design-system/pages/learn-pages">learn), and <a href="https://cfpb.github.io/design-system/pages/document-detail-pages">document detail pages).
 * 
 * Source: https://cfpb.github.io/design-system/patterns/wells
 */
export default function Well({
  heading,
  headingLevel = 'h4',
  links,
  text,
  className = '',
  ...properties
}: WellProperties): JSX.Element {
  const callsToAction = [];
  if (links)
    for (const link of links) {
      callsToAction.push(<ListItem key={link.key}>{link}</ListItem>);
    }

  return (
    <div className={`o-well ${className}`} {...properties}>
      <p className={headingLevel}>{heading}</p>
      <p className='text'>{text}</p>
      {callsToAction.length > 0 ? <List isLinks>{callsToAction}</List> : null}
    </div>
  );
}
