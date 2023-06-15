import classnames from 'classnames';
import type { JSXElement } from '../../types/jsxElement';
import { Tagline } from '../Tagline/Tagline';
import './Banner.less';

interface BannerProperties {
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
 * CFGov's Global Eyebrow component
 */
export const Banner = ({
  isHorizontal = true,
  tagline = 'This is a tagline',
  phoneNumber,
  links = []
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

  return (
    <div className={classnames(eyebrowClasses)} data-testid='eyebrow'>
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
