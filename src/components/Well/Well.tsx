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
