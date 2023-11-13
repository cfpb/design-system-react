import type { HeadingLevel } from '../../types/headingLevel';
import List from '../List/List';
import ListItem from '../List/ListItem';

interface WellProperties {
  children: (JSX.Element | null)[] | JSX.Element;
  className?: string;
}

/**
 * Wells are used to highlight specific information within a designated section of a page. This breaks up the flow of content on the page and helps to emphasize and set apart the content that is included. They are generally used on <a href="https://cfpb.github.io/design-system/pages/browse-pages">browse</a>, <a href="https://cfpb.github.io/design-system/pages/learn-pages">learn</a>, and <a href="https://cfpb.github.io/design-system/pages/document-detail-pages">document detail pages</a>.
 *
 * Source: https://cfpb.github.io/design-system/patterns/wells
 */
const Well = ({
  children,
  className = '',
  ...properties
}: WellProperties): JSX.Element => (
  <div className={`o-well ${className}`} {...properties}>
    {children}
  </div>
);

interface WelledCTAProperties {
  heading: string;
  headingLevel?: HeadingLevel;
  links?: JSX.Element[];
  text?: JSX.Element | string;
  className?: string | undefined;
}

function WelledCTA({
  heading,
  headingLevel = 'h4',
  links,
  text,
  className = '',
  ...properties
}: WelledCTAProperties): JSX.Element {
  const callsToAction = [];
  if (links)
    for (const link of links) {
      callsToAction.push(<ListItem key={link.key}>{link}</ListItem>);
    }

  return (
    <Well className={className} {...properties}>
      <p className={headingLevel}>{heading}</p>
      {text ? <p className='text'>{text}</p> : null}
      {callsToAction.length > 0 ? <List isLinks>{callsToAction}</List> : null}
    </Well>
  );
}

export { Well, WelledCTA };
