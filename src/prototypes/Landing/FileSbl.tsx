import { Link, List, ListItem } from '~/src';
import { SubsectionWrapper } from './SubsectionWrapper';

export function FileSbl(): JSX.Element {
  return (
    <SubsectionWrapper>
      <h2 className='heading'>File your small business lending data</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <List isLinks>
        <ListItem>
          <Link href={Date.now().toString()}>
            File your small business lending data
          </Link>
        </ListItem>
      </List>
    </SubsectionWrapper>
  );
}

export default FileSbl;
