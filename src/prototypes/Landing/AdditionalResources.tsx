import { Link } from '~/src';

export function AdditionalResources(): JSX.Element {
  return (
    <div className='additional-resources'>
      <h5 className='heading'>ADDITIONAL RESOURCES</h5>
      <ul className='list-none'>
        <li>
          <Link href={Date.now().toString()}>Resource 1</Link>
        </li>
        <li>
          <Link href={Date.now().toString()}>Resource 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdditionalResources;
