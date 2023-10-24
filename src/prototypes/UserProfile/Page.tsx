/* Storybook prototype component */

interface PageProperties {
  children: JSX.Element;
}

/**
 * Displays CFGov header and footer around provided page content
 */
export const Page = ({ children }: PageProperties): JSX.Element => children;
// export const Page = ({ children }: PageProperties): JSX.Element => (
//   <>
//     <PageHeader />
//     <Layout.Wrapper>
//       <Layout.Main>{children}</Layout.Main>
//     </Layout.Wrapper>
//     <FooterCfGov />
//   </>
// );
