import { ReactElement } from '../../../node_modules/react';
import { LayoutMainProperties } from './layout-main';
export declare const LAYOUT_DOCS_SOURCE = "https://cfpb.github.io/design-system/development/main-content-and-sidebars";
/** Empty string in Storybook controls = single-column main (no `content--*` modifier). */
export type LayoutStoryLayoutValue = LayoutMainProperties['layout'] | '';
export declare const LAYOUT_STORY_LAYOUT_OPTIONS: LayoutStoryLayoutValue[];
export declare const LAYOUT_DOCS: {
    readonly component: "Layout is a **composition API**: assemble `Layout.Main`, `Layout.Wrapper`, `Layout.Content`, and optionally `Layout.Sidebar` rather than picking a single “variant” on one component.\n\n| Piece | Role |\n| ----- | ---- |\n| **Main** | Page `<main>` landmark. Set `layout=\"2-1\"` or `layout=\"1-3\"` only when using a two-column page; omit `layout` for a single full-width content column. |\n| **Wrapper** | `.wrapper` around columns (and optional hero above it inside Main). |\n| **Content** | Primary page body (`.content__main`). |\n| **Sidebar** | Optional aside (`.content__sidebar`). Order in the wrapper must match the layout (main then sidebar for `2-1`; sidebar then main for `1-3`). |\n\nUse the **Page layout** story control to preview column ratios. Individual pieces share the same DOM/classes as in production; see the building-block stories for each part in isolation.\n\nSource: https://cfpb.github.io/design-system/development/main-content-and-sidebars";
};
export declare const LAYOUT_EXAMPLE_LOREM = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?";
export declare const LayoutExampleContent: () => ReactElement;
export declare const LayoutExampleSidebar: () => ReactElement;
export declare const renderLayoutPageExample: ({ layout, }: {
    layout?: LayoutStoryLayoutValue;
}) => ReactElement;
