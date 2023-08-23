# CFPB Design System React

A React/Storybook implementation of [CFPB's Design System](https://github.com/cfpb/design-system).

## Status

✨ Pre-release. Interfaces will change. Things will break.

Current components: https://cfpb.github.io/design-system-react

## Installation

Until we start publishing to npm, install this github repo:

```
yarn add cfpb/design-system-react
```

If you're using yarn v2 or greater, [`yarn pack`](https://yarnpkg.com/advanced/lifecycle-scripts) will automatically build the package for you after it's installed.

## Usage

```ts
import { Button, Notification } from 'design-system-react';
import type { ReactElement } from 'react';

export default function SomePage(): ReactElement {
  return (
    <main>
      <Notification
        message='2025-Q1 Quarterly filing period is open'
        type='success'
      >
        Submissions of 2025-Q1 SBL data will be accepted through May 2025.
      </Notification>
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

## Development

To edit components or add new ones, make sure you have Yarn v3 set up locally and then run `yarn dev`:

1. Install Node v16.9+.
1. Enable [corepack](https://yarnpkg.com/getting-started/install): `corepack enable`.
1. `yarn`
1. `yarn start`

Note: This project uses yarn v3.5 in "plug n play" mode. There is no `node_modules/` directory. Packages are stored in `.yarn/cache/`.

Edit the files in `src/components/` and your browser should hot reload your changes.

Add tests to files called `<component-name>.test.tsx`. See [`Buttons.test.tsx`](/src/components/Button.test.tsx) for an example.

Run `yarn test` to watch for changes and run tests automatically.

[Netlify](https://www.netlify.com/) will build and deploy a preview of any pull requests you open.

## Open source licensing info

1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
