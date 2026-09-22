import { CfpbTagline } from '@cfpb/cfpb-design-system';
import { JSX } from 'react';

export const FooterBanner = (): JSX.Element => {
  CfpbTagline.init();

  return (
    <div className='o-footer__post'>
      <cfpb-tagline isLarge data-testid='footer-tagline'></cfpb-tagline>
    </div>
  );
};
