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
    <a href={`${cfLink}/about-us/`} key='about' target='_blank'>
      About Us
    </a>,
    <a href={`${cfLink}/about-us/contact-us/`} key='contact' target='_blank'>
      Contact Us
    </a>,
    <a href={`${cfLink}/about-us/careers/`} key='careers' target='_blank'>
      Careers
    </a>,
    <a href={`${cfLink}/about-us/events/`} key='events' target='_blank'>
      Events
    </a>,
    <a
      href={`${cfLink}/enforcement/information-industry-whistleblowers/`}
      key='whistle'
      target='_blank'
    >
      Industry Whistleblowers
    </a>,
    <a href={`${cfLink}/cfpb-ombudsman/`} key='ombudsman' target='_blank'>
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
      target='_blank'
    >
      <Icon name='facebook' isPresentational withBg />
    </a>,
    <a
      key='twitter'
      aria-label='Visit us on Twitter'
      data-pretty-href={twitterLink}
      href={twitterLink}
      target='_blank'
    >
      <Icon name='x' isPresentational withBg />
    </a>,
    <a
      key='linkedin'
      aria-label='Visit us on LinkedIn'
      data-pretty-href={linkedinLink}
      href={linkedinLink}
      target='_blank'
    >
      <Icon name='linkedin' isPresentational withBg />
    </a>,
    <a
      key='youtube'
      aria-label='Visit us on YouTube'
      data-pretty-href={youtubeLink}
      href={youtubeLink}
      target='_blank'
    >
      <Icon name='youtube' alt='Visit us on YouTube' isPresentational withBg />
    </a>,
    <a
      key='flickr'
      aria-label='Visit us on Flickr'
      data-pretty-href={flickrLink}
      href={flickrLink}
      target='_blank'
    >
      <Icon name='flickr' alt='Visit us on Flickr' isPresentational withBg />
    </a>
  ];

  const linksCol1 = [
    <a key='foia' href={`${cfLink}/foia-requests/`} target='_blank'>
      FOIA
    </a>,
    <a key='privacy' href={`${cfLink}/privacy/`} target='_blank'>
      Privacy
    </a>,
    <a
      key='privacy-policy'
      href={`${cfLink}/privacy/website-privacy-policy/`}
      target='_blank'
    >
      Website Privacy Policy &amp; Legal Notices
    </a>,
    <a key='data' href={`${cfLink}/data/`} target='_blank'>
      Data
    </a>,
    <a
      key='open-government'
      href={`${cfLink}/open-government/`}
      target='_blank'
    >
      Open Government
    </a>,
    <a
      key='info-quality'
      href={`${cfLink}/open-government/information-quality-guidelines/`}
      target='_blank'
    >
      Information Quality Guidelines
    </a>
  ];

  const linksCol2 = [
    <a
      key='dei'
      href={`${cfLink}/about-us/diversity-and-inclusion/`}
      target='_blank'
    >
      Diversity &amp; Inclusion
    </a>,
    <a
      key='adjudication'
      href={`${cfLink}/administrative-adjudication-proceedings/`}
      target='_blank'
    >
      Administrative Adjudication
    </a>,
    <a key='writing' href={`${cfLink}/plain-writing/`} target='_blank'>
      Plain Writing
    </a>,
    <a key='accessibility' href={`${cfLink}/accessibility/`} target='_blank'>
      Accessibility
    </a>,
    <a key='civ-rights' href={`${cfLink}/office-civil-rights/`} target='_blank'>
      Office of Civil Rights
    </a>,
    <a
      key='no-fear'
      href={`${cfLink}/office-civil-rights/no-fear-act-cummings-act/`}
      target='_blank'
    >
      No FEAR Act &amp; Cummings Act
    </a>,
    <a key='tribal' href={`${cfLink}/tribal/`} target='_blank'>
      Tribal
    </a>
  ];

  const linksCol3 = [
    <a
      key='usa-gov'
      className='a-link a-link__icon'
      href='https://usa.gov/'
      target='_blank'
    >
      <span className='a-link_text'>USA.gov</span>
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
      target='_blank'
    >
      <span className='a-link_text'>Office of Inspector General</span>
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
