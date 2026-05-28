import type { ReactElement } from 'react';
import { Layout } from '~/src/index';
import type { LayoutMainProperties } from './layout-main';

export const LAYOUT_DOCS_SOURCE =
  'https://cfpb.github.io/design-system/development/main-content-and-sidebars';

export const LAYOUT_DOCS = {
  component: `Use \`Layout.Main\`, \`Layout.Wrapper\`, \`Layout.Content\`, and \`Layout.Sidebar\` together to structure page content and optional sidebars.

Main is the container for all content within a layout and configures column structure and whether the sidebar bleeds to the window edge. 

Content is the main body of the page, situated between the header and the footer.

The wrapper serves as a container for other components or elements. It wraps around child components and provides additional functionality, such as styling, context, or logic.

A sidebar is a vertical user interface element positioned on the left or right side of the main content area.

Source: ${LAYOUT_DOCS_SOURCE}`,
} as const;

export const LAYOUT_EXAMPLE_LOREM =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?';

export const LayoutExampleContent = (): ReactElement => (
  <Layout.Content>
    <h1>Content</h1>
    <p>{LAYOUT_EXAMPLE_LOREM}</p>
  </Layout.Content>
);

export const LayoutExampleSidebar = (): ReactElement => (
  <Layout.Sidebar>
    <div>
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </Layout.Sidebar>
);

export const renderLayoutTwoColumnExample = ({
  layout = '2-1',
}: {
  layout?: LayoutMainProperties['layout'];
}): ReactElement => {
  const contentNode = LayoutExampleContent();
  const sidebarNode = LayoutExampleSidebar();
  const columnChildren =
    layout === '1-3' ? [sidebarNode, contentNode] : [contentNode, sidebarNode];

  return (
    <Layout.Main layout={layout}>
      <Layout.Wrapper>{columnChildren}</Layout.Wrapper>
    </Layout.Main>
  );
};
