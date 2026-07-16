# CFPB Design System React

A React/Storybook implementation of [CFPB's Design System](https://github.com/cfpb/design-system).

## Status

✨ Work in progress. Interfaces will change. Things will break.

Current components: https://cfpb.github.io/design-system-react

## Installation

The `@cfpb/design-system-react` library is released as an [NPM package](https://www.npmjs.com/package/@cfpb/design-system-react).

Install the library and its peer dependencies:

```
yarn add @cfpb/design-system-react @cfpb/cfpb-design-system lit react react-dom
```

Add `react-router` if you use `Link` with `isRouterLink`:

```
yarn add react-router
```

| Peer                       | When you need it                                                                                                |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `@cfpb/cfpb-design-system` | Always install it. Required for DS web components and for importing DS styles directly (see [Styles](#styles)). |
| `lit`                      | Components that render DS web components (for example `Banner` / `<cfpb-tagline>`).                             |
| `react-router`             | `Link` with `isRouterLink` only.                                                                                |

## Usage

Import components from the package:

```ts
import { Alert, Button } from '@cfpb/design-system-react';
import type { ReactElement } from 'react';

export default function SomePage(): ReactElement {
  return (
    <main>
      <Alert message='2025-Q1 Quarterly filing period is open' type='success'>
        Submissions of 2025-Q1 SBL data will be accepted through May 2025.
      </Alert>
      <Button onClick={async () => login()} label='Log in' />
      <Button
        onClick={async () => register()}
        appearance='secondary'
        label='Register'
      />
    </main>
  );
}
```

**You must also load styles** — see [Styles](#styles). Component imports alone do not apply CFPB styling.

## Styles

DSR components render the same CSS class names as `@cfpb/cfpb-design-system` (for example `.a-btn`, `.m-form-field`). **Styles must be loaded separately** — importing React components alone does not apply CFPB styling.

There are **two supported patterns**. Pick one global CSS source for your app — **do not load both**.

### Pattern A: DSR CSS only (new React apps)

For Vite/CRA-style apps with no Sass pipeline. Import the library’s prebuilt stylesheet once:

```ts
// main.tsx or App.tsx
import '@cfpb/design-system-react/index.css';
```

|                       |                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **You get**           | DS styles for components listed in [`src/assets/styles/ds-components.ts`](src/assets/styles/ds-components.ts), plus Source Sans 3 (embedded), plus DSR-specific overrides |
| **You still install** | `@cfpb/cfpb-design-system` (peer dependency — web components, version alignment)                                                                                          |
| **You do not import** | `@cfpb/cfpb-design-system/dist/index.css` or `@use '…/src/index'` in your app                                                                                             |
| **Best for**          | Greenfield React apps that mostly use DSR components (`dsr-test`, new internal tools)                                                                                     |

The [`ds-components.ts`](src/assets/styles/ds-components.ts) barrel is the **library-maintained list** of DS SCSS files that feed `dist/index.css`. DSR contributors add to it when new React components need DS styles. App developers using Pattern A do not touch that file.

### Pattern B: Full DS CSS + DSR components (existing CFPB apps)

For apps that already load the full Design System — Sass-based properties, hand-rolled DS markup, cf.gov-style setups (for example apps that use `.o-expandable`, `.m-list`, `.m-btn-group` outside DSR components).

Import **DSR components only**. Do **not** import `@cfpb/design-system-react/index.css`.

**JavaScript / prebuilt CSS:**

```ts
// App entry — components from DSR, styles from DS
import { Button, Heading } from '@cfpb/design-system-react';
// No: import '@cfpb/design-system-react/index.css';
```

```scss
// base.scss or global styles entry
@use '@cfpb/cfpb-design-system/src/abstracts' as *;
@use '@cfpb/cfpb-design-system/src/base' as *;
@use '@cfpb/cfpb-design-system/dist/index.css' as *;
```

**Or Sass source (same coverage as `dist/index.css`):**

```scss
@use '@cfpb/cfpb-design-system/src/index' as *;
```

|                       |                                                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **You get**           | Full DS component CSS (expandables, lists, button groups, cards, …) and your existing Sass mixins/variables via `@use '…/abstracts'`                |
| **You still install** | Both `@cfpb/design-system-react` and `@cfpb/cfpb-design-system`                                                                                     |
| **You do not import** | `@cfpb/design-system-react/index.css` — it duplicates DS rules and embeds fonts a second time                                                       |
| **Fonts**             | Load Source Sans yourself (for example `@fontsource-variable/source-sans-3` + DS `licensed-font` mixin). DS `dist/index.css` does not include fonts |
| **Best for**          | Legacy apps mixing DSR React components with plain DS class names in JSX/SCSS                                                                       |

Per-component `@use '@cfpb/cfpb-design-system/src/abstracts'` in your app SCSS is fine — that is Sass API (breakpoints, mixins), not duplicate component CSS.

### Do not combine Pattern A and Pattern B

| If you import…                        | Also import…                              | Result                                                |
| ------------------------------------- | ----------------------------------------- | ----------------------------------------------------- |
| `@cfpb/design-system-react/index.css` | `@cfpb/cfpb-design-system/dist/index.css` | Duplicate button/form/alert rules; fonts loaded twice |
| `@cfpb/design-system-react/index.css` | `@use '…/src/index'` in Sass              | Same duplication                                      |

DSR React components work with either pattern — they emit standard DS classes. Pattern B apps rely on the app’s global DS stylesheet; Pattern A apps rely on the library’s `index.css`.

### Choosing a pattern

| Your situation                                                            | Use                                                                                                                                                |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| New React app, Vite/CRA, mostly DSR components                            | **Pattern A**                                                                                                                                      |
| Existing app with `dist/index.css` or `@use '…/src/index'` in global SCSS | **Pattern B**                                                                                                                                      |
| App uses hand-rolled `.o-expandable`, `.m-list`, `.m-btn-group`, etc.     | **Pattern B** (DSR barrel does not include every DS module)                                                                                        |
| Something looks unstyled on Pattern A                                     | Add the DS file to [`ds-components.ts`](src/assets/styles/ds-components.ts) in DSR, or temporarily switch to Pattern B until the barrel is updated |

### What `ds-components.ts` covers today

Styles bundled into `@cfpb/design-system-react/index.css` (Pattern A only):

| React area                                   | DS stylesheet (under `@cfpb/cfpb-design-system/src/components/…`)                             |
| -------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `Button`                                     | `cfpb-buttons/button`, `cfpb-buttons/button-link`                                             |
| `Heading` (`type="slug"`)                    | `cfpb-typography/slug-header`                                                                 |
| `Pagination`                                 | `cfpb-pagination/pagination`                                                                  |
| Forms (`TextInput`, `Checkbox`, `Select`, …) | `cfpb-forms/form`, `form-field`, `label`, `text-input`, `select`, `multiselect`, `form-alert` |
| `Alert`                                      | `cfpb-notifications/notification` (+ DSR overrides in `alert.scss`)                           |
| `Table`                                      | `cfpb-tables/table`                                                                           |
| `Well`, `Divider`                            | `cfpb-layout/well`, `cfpb-layout/layout`                                                      |

Not in the barrel (Pattern B or future DSR work): expandables, lists, button groups, link typography, hero, cards, and other DS modules. Pattern B apps get these from full DS CSS automatically.

### Other options (advanced)

**À la carte Sass** — if you only need buttons and links and already compile SCSS, import specific DS modules instead of full `dist/index.css`:

```scss
@use '@cfpb/cfpb-design-system/src/base' as base;
@use '@cfpb/cfpb-design-system/src/components/cfpb-buttons/button';
@use '@cfpb/cfpb-design-system/src/components/cfpb-buttons/button-link';
@use '@cfpb/cfpb-design-system/src/components/cfpb-typography/link';
```

Load fonts yourself. This is a slimmer alternative to Pattern B when you control exactly which DS patterns you use. See [`ds-components.ts`](src/assets/styles/ds-components.ts) for the library’s curated equivalent on Pattern A.

**Abstracts/base only** — `@use '…/src/abstracts'` and `@use '…/src/base'` give tokens and global typography, **not** component rules (no `.a-btn`). You still need Pattern A, Pattern B, or à la carte component imports.

### Quick start (Pattern A — Vite + React)

```ts
// main.tsx
import '@cfpb/design-system-react/index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Ensure `@cfpb/cfpb-design-system` and `lit` are installed even on Pattern A, so peer dependencies and web components resolve correctly.

### Storybook (contributors)

Storybook does **not** load prebuilt `dist/index.css`. It compiles the same source stack as Pattern A apps via [`src/assets/styles/entry-styles.ts`](src/assets/styles/entry-styles.ts), imported from [`.storybook/preview.js`](.storybook/preview.js):

```js
import '../src/assets/styles/entry-styles';
```

| Layer              | File                                 | Purpose                                                                                                                         |
| ------------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Fonts              | `@fontsource-variable/source-sans-3` | Registers `@font-face` in the preview bundle — required for nested “All viewports” iframes (each iframe is a separate document) |
| Tokens + overrides | `_shared.scss`                       | DS tokens/normalize plus DSR overrides (font stack, `.wrapper--match-content`, docs-tab prose in `#storybook-docs`)             |
| Component rules    | `ds-components.ts`                   | DS styles bundled into `dist/index.css` for npm consumers                                                                       |

When a component uses Design System class names (for example `.a-btn`, `.m-form-field`), add the matching DS SCSS import to [`ds-components.ts`](src/assets/styles/ds-components.ts). Do not import DS styles from individual component files — the barrel keeps the list in one place.

**Stories** should import components from their source files (for example `./button`, `../Link/link`), not from `~/src/index`. ESLint enforces this on `*.stories.*` (`no-restricted-imports`). **MDX** overview pages should follow the same rule (not linted — our ESLint setup does not parse MDX reliably).

Per-component `.scss` files (for example `banner.scss`, `link.scss`) still load when that component is imported. Storybook-only canvas tweaks live in [`.storybook/preview-head.html`](.storybook/preview-head.html).

### Quick start (Pattern B — existing DS app)

```js
// App.js — global SCSS already loads DS via base.scss
import './css/App.scss';
import { Button, Heading } from '@cfpb/design-system-react';
// Do not import '@cfpb/design-system-react/index.css'
```

```scss
// base.scss
@use '@cfpb/cfpb-design-system/src/abstracts' as *;
@use '@cfpb/cfpb-design-system/src/base' as *;
@use '@cfpb/cfpb-design-system/dist/index.css' as *;
```

## Development

To edit components or add new ones, install dependencies and run Storybook:

1. Install Node v26+ (see `.nvmrc`).
1. Enable [corepack](https://yarnpkg.com/getting-started/install): `corepack enable`.
1. `yarn install`
1. `yarn start`

This project uses Yarn 4 with the `node-modules` linker (see `.yarnrc.yml`).

Edit the files in `src/components/` and your browser should hot reload your changes.

Add tests to files called `<component-name>.test.tsx`. See [`buttons.test.tsx`](/src/components/buttons/button.test.tsx) for an example.

Run `yarn test` to watch for changes and run tests automatically.

[Github actions](https://github.com/rossjrw/pr-preview-action) will build and deploy a preview of any pull requests you open.

## Integrating changes to the CFPB Design System

After modifications made to the Design System have been released in the [NPM package](https://www.npmjs.com/package/@cfpb/cfpb-design-system), we can integrate those changes by updating our dependencies.

1. Create a PR in DSR that updates the Design System library versions

```
git checkout main
git pull --rebase
git checkout -b update-cfpb-ds
yarn up @cfpb/cfpb-design-system
git add --all
git commit -m 'chore: Update CFPB DS to <new.version.number>'
git push
```

2. Review & merge the PR
3. Upon merge, updates will be auto-deployed to [cfpb.github.io/design-system-react/](https://cfpb.github.io/design-system-react/)

## Open source licensing info

1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
