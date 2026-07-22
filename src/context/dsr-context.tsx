import { createContext, use } from 'react';
import type { ComponentType, ReactNode } from 'react';
import { BaseLink } from '../components/link/base-link';
import type { BaseLinkProperties } from '../components/link/base-link';

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

export const DSRContext = createContext<DSRContextType>({
  LinkComponent: BaseLink,
});

export const useDSRContext = () => use(DSRContext);

export interface DSRProviderProperties {
  LinkComponent: ComponentType<BaseLinkProperties>;
  children?: ReactNode;
}

export const DSRProvider = ({
  children,
  LinkComponent,
}: {
  children: ReactNode;
  LinkComponent: ComponentType<BaseLinkProperties>;
}) => {
  return (
    <DSRContext value={{ LinkComponent: LinkComponent }}>{children}</DSRContext>
  );
};
