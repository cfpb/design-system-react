import { Heading } from '~/src/index';

export const SectionIntroduction = ({ heading, body }): JSX.Element => (
  <>
    <Heading type='3'>{heading}</Heading>
    <p className='body'>{body}</p>
  </>
);
