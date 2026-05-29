import { ReactElement } from '../../../node_modules/react';
export declare const LAYOUT_DOCS_SOURCE = "https://cfpb.github.io/design-system/development/main-content-and-sidebars";
export declare const LAYOUT_DOCS: {
    readonly component: "Layout is a **composition API** that mirrors the [CFPB main content and sidebars](https://cfpb.github.io/design-system/development/main-content-and-sidebars) pattern. Assemble `Layout.Main`, `Layout.Wrapper`, `Layout.Content`, and optionally `Layout.Sidebar`.\n\n| Piece | Role |\n| ----- | ---- |\n| **Main** | Page `<main>` landmark (`.content`). Set `layout=\"2-1\"` or `layout=\"1-3\"` for two-column layouts; omit `layout` when main and sidebar stack vertically. |\n| **Wrapper** | `.wrapper` around columns (hero or `Divider` may sit above it inside Main). |\n| **Content** | Primary page body (`.content__main`). |\n| **Sidebar** | Optional aside (`.content__sidebar`). Order in the wrapper must match the layout (sidebar then main for `1-3`; main then sidebar for `2-1`). |\n\nThe stories below follow the live examples on the design system documentation page.";
};
/** Lorem copy from the CFPB left/right sidebar layout examples. */
export declare const LAYOUT_EXAMPLE_LOREM = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\nCum corrupti tempora nam nihil qui mollitia consectetur\ncorporis nemo culpa dolorum! Laborum at eos deleniti\nconsequatur itaque officiis debitis quisquam! Provident!";
export declare const LayoutStoryFooter: () => ReactElement;
