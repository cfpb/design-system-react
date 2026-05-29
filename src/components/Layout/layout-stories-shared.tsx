import type { ReactElement } from 'react';

export const LAYOUT_DOCS_SOURCE =
  'https://cfpb.github.io/design-system/development/main-content-and-sidebars';

export const LAYOUT_DOCS = {
  component: `Layout is a **composition API** that mirrors the [CFPB main content and sidebars](${LAYOUT_DOCS_SOURCE}) pattern. Assemble \`Layout.Main\`, \`Layout.Wrapper\`, \`Layout.Content\`, and optionally \`Layout.Sidebar\`.

| Piece | Role |
| ----- | ---- |
| **Main** | Page \`<main>\` landmark (\`.content\`). Set \`layout="2-1"\` or \`layout="1-3"\` for two-column layouts; omit \`layout\` when main and sidebar stack vertically. |
| **Wrapper** | \`.wrapper\` around columns (hero or \`Divider\` may sit above it inside Main). |
| **Content** | Primary page body (\`.content__main\`). |
| **Sidebar** | Optional aside (\`.content__sidebar\`). Order in the wrapper must match the layout (sidebar then main for \`1-3\`; main then sidebar for \`2-1\`). |

The stories below follow the live examples on the design system documentation page.`,
} as const;

/** Lorem copy from the CFPB left/right sidebar layout examples. */
export const LAYOUT_EXAMPLE_LOREM = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Cum corrupti tempora nam nihil qui mollitia consectetur
corporis nemo culpa dolorum! Laborum at eos deleniti
consequatur itaque officiis debitis quisquam! Provident!`;

export const LayoutStoryFooter = (): ReactElement => (
  <footer className='footer' role='contentinfo'>
    <div className='wrapper'>Footer</div>
  </footer>
);
