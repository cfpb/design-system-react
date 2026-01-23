import classnames from 'classnames';
import React from 'react';

export interface BreadcrumbCrumb {
  href: string;
  label: React.ReactNode;
  isCurrent?: boolean;
}

export interface BreadcrumbProperties extends React.HTMLAttributes<HTMLDivElement> {
  crumbs: BreadcrumbCrumb[];
  ariaLabel?: string;
  separator?: string;
}

/**
 * Breadcrumbs help users understand where they are in a site’s hierarchy and navigate back up.
 *
 */
export const Breadcrumb = ({
  crumbs,
  ariaLabel = 'Breadcrumbs',
  separator = ' / ',
  className,
  ...properties
}: BreadcrumbProperties): JSX.Element | null => {
  if (!crumbs || crumbs.length === 0) return null;

  return (
    <div
      className={classnames('u-layout-grid__breadcrumbs', className)}
      {...properties}
    >
      <nav className='m-breadcrumbs' aria-label={ariaLabel}>
        {crumbs.map((crumb, index) => (
          <React.Fragment key={`${crumb.href}-${index}`}>
            {separator}
            <a
              className='m-breadcrumbs__crumb'
              href={crumb.href}
              aria-current={crumb.isCurrent ? 'page' : undefined}
            >
              {crumb.label}
            </a>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};
