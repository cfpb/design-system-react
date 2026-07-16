import { HTMLAttributes, JSX } from '../../../node_modules/react';
export interface SecondaryNavChildItem {
    href: string;
    label: string;
    isActive?: boolean;
}
export interface SecondaryNavItem {
    href?: string;
    label: string;
    /**
     * Whether this item is the current page. Ignored when the item has children;
     * only children can be active in that case.
     */
    isActive?: boolean;
    children?: SecondaryNavChildItem[];
}
export interface SecondaryNavProperties extends HTMLAttributes<HTMLElement> {
    /**
     * Array of navigation items. Each item can be marked active for the current page.
     */
    items: SecondaryNavItem[];
    /**
     * Accessible label for the nav landmark. Matches cfgov gettext('Section').
     */
    ariaLabel?: string;
    /**
     * Label for the mobile header. Matches cfgov _('Navigate this section').
     */
    mobileToggleLabel?: string;
}
/**
 * Markup and classes match cfgov `secondary-nav.html` / `SecondaryNav.js` on
 * consumerfinance.gov (FlyoutMenu + MaxHeightTransition are not initialized here;
 * mobile expand/collapse follows `aria-expanded` on `.o-secondary-nav__header`).
 *
 * Typography and spacing live in `secondary-nav.scss` (cfgov organism): DS math from
 * `$base-font-size-px` produces **em** (e.g. header padding, 1.125em parent links) and
 * **rem** (header label), not px in this file.
 *
 * @see https://github.com/cfpb/consumerfinance.gov/blob/main/cfgov/v1/jinja2/v1/includes/organisms/secondary-nav.html
 * @see https://github.com/cfpb/consumerfinance.gov/blob/main/cfgov/unprocessed/css/organisms/secondary-nav.scss
 */
export declare const SecondaryNav: ({ items, ariaLabel, mobileToggleLabel, className, ...properties }: SecondaryNavProperties) => JSX.Element;
