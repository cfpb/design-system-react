import { JSX, HTMLAttributes } from '../../../node_modules/react';
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
export declare const LayoutWrapper: ({ children, ...properties }: LayoutWrapperProperties & HTMLAttributes<HTMLDivElement>) => JSX.Element;
