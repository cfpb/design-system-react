import type { ReactElement } from 'react';
import { Layout } from '~/src/index';
import type { LayoutMainProperties } from './layout-main';

export const LAYOUT_DOCS_SOURCE =
  'https://cfpb.github.io/design-system/development/main-content-and-sidebars';

/** Empty string in Storybook controls = single-column main (no `content--*` modifier). */
export type LayoutStoryLayoutValue = LayoutMainProperties['layout'] | '';

export const LAYOUT_STORY_LAYOUT_OPTIONS: LayoutStoryLayoutValue[] = [
  '',
  '2-1',
  '1-3',
];

export const LAYOUT_DOCS = {
  component: `Layout is a **composition API**: assemble \`Layout.Main\`, \`Layout.Wrapper\`, \`Layout.Content\`, and optionally \`Layout.Sidebar\` rather than picking a single “variant” on one component.

| Piece | Role |
| ----- | ---- |
| **Main** | Page \`<main>\` landmark. Set \`layout="2-1"\` or \`layout="1-3"\` only when using a two-column page; omit \`layout\` for a single full-width content column. |
| **Wrapper** | \`.wrapper\` around columns (and optional hero above it inside Main). |
| **Content** | Primary page body (\`.content__main\`). |
| **Sidebar** | Optional aside (\`.content__sidebar\`). Order in the wrapper must match the layout (main then sidebar for \`2-1\`; sidebar then main for \`1-3\`). |

Use the **Page layout** story control to preview column ratios. Individual pieces share the same DOM/classes as in production; see the building-block stories for each part in isolation.

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

export const renderLayoutPageExample = ({
  layout = '',
}: {
  layout?: LayoutStoryLayoutValue;
}): ReactElement => {
  const contentNode = LayoutExampleContent();
  const columnLayout = layout || undefined;

  if (!columnLayout) {
    return (
      <Layout.Main>
        <Layout.Wrapper>{contentNode}</Layout.Wrapper>
      </Layout.Main>
    );
  }

  const sidebarNode = LayoutExampleSidebar();
  const columnChildren =
    columnLayout === '1-3'
      ? [sidebarNode, contentNode]
      : [contentNode, sidebarNode];

  return (
    <Layout.Main layout={columnLayout}>
      <Layout.Wrapper>{columnChildren}</Layout.Wrapper>
    </Layout.Main>
  );
};
