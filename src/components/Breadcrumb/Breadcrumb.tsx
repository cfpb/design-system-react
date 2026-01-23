import { Fragment } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import classnames from 'classnames';

export interface BreadcrumbCrumb {
  href: string;
  label: string;
  isCurrent?: boolean;
}

export interface BreadcrumbProperties
  extends HTMLAttributes<HTMLDivElement> {
  crumbs: BreadcrumbCrumb[];
  ariaLabel?: string;
}

/**
 * Breadcrumbs help users understand where they are in a site’s hierarchy and navigate back up.
 *
 */
export const Breadcrumb = ({
  crumbs,
  ariaLabel = 'Breadcrumbs',
  className,
  ...properties
}: BreadcrumbProperties): JSX.Element | null => {
  if (crumbs.length === 0) return null;

  return (
    <div
      className={classnames('u-layout-grid__breadcrumbs', className)}
      {...properties}
    >
      <nav className='m-breadcrumbs' aria-label={ariaLabel}>
        {crumbs.map(crumb => (
          <Fragment key={`${crumb.href}-${crumb.label}`}>
            &nbsp;/&nbsp;
            {crumb.isCurrent ? (
              <span className='m-breadcrumbs__crumb' aria-current='page'>
                {` ${crumb.label} `}
              </span>
            ) : (
              <a className='m-breadcrumbs__crumb' href={crumb.href}>
                {` ${crumb.label} `}
              </a>
            )}
          </Fragment>
        ))}
      </nav>
    </div>
  );
};
