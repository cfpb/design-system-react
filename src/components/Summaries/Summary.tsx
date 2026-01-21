import {
  Summary as CFPB_Summary,
  SummaryMinimal as CFPB_SummaryMinimal
} from '@cfpb/cfpb-design-system/src/components/cfpb-expandables';
import classnames from 'classnames';
import type React from 'react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Icon } from '~/src';
import './Summary.scss';

export interface SummaryProperties
  extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Label for the toggle button */
  label?: string;
  /** Whether the summary behavior should only apply on mobile viewports */
  isMobileOnly?: boolean;
  /** Use the minimal variation with toggle capabilities */
  isMinimal?: boolean;
}

/**
 * Summary components hides content over a certain height. When the hidden content is shown it can’t be reverted to the summary until the page is reloaded.
 *
 * Source: <a href='https://cfpb.github.io/design-system/components/summaries' target='_blank'>https://cfpb.github.io/design-system/components/summaries</a>
 */
export const Summary: React.FC<SummaryProperties> = ({
  children,
  label = 'Show full text',
  isMobileOnly = false,
  isMinimal = false,
  className = '',
  ...properties
}) => {
  useEffect(() => {
    if (isMinimal) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      CFPB_SummaryMinimal.init();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      CFPB_Summary.init();
    }

    if (document.readyState === 'complete') {
      window.dispatchEvent(new Event('load'));
    }
  }, [isMinimal]);

  const baseClass = isMinimal ? 'o-summary-minimal' : 'o-summary';
  const summaryClasses = [baseClass, className];

  if (isMobileOnly) {
    summaryClasses.push(`${baseClass}--mobile`);
  }

  return (
    <div
      className={classnames(summaryClasses)}
      data-testid='summary'
      {...properties}
    >
      <div
        className={`${baseClass}__content`}
        data-testid='summary-content'
      >
        {children}
      </div>
      <button
        type='button'
        className={`${baseClass}__btn`}
        data-testid='summary-btn'
      >
        {isMinimal ? (
          <>
            <span className='o-summary-minimal__cue-open'>
              Show&nbsp;
              <Icon name='plus' isPresentational withBg />
            </span>
            <span className='o-summary-minimal__cue-close'>
              Hide&nbsp;
              <Icon name='minus' isPresentational withBg />
            </span>
          </>
        ) : (
          <>
            {label}
            <Icon name='plus' isPresentational withBg />
          </>
        )}
      </button>
    </div>
  );
};

export default Summary;
