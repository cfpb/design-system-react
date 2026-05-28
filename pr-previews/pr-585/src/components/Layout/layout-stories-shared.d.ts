import { ReactElement } from '../../../node_modules/react';
import { LayoutMainProperties } from './layout-main';
export declare const LAYOUT_DOCS_SOURCE = "https://cfpb.github.io/design-system/development/main-content-and-sidebars";
export declare const LAYOUT_DOCS: {
    readonly component: "Use `Layout.Main`, `Layout.Wrapper`, `Layout.Content`, and `Layout.Sidebar` together to structure page content and optional sidebars.\n\nMain is the container for all content within a layout and configures column structure (`layout`) and whether the sidebar bleeds to the window edge. Content is the main body of the page. Wrapper positions content and sidebar columns. Sidebar is a vertical region beside the main content.\n\nSource: https://cfpb.github.io/design-system/development/main-content-and-sidebars";
};
export declare const LAYOUT_EXAMPLE_LOREM = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?";
export declare const LayoutExampleContent: () => ReactElement;
export declare const LayoutExampleSidebar: () => ReactElement;
export declare const renderLayoutTwoColumnExample: ({ layout, }: {
    layout?: LayoutMainProperties["layout"];
}) => ReactElement;
