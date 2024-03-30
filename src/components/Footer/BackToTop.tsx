/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icon } from '../Icon/Icon';

export const BackToTop = (): JSX.Element => (
  <a
    className='a-btn a-btn__secondary o-footer_top-button'
    data-gtm_ignore='true'
    data-js-hook='behavior_return-to-top'
    href='#'
  >
    Back to top
    <Icon name='arrow-up' isPresentational />
  </a>
);
