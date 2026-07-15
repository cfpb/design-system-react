import { ComponentType, ReactNode } from '../../node_modules/react';
import { BaseLinkProperties } from '../components/Link/base-link';
/**
 *
 * DSR context allows you to integrate the DSR with a router library
 * by specifying a custom component that will be output by the DSR's
 * Link component instead of the default anchor element.
 *
 * Your custom link component will be substituted everywhere the DSR's
 * Link component is used, including in the Header, Breadcrumbs,
 * and Secondary Navigation components.
 *
 * Example usage with Tanstack Router:
 *
 * rootRoute.tsx:
 *
 * import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router'
 *
 * const rootRoute = createRootRouteWithContext<RouterContext>()({
 *  component: (): JSX.Element => (
 *    <DSRContext value={{LinkComponent: Link}} >
 *      <Outlet />
 *    </DSRContext>
 *  )
 * })
 *
 */
export interface DSRContextType {
    LinkComponent: ComponentType<BaseLinkProperties>;
}
export declare const DSRContext: import('../../node_modules/react').Context<DSRContextType>;
export declare const useDSRContext: () => DSRContextType;
export interface DSRProviderProperties {
    LinkComponent: ComponentType<BaseLinkProperties>;
    children?: ReactNode;
}
export declare const DSRProvider: ({ children, LinkComponent }: {
    children: ReactNode;
    LinkComponent: ComponentType<BaseLinkProperties>;
}) => import("react").JSX.Element;
