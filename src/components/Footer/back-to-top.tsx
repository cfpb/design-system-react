import { JSX } from 'react';
import Link from '../Link/link';
export const BackToTop = (): JSX.Element => (
  <Link
    label='Back to top'
    isButton
    className='a-btn--secondary a-btn--full-on-xs o-footer__top-button u-show-on-mobile u-mb45'
    data-gtm_ignore='true'
    data-js-hook='behavior_return-to-top'
    data-testid='back-to-top'
    href='#'
    iconRight='arrow-up'
  />
);
