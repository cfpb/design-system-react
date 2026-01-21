import { Summary as CFPB_Summary } from '@cfpb/cfpb-design-system/src/components/cfpb-expandables';
import classnames from 'classnames';
import type React from 'react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Icon } from '~/src';

export interface SummaryProperties
  extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Label for the toggle button */
  label?: string;
  /** Whether the summary behavior should only apply on mobile viewports */
  isMobileOnly?: boolean;
}

export const Summary: React.FC<SummaryProperties> = ({
  children,
  label = 'Show full text',
  isMobileOnly = false,
  className = '',
  ...properties
}) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    CFPB_Summary.init();

    /**
     * The CFPB Summary component waits for the window 'load' event to calculate
     * heights and initialize its behavior. In a React environment, especially
     * in Storybook or during client-side navigation, the 'load' event may have
     * already fired. If so, we manually trigger it to ensure the component
     * initializes correctly.
     */
    if (document.readyState === 'complete') {
      window.dispatchEvent(new Event('load'));
    }
  }, []);

  const summaryClasses = ['o-summary', className];

  if (isMobileOnly) {
    summaryClasses.push('o-summary--mobile');
  }

  return (
    <div
      className={classnames(summaryClasses)}
      data-testid='summary'
      {...properties}
    >
      <div className='o-summary__content' data-testid='summary-content'>
        {children}
      </div>
      <button
        type='button'
        className='o-summary__btn'
        data-testid='summary-btn'
      >
        {label}
        <Icon name='plus' isPresentational withBg/>
      </button>
    </div>
  );
};

export default Summary;
