import { Expandable as CFPB_Expandable } from '@cfpb/cfpb-design-system/src/components/cfpb-expandables';
import classnames from 'classnames';
import type React from 'react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Icon } from '../Icon/Icon';

export interface ExpandableProperties
  extends React.HTMLAttributes<HTMLDivElement> {
  header: string;
  children: ReactNode;
  icon?: string;
  inAccordion?: boolean;
  isPadded?: boolean;
  openOnLoad?: boolean;
}

export const Expandable: React.FC<ExpandableProperties> = ({
  header,
  children,
  icon = '',
  inAccordion = false,
  isPadded = false,
  openOnLoad = false,
  className = '',
  ...properties
}) => {
  useEffect(() => {
    // If we're in an accordion, the parent ExpandableGroup will handle initialization
    if (inAccordion) return;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    CFPB_Expandable.init();
  }, [inAccordion]);

  const expandableClasses = ['o-expandable', className];

  // If it's NOT in a group/accordion, apply the default standalone styles
  if (!inAccordion) {
    expandableClasses.push('o-expandable--background', 'o-expandable--border');
  }

  if (isPadded) expandableClasses.push('o-expandable--padded');
  if (openOnLoad) expandableClasses.push('o-expandable--onload-open');

  return (
    <div
      className={classnames(expandableClasses)}
      data-testid='expandable'
      {...properties}
    >
      <button type='button' className='o-expandable__header' title={header}>
        {icon ? (
          <span className='o-expandable__icon'>
            <Icon name={icon} />
          </span>
        ) : null}
        <h3 className='o-expandable__label'>{header}</h3>
        <span className='o-expandable__cues'>
          <span className='o-expandable__cue-open' aria-label='Show'>
            <Icon name='plus-round' isPresentational />
          </span>
          <span className='o-expandable__cue-close' aria-label='Hide'>
            <Icon name='minus-round' isPresentational />
          </span>
        </span>
      </button>
      <div className='o-expandable__content' data-testid='expandable-content'>
        {children}
      </div>
    </div>
  );
};

export default Expandable;
