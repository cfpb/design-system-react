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
interface LayoutWrapperProperties {
  children: JSX.Element | JSX.Element[] | string;
}
export const LayoutWrapper = ({
  children
}: LayoutWrapperProperties): JSX.Element => (
  <div className='content_wrapper'>{children}</div>
);
