import { ReactElement } from '../../../node_modules/react';
import { LayoutMainProperties } from './layout-main';
export declare const LAYOUT_DOCS_SOURCE = "https://cfpb.github.io/design-system/development/main-content-and-sidebars";
export declare const LAYOUT_DOCS: {
    readonly component: "Use `Layout.Main`, `Layout.Wrapper`, `Layout.Content`, and `Layout.Sidebar` together to structure page content and optional sidebars.\n\nMain is the container for all content within a layout and configures column structure and whether the sidebar bleeds to the window edge. \n\nContent is the main body of the page, situated between the header and the footer.\n\nThe wrapper serves as a container for other components or elements. It wraps around child components and provides additional functionality, such as styling, context, or logic.\n\nA sidebar is a vertical user interface element positioned on the left or right side of the main content area.\n\nSource: https://cfpb.github.io/design-system/development/main-content-and-sidebars";
};
export declare const LAYOUT_EXAMPLE_LOREM = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias eum ut officiis optio similique explicabo cupiditate architecto voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos, mollitia possimus error earum?";
export declare const LayoutExampleContent: () => ReactElement;
export declare const LayoutExampleSidebar: () => ReactElement;
export declare const renderLayoutTwoColumnExample: ({ layout, }: {
    layout?: LayoutMainProperties["layout"];
}) => ReactElement;
