import classnames from 'classnames';
import { JSX } from 'react';
import type { HTMLProps } from 'react';
import { BackToTop } from './back-to-top';
import { FooterBanner } from './footer-banner';
import { FooterLinksColumn, NavLinks, SocialLinks } from './footer-links';
import './footer.scss';
import './social-media.scss';

interface FooterProperties extends HTMLProps<HTMLElement> {
  navLinks?: JSX.Element[];
  socialLinks?: JSX.Element[];
  linksCol1?: JSX.Element[];
  linksCol2?: JSX.Element[];
  linksCol3?: JSX.Element[];
}

/**
 * Simply define the anchor elements for each section to compose your Footer
 */
export default function Footer({
  navLinks = [],
  socialLinks = [],
  linksCol1 = [],
  linksCol2 = [],
  linksCol3 = [],
  className,
  ...properties
}: FooterProperties): JSX.Element {
  const classes = ['o-footer', className];

  return (
    <footer
      className={classnames(classes)}
      data-js-hook='state_atomic_init'
      {...properties}
    >
      <div className='wrapper wrapper--match-content'>
        <div className='o-footer__pre'>
          <BackToTop />
          <NavLinks>{navLinks}</NavLinks>
          <SocialLinks>{socialLinks}</SocialLinks>
        </div>

        <div className='o-footer__middle-left'>
          <FooterLinksColumn>{linksCol1}</FooterLinksColumn>
          <FooterLinksColumn>{linksCol2}</FooterLinksColumn>
        </div>

        <div className='o-footer__middle-right'>
          <FooterLinksColumn>{linksCol3}</FooterLinksColumn>
        </div>

        <FooterBanner />
      </div>
    </footer>
  );
}
