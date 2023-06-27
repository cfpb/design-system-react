import List from '../List/List';
import { ListItemBuilder } from '../List/ListItem';
import { BackToTop } from './BackToTop';
import './Footer.less';
import { FooterBanner } from './FooterBanner';
import { FooterLinksColumn, NavLinks, SocialLinks } from './FooterLinks';
import './SocialMedia.less';

interface FooterProperties {
  navLinks: JSX.Element[];
  socialLinks: JSX.Element[];
  linksCol1: JSX.Element[];
  linksCol2: JSX.Element[];
  linksCol3: JSX.Element[];
}

/**
 * Simply define the anchor elements for each section to compose your Footer
 */
export default function Footer({
  navLinks = [],
  socialLinks = [],
  linksCol1 = [],
  linksCol2 = [],
  linksCol3 = []
}: FooterProperties): JSX.Element {
  return (
    <footer className='o-footer' data-js-hook='state_atomic_init'>
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
          <List className='o-footer_list'>
            <ListItemBuilder className='m-list_link'>
              {linksCol3}
            </ListItemBuilder>
          </List>
        </div>

        <FooterBanner />
      </div>
    </footer>
  );
}
