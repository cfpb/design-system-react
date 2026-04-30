import classnames from 'classnames';
import type { HTMLAttributes } from 'react';
import { Fragment } from 'react';
import './breadcrumb.scss';
import { JSXElement } from '../../types/jsx-element';
import Link from '~/src/components/Link/link';

export interface BreadcrumbCrumb {
  to: string;
  label: string;
  isCurrent?: boolean;
}

export interface BreadcrumbProperties extends HTMLAttributes<HTMLDivElement> {
  crumbs: BreadcrumbCrumb[];
  ariaLabel?: string;
}

/**
 * Breadcrumbs provide secondary navigation to help users understand where they are in a website.
 *
 */
export const Breadcrumb = ({
  crumbs,
  ariaLabel = 'Breadcrumbs',
  className,
  ...properties
}: BreadcrumbProperties): JSXElement => {
  if (crumbs.length === 0) return null;

  return (
    <div
      className={classnames('u-layout-grid__breadcrumbs', className)}
      {...properties}
    >
      <nav className='m-breadcrumbs' aria-label={ariaLabel}>
        {crumbs.map((crumb) => (
          <Fragment key={`${crumb.to}-${crumb.label}`}>
            {` / `}
            {crumb.isCurrent ? (
              <span className='m-breadcrumbs__crumb' aria-current='page'>
                {` ${crumb.label} `}
              </span>
            ) : (
              <Link className='m-breadcrumbs__crumb' to={crumb.to}>
                {` ${crumb.label} `}
              </Link>
            )}
          </Fragment>
        ))}
      </nav>
    </div>
  );
};
