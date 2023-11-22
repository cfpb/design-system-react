import classnames from 'classnames';
import type { JSXElement } from '../../types/jsxElement';
import { Tagline } from '../Tagline/Tagline';
import './Banner.less';

interface BannerProperties extends React.HTMLProps<HTMLDivElement> {
  isHorizontal?: boolean;
  links?: JSX.Element[];
  phoneNumber?: string;
  tagline?: JSX.Element | string;
}

interface TelephoneLinkProperties {
  phoneNumber: string;
}

const TelephoneLink = ({
  phoneNumber
}: TelephoneLinkProperties): JSXElement => {
  if (/\d-\d{3}-\d{3}-\d{4}/.test(phoneNumber)) {
    const [, areaCode, ...others] = phoneNumber.split('-');

    return (
      <a href={`tel:+${phoneNumber}`}>
        ({areaCode}) {others.join('-')}
      </a>
    );
  }

  return <a href={`tel:+${phoneNumber}`}>{phoneNumber}</a>;
};

/**
 *The US gov banner identifies official websites of government organizations in the United States. It helps visitors understand whether a website is official and secure.
 *
 * Source: <a href='https://cfpb.github.io/design-system/components/banner-us-gov' target='_blank'> https://cfpb.github.io/design-system/components/banner-us-gov</a>
 */
export const Banner = ({
  isHorizontal = true,
  tagline = (
    <>
      An official website of the{' '}
      <span className='u-nowrap'>United States government</span>
    </>
  ),
  phoneNumber,
  links = [],
  className,
  ...properties
}: BannerProperties): JSX.Element => {
  const eyebrowClasses = ['m-global-eyebrow'];
  const wrapperClasses = ['wrapper'];
  const linkListClasses = ['m-list'];
  let taglineContent = null;

  if (isHorizontal) {
    eyebrowClasses.push('m-global-eyebrow__horizontal');
    wrapperClasses.push('wrapper__match-content');
    linkListClasses.push('m-list__horizontal m-global-eyebrow_languages');
    taglineContent = <Tagline>{tagline}</Tagline>;
  } else {
    eyebrowClasses.push('m-global-eyebrow__list');
  }

  if (className) eyebrowClasses.push(className);

  return (
    <div
      className={classnames(eyebrowClasses)}
      data-testid='eyebrow'
      {...properties}
    >
      <div className={classnames(wrapperClasses)}>
        {taglineContent}

        <div className='m-global-eyebrow_actions'>
          {links.length > 0 && (
            <ul className={classnames(linkListClasses)}>
              {links.map(link => (
                <li className='m-list_item' key={link.key}>
                  {link}
                </li>
              ))}
            </ul>
          )}
          {phoneNumber ? (
            <span className='m-global-eyebrow_phone'>
              <TelephoneLink phoneNumber={phoneNumber} />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
