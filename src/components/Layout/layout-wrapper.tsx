import { JSX } from 'react';
import type { HTMLAttributes } from 'react';

/**
 * ~ Usage ~
 *
 * <Layout.Main>
 *  <Hero />
 *  <Layout.Wrapper>
 *    <Layout.Content>
 *      Main Content
 *    </Layout.Content>
 *    <Layout.Sidebar>
 *      Sidebar Content
 *    </Layout.Sidebar>
 *  </Layout.Wrapper>
 * </Layout.Main>
 */
export interface LayoutWrapperProperties {
  children: JSX.Element | JSX.Element[] | string;
}

export const LayoutWrapper = ({
  children,
  ...properties
}: LayoutWrapperProperties &
  HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div className='wrapper' {...properties}>
    {children}
  </div>
);
