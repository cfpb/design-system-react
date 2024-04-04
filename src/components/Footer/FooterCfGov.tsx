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

  const socialLinks = [
    <a
      key='facebook'
      aria-label='Visit us on Facebook'
      data-pretty-href='https://www.facebook.com/CFPB'
      href='/external-site/?ext_url=https%3A%2F%2Fwww.facebook.com%2FCFPB&amp;signature=mLDxq_fH8p2jVLrkPngPqkmwdsl_JEMSCoqZ74gLcCY'
    >
      <Icon name='facebook' isPresentational withBg />
    </a>,
    <a
      key='twitter'
      aria-label='Visit us on Twitter'
      data-pretty-href='https://twitter.com/CFPB'
      href='/external-site/?ext_url=https%3A%2F%2Ftwitter.com%2FCFPB&amp;signature=2v_Kj1FtlY2ztSvBVUEZAzTb4Mrz1xDgzU7E4914qyo'
    >
      <Icon name='twitter' isPresentational withBg />
    </a>,
    <a
      key='linkedin'
      aria-label='Visit us on LinkedIn'
      data-pretty-href='https://www.linkedin.com/company/consumer-financial-protection-bureau'
      href='/external-site/?ext_url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fconsumer-financial-protection-bureau&amp;signature=cz77eS0N43ZshZvOXukyBB85_qSkkDBs7o0q5Ikf5m0'
    >
      <Icon name='linkedin' isPresentational withBg />
    </a>,
    <a
      key='youtube'
      aria-label='Visit us on YouTube'
      data-pretty-href='https://www.youtube.com/user/cfpbvideo'
      href='/external-site/?ext_url=https%3A%2F%2Fwww.youtube.com%2Fuser%2Fcfpbvideo&amp;signature=ldBCE9dfMS_pke0Gy053F8Li0bUMA6CpBpTodqahPSA'
    >
      <Icon name='youtube' alt='Visit us on YouTube' isPresentational withBg />
    </a>,
    <a
      key='flickr'
      aria-label='Visit us on Flickr'
      data-pretty-href='https://www.flickr.com/photos/cfpbphotos'
      href='/external-site/?ext_url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fcfpbphotos&amp;signature=GbqC6nvI0a2NHWTQqKaK2EOdJBMbQ9D6sv7J1TXR1oI'
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
      href='https://www.federalreserve.gov/oig/default.htm'
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
