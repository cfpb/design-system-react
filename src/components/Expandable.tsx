import { Expandable as CFPB_Expandable } from '@cfpb/cfpb-expandables/src/Expandable';
import type React from 'react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Icon } from './Icon';

export interface ExpandableProperties {
  header: string;
  children: ReactNode;
  inAccordion?: boolean;
  openOnLoad?: boolean;
}

export const Expandable: React.FC<ExpandableProperties> = ({
  header,
  children,
  inAccordion = false,
  openOnLoad = false
}) => {
  useEffect(() => {
    if (inAccordion) return; // Initialization happens in parent component

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    CFPB_Expandable.init();
  }, [inAccordion]);

  return (
    <div className='o-expandable o-expandable__padded o-expandable__background o-expandable__border'>
      <button
        type='button'
        className='o-expandable_header o-expandable_target'
        title='Expand content'
      >
        <h3 className='h4 o-expandable_label'>{header}</h3>
        <span className='o-expandable_link'>
          <span className='o-expandable_cue o-expandable_cue-open'>
            <span className='u-visually-hidden-on-mobile'>Show</span>
            <Icon name='plus-round' alt='plus-round' />
          </span>
          <span className='o-expandable_cue o-expandable_cue-close'>
            <span className='u-visually-hidden-on-mobile'>Hide</span>
            <Icon name='minus-round' alt='minus-round' />
          </span>
        </span>
      </button>
      <div
        className={`o-expandable_content ${
          openOnLoad ? 'o-expandable_content__onload-open' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Expandable;
