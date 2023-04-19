# CFPB Design Stories

A React/Storybook implementation of [CFPB's Design System](https://github.com/cfpb/design-system).

## Status

✨ Pre-release. Interfaces will change. Things will break.

Current components: https://cfpb.github.io/design-stories/

## Installation

Until we start publishing to npm, install this github repo:

```
yarn add cfpb/design-stories
```

If you're using yarn v2 or greater, [`yarn pack`](https://yarnpkg.com/advanced/lifecycle-scripts) will automatically build the package for you after it's installed.

## Usage

```ts
import { Button, Notification } from 'design-stories';
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

To edit components or add new ones, install dependencies and start storybook:

```
yarn && yarn start
```

Edit the files in `src/components/` and your browser should hot reload your changes.

Add tests to files called `<component-name>.test.tsx`. See [`Buttons.test.tsx`](/src/components/Button.test.tsx) for an example.

Run `yarn test` to watch for changes and run tests automatically.

## Open source licensing info

1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
