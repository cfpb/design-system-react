import { JSX } from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from '~/src/components/Link/link';
export const BackToTop = (): JSX.Element => (
  <Link label="Back to top" 
        isButton
        className='a-btn--secondary a-btn--full-on-xs o-footer__top-button u-show-on-mobile u-mb30'
        data-gtm_ignore='true'
        data-js-hook='behavior_return-to-top'
        href='#'
        iconRight='arrow-up'/>
);
