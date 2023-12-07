import { Link, TextIntroduction } from '~/src/';

export function PageIntro(): JSX.Element {
  return (
    <TextIntroduction
      heading='View financial institution details'
      subheading='This data reflects the most current information available to the CFPB for your financial institution. Please confirm the accuracy of the information to continue with the data submission process.'
      description={
        <>
          We pull data from sources such as GLEIF (Global Legal Entity
          Identifier Foundation), the National Information Center (NIC), and
          filers through requests to our technical help desk.
        </>
      }
      callToAction={
        <Link href='/#'>
          To make changes, please contact our technical help desk
        </Link>
      }
    />
  );
}

export default PageIntro;
