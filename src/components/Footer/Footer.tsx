import classnames from 'classnames';
import { BackToTop } from './BackToTop';
import './Footer.less';
import { FooterBanner } from './FooterBanner';
import { FooterLinksColumn, NavLinks, SocialLinks } from './FooterLinks';
import './SocialMedia.less';

interface FooterProperties extends React.HTMLProps<HTMLElement> {
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
      <div className='wrapper wrapper__match-content'>
        <div className='o-footer_pre'>
          <BackToTop />
          <NavLinks>{navLinks}</NavLinks>
          <SocialLinks>{socialLinks}</SocialLinks>
        </div>

        <div className='o-footer-middle-left'>
          <FooterLinksColumn>{linksCol1}</FooterLinksColumn>
          <FooterLinksColumn>{linksCol2}</FooterLinksColumn>
        </div>

        <div className='o-footer-middle-right'>
          <FooterLinksColumn>{linksCol3}</FooterLinksColumn>
        </div>

        <FooterBanner />
      </div>
    </footer>
  );
}
