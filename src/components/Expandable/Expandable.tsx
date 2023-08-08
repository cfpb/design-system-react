import { Expandable as CFPB_Expandable } from '@cfpb/cfpb-expandables/src/Expandable';
import classnames from 'classnames';
import type React from 'react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Icon } from '../Icon/Icon';

export interface ExpandableProperties
  extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  children: ReactNode;
  inAccordion?: boolean;
  openOnLoad?: boolean;
}

export const Expandable: React.FC<ExpandableProperties> = ({
  header,
  children,
  inAccordion = false,
  openOnLoad = false,
  className = '',
  ...properties
}) => {
  useEffect(() => {
    if (inAccordion) return; // Initialization happens in parent component

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    CFPB_Expandable.init();
  }, [inAccordion]);

  const expandableClasses = [
    'o-expandable',
    'o-expandable__padded',
    'o-expandable__background',
    'o-expandable__border',
    className
  ];

  if (openOnLoad) expandableClasses.push('o-expandable__onload-open');

  return (
    <div
      className={classnames(expandableClasses)}
      data-testid='expandable'
      {...properties}
    >
      <button
        type='button'
        className='o-expandable_header o-expandable_target'
        title={header}
      >
        <h3 className='h4 o-expandable_label'>{header}</h3>
        <span className='o-expandable_link'>
          <span className='o-expandable_cue o-expandable_cue-open'>
            <Icon name='plus-round' alt='plus-round' />
          </span>
          <span className='o-expandable_cue o-expandable_cue-close'>
            <Icon name='minus-round' alt='minus-round' />
          </span>
        </span>
      </button>
      <div className='o-expandable_content' data-testid='expandable-content'>
        {children}
      </div>
    </div>
  );
};

export default Expandable;
