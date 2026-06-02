import classnames from 'classnames';
import { JSX, ReactNode } from 'react';
import type { HTMLProps } from 'react';
import { BackToTop } from './back-to-top';
import { FooterBanner } from './footer-banner';
import { FooterLinksColumn, NavLinks, SocialLinks } from './footer-links';
import './footer.scss';
import './social-media.scss';

interface FooterProperties extends HTMLProps<HTMLElement> {
  children?: ReactNode;
}

export function Footer({
  children,
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
      <div className='wrapper wrapper--match-content'>{children}</div>
    </footer>
  );
}

interface WebsiteFooterProperties extends HTMLProps<HTMLElement> {
  navLinks?: JSX.Element[];
  socialLinks?: JSX.Element[];
  linksCol1?: JSX.Element[];
  linksCol2?: JSX.Element[];
  linksCol3?: JSX.Element[];
}

/**
 * Simply define the anchor elements for each section to compose your Footer
 */
export function WebsiteFooter({
  navLinks = [],
  socialLinks = [],
  linksCol1 = [],
  linksCol2 = [],
  linksCol3 = [],
  className,
  ...properties
}: WebsiteFooterProperties): JSX.Element {
  return (
    <Footer className={className} {...properties}>
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
    </Footer>
  );
}

interface ApplicationFooterProperties extends HTMLProps<HTMLElement> {
  footerContent?: JSX.Element | string;
  navLinks?: JSX.Element[];
}

/**
 * A minimal two-column footer for use in applications.
 * The left column can contain information about the app,
 * and the right column is for relevant links.
 */
export function ApplicationFooter({
  footerContent,
  navLinks = [],
  className,
  ...properties
}: ApplicationFooterProperties): JSX.Element {
  return (
    <Footer className={className} {...properties}>
      <BackToTop />
      <div className='o-footer__content'>
        <div className='o-footer__left-column'>
          <div data-testid='footer-content'>{footerContent}</div>
        </div>
        <div className='o-footer__right-column'>
          <FooterLinksColumn>{navLinks}</FooterLinksColumn>
        </div>
      </div>
      <FooterBanner />
    </Footer>
  );
}
