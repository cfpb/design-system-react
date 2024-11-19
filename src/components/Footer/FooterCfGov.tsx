import { Icon } from '../Icon/Icon';
import Footer from './Footer';

interface FootCfGovProperties {
  cfLink?: string;
}

export const FooterCfGov = ({
  cfLink = 'https://www.consumerfinance.gov',
  className,
  ...properties
}: FootCfGovProperties & JSX.IntrinsicElements['footer']): JSX.Element => {
  const navLinks = [
    <a href={`${cfLink}/about-us/`} key='about'>
      About Us
    </a>,
    <a href={`${cfLink}/about-us/contact-us/`} key='contact'>
      Contact Us
    </a>,
    <a href={`${cfLink}/about-us/careers/`} key='careers'>
      Careers
    </a>,
    <a href={`${cfLink}/about-us/events/`} key='events'>
      Events
    </a>,
    <a
      href={`${cfLink}/enforcement/information-industry-whistleblowers/`}
      key='whistle'
    >
      Industry Whistleblowers
    </a>,
    <a href={`${cfLink}/cfpb-ombudsman/`} key='ombudsman'>
      CFPB Ombudsman
    </a>
  ];

  const facebookLink = 'https://www.facebook.com/CFPB';
  const linkedinLink =
    'https://www.linkedin.com/company/consumer-financial-protection-bureau';
  const twitterLink = 'https://twitter.com/CFPB';
  const youtubeLink = 'https://www.youtube.com/user/cfpbvideo';
  const flickrLink = 'https://www.flickr.com/photos/cfpbphotos';

  const socialLinks = [
    <a
      key='facebook'
      aria-label='Visit us on Facebook'
      data-pretty-href={facebookLink}
      href={facebookLink}
    >
      <Icon name='facebook' isPresentational withBg />
    </a>,
    <a
      key='twitter'
      aria-label='Visit us on Twitter'
      data-pretty-href={twitterLink}
      href={twitterLink}
    >
      <Icon name='x' isPresentational withBg />
    </a>,
    <a
      key='linkedin'
      aria-label='Visit us on LinkedIn'
      data-pretty-href={linkedinLink}
      href={linkedinLink}
    >
      <Icon name='linkedin' isPresentational withBg />
    </a>,
    <a
      key='youtube'
      aria-label='Visit us on YouTube'
      data-pretty-href={youtubeLink}
      href={youtubeLink}
    >
      <Icon name='youtube' alt='Visit us on YouTube' isPresentational withBg />
    </a>,
    <a
      key='flickr'
      aria-label='Visit us on Flickr'
      data-pretty-href={flickrLink}
      href={flickrLink}
    >
      <Icon name='flickr' alt='Visit us on Flickr' isPresentational withBg />
    </a>
  ];

  const linksCol1 = [
    <a key='foia' href={`${cfLink}/foia-requests/`}>
      FOIA
    </a>,
    <a key='privacy' href={`${cfLink}/privacy/`}>
      Privacy
    </a>,
    <a key='privacy-policy' href={`${cfLink}/privacy/website-privacy-policy/`}>
      Website Privacy Policy &amp; Legal Notices
    </a>,
    <a key='data' href={`${cfLink}/data/`}>
      Data
    </a>,
    <a key='open-government' href={`${cfLink}/open-government/`}>
      Open Government
    </a>,
    <a
      key='info-quality'
      href={`${cfLink}/open-government/information-quality-guidelines/`}
    >
      Information Quality Guidelines
    </a>
  ];

  const linksCol2 = [
    <a key='dei' href={`${cfLink}/about-us/diversity-and-inclusion/`}>
      Diversity &amp; Inclusion
    </a>,
    <a
      key='adjudication'
      href={`${cfLink}/administrative-adjudication-proceedings/`}
    >
      Administrative Adjudication
    </a>,
    <a key='writing' href={`${cfLink}/plain-writing/`}>
      Plain Writing
    </a>,
    <a key='accessibility' href={`${cfLink}/accessibility/`}>
      Accessibility
    </a>,
    <a key='civ-rights' href={`${cfLink}/office-civil-rights/`}>
      Office of Civil Rights
    </a>,
    <a
      key='no-fear'
      href={`${cfLink}/office-civil-rights/no-fear-act-cummings-act/`}
    >
      No FEAR Act &amp; Cummings Act
    </a>,
    <a key='tribal' href={`${cfLink}/tribal/`}>
      Tribal
    </a>
  ];

  const linksCol3 = [
    <a key='usa-gov' className='a-link a-link__icon' href='https://usa.gov/'>
      <span className='a-link_text'>USA.gov</span>&nbsp;
      <Icon
        ariaLabel='External link'
        name='external-link'
        alt='External link'
      />
    </a>,
    <a
      key='inspector'
      className='a-link a-link__icon'
      href='https://oig.federalreserve.gov/'
    >
      <span className='a-link_text'>Office of Inspector General</span>&nbsp;
      <Icon
        ariaLabel='External link'
        name='external-link'
        alt='External link'
      />
    </a>
  ];

  return (
    <Footer
      {...properties}
      className={className}
      navLinks={navLinks}
      socialLinks={socialLinks}
      linksCol1={linksCol1}
      linksCol2={linksCol2}
      linksCol3={linksCol3}
    />
  );
};
