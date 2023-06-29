import type { HeadingLevel } from '../../types/headingLevel';
import List from '../List/List';
import ListItem from '../List/ListItem';

interface WellProperties {
  heading: string;
  text: JSX.Element | string;
  links?: JSX.Element[];
  headingLevel?: HeadingLevel;
}

export default function Well({
  heading,
  headingLevel = 'h4',
  links,
  text
}: WellProperties): JSX.Element {
  const callsToAction = [];
  if (links)
    for (const link of links) {
      callsToAction.push(<ListItem>{link}</ListItem>);
    }

  return (
    <div className='o-well'>
      <p className={headingLevel}>{heading}</p>
      <p className='text'>{text}</p>
      {callsToAction.length > 0 ? <List isLinks>{callsToAction}</List> : null}
    </div>
  );
}
