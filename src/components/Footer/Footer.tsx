import React from 'react';
import { Icon } from '../Icon/Icon';
import './Footer.less';
import './SocialMedia.less';

const BackToTop = (): JSX.Element => (
  <a
    className='a-btn a-btn__secondary o-footer_top-button'
    data-gtm_ignore='true'
    data-js-hook='behavior_return-to-top'
    href='#'
  >
    Back to top
    <Icon name='arrow-up' />
  </a>
);

interface NavLinksProperties {
  children: JSX.Element[];
}
const NavLinks = ({ children }: NavLinksProperties): JSX.Element => (
  <ul className='o-footer_nav-list m-list'>
    {children.map(link => (
      <li className='m-list_item' key={link.key}>
        {React.cloneElement(link, {
          className: `m-list_link ${link.props?.className ?? ''}`
        })}
      </li>
    ))}
  </ul>
);

const FooterBanner = (): JSX.Element => (
  <div className='o-footer-post'>
    <div
      className='a-tagline a-tagline__large'
      aria-label='Official website of the United States government'
    >
      <span className='u-usa-flag' />
      <div className='a-tagline_text'>
        An official website of the&nbsp;
        <span className='u-nowrap'>United States government</span>
      </div>
    </div>
  </div>
);

export default function Footer(): JSX.Element {
  return (
    <footer className='o-footer' data-js-hook='state_atomic_init'>
      <div className='wrapper wrapper__match-content'>
        <div className='o-footer_pre'>
          <BackToTop />
          <NavLinks>
            <a className='first' href='/about-us/'>
              About Us
            </a>
            <a href='/about-us/contact-us/'>Contact Us</a>
            <a href='/about-us/careers/'>Careers</a>
            <a href='/about-us/events/'>Events</a>
            <a href='/enforcement/information-industry-whistleblowers/'>
              Industry Whistleblowers
            </a>
            <a href='/cfpb-ombudsman/'>CFPB Ombudsman</a>
          </NavLinks>
          <div className='block block__flush-top block__flush-bottom block__padded-top'>
            <div className='m-social-media m-social-media__follow'>
              <ul className='m-list m-list__unstyled m-list__horizontal m-social-media_icons'>
                <li className='m-list_item'>
                  <a
                    aria-label='Visit us on Facebook'
                    className='m-social-media_icon'
                    data-pretty-href='https://www.facebook.com/CFPB'
                    href='/external-site/?ext_url=https%3A%2F%2Fwww.facebook.com%2FCFPB&amp;signature=mLDxq_fH8p2jVLrkPngPqkmwdsl_JEMSCoqZ74gLcCY'
                  >
                    <Icon name='facebook' withBg />
                  </a>
                </li>

                <li className='m-list_item'>
                  <a
                    aria-label='Visit us on Twitter'
                    className='m-social-media_icon'
                    data-pretty-href='https://twitter.com/CFPB'
                    href='/external-site/?ext_url=https%3A%2F%2Ftwitter.com%2FCFPB&amp;signature=2v_Kj1FtlY2ztSvBVUEZAzTb4Mrz1xDgzU7E4914qyo'
                  >
                    <Icon name='twitter' withBg />
                  </a>
                </li>

                <li className='m-list_item'>
                  <a
                    aria-label='Visit us on LinkedIn'
                    className='m-social-media_icon'
                    data-pretty-href='https://www.linkedin.com/company/consumer-financial-protection-bureau'
                    href='/external-site/?ext_url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fconsumer-financial-protection-bureau&amp;signature=cz77eS0N43ZshZvOXukyBB85_qSkkDBs7o0q5Ikf5m0'
                  >
                    <Icon name='linkedin' withBg />
                  </a>
                </li>

                <li className='m-list_item'>
                  <a
                    aria-label='Visit us on YouTube'
                    className='m-social-media_icon'
                    data-pretty-href='https://www.youtube.com/user/cfpbvideo'
                    href='/external-site/?ext_url=https%3A%2F%2Fwww.youtube.com%2Fuser%2Fcfpbvideo&amp;signature=ldBCE9dfMS_pke0Gy053F8Li0bUMA6CpBpTodqahPSA'
                  >
                    <Icon name='youtube' alt='Visit us on YouTube' withBg />
                  </a>
                </li>

                <li className='m-list_item'>
                  <a
                    aria-label='Visit us on Flickr'
                    className='m-social-media_icon'
                    data-pretty-href='https://www.flickr.com/photos/cfpbphotos'
                    href='/external-site/?ext_url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fcfpbphotos&amp;signature=GbqC6nvI0a2NHWTQqKaK2EOdJBMbQ9D6sv7J1TXR1oI'
                  >
                    <Icon name='flickr' alt='Visit us on Flickr' withBg />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='o-footer-middle-left'>
          <div className='o-footer_col'>
            <ul className='o-footer_list m-list'>
              <li className='m-list_item'>
                <a className='m-list_link' href='/foia-requests/'>
                  FOIA
                </a>
              </li>
              <li className='m-list_item'>
                <a className='m-list_link' href='/privacy/'>
                  Privacy
                </a>
              </li>
              <li className='m-list_item'>
                <a
                  className='m-list_link'
                  href='/privacy/website-privacy-policy/'
                >
                  Website Privacy Policy &amp; Legal Notices
                </a>
              </li>
              <li className='m-list_item'>
                <a className='m-list_link' href='/data/'>
                  Data
                </a>
              </li>
              <li className='m-list_item'>
                <a className='m-list_link' href='/open-government/'>
                  Open Government
                </a>
              </li>
              <li className='m-list_item'>
                <a
                  className='m-list_link'
                  href='/open-government/information-quality-guidelines/'
                >
                  Information Quality Guidelines
                </a>
              </li>
            </ul>
          </div>
          <div className='o-footer_col'>
            <ul className='o-footer_list m-list'>
              <li className='m-list_item'>
                <a
                  className='m-list_link'
                  href='/about-us/diversity-and-inclusion/'
                >
                  Diversity &amp; Inclusion
                </a>
              </li>

              <li className='m-list_item'>
                <a
                  className='m-list_link'
                  href='/administrative-adjudication-proceedings/'
                >
                  Administrative Adjudication
                </a>
              </li>

              <li className='m-list_item'>
                <a className='m-list_link' href='/plain-writing/'>
                  Plain Writing
                </a>
              </li>
              <li className='m-list_item'>
                <a className='m-list_link' href='/accessibility/'>
                  Accessibility
                </a>
              </li>
              <li className='m-list_item'>
                <a className='m-list_link' href='/office-civil-rights/'>
                  Office of Civil Rights
                </a>
              </li>
              <li className='m-list_item'>
                <a
                  className='m-list_link'
                  href='/office-civil-rights/no-fear-act-cummings-act/'
                >
                  No FEAR Act &amp; Cummings Act
                </a>
              </li>

              <li className='m-list_item'>
                <a className='m-list_link' href='/tribal/'>
                  Tribal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='o-footer-middle-right'>
          <ul className='o-footer_list m-list'>
            <li className='m-list_item'>
              <a
                className='m-list_link a-link a-link__icon'
                href='https://usa.gov/'
              >
                <span className='a-link_text'>USA.gov</span>
                <Icon name='external-link' alt='External link' />
              </a>
            </li>
            <li className='m-list_item'>
              <a
                className='m-list_link a-link a-link__icon'
                href='https://www.federalreserve.gov/oig/default.htm'
              >
                <span className='a-link_text'>Office of Inspector General</span>
                <Icon name='external-link' alt='External link' />
              </a>
            </li>
          </ul>
        </div>

        <FooterBanner />
      </div>
    </footer>
  );
}
