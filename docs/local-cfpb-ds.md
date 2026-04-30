# Pointing design-system-react at a local `@cfpb/cfpb-design-system`

Use this when you have the [cfpb/design-system](https://github.com/cfpb/design-system) repo cloned next to this repo and want Storybook/tests to use your branch (e.g. layout fixes) before a release.

## Layout

Assume sibling directories:

```text
projects/
  design-system/          # monorepo root; package lives in packages/cfpb-design-system/
  design-system-react/    # this repo
```

If your paths differ, adjust the `portal:` URL below.

## Yarn (Berry)

In **design-system-react** `package.json`, temporarily set the devDependency to the **portal** protocol (live symlink to source):

```json
"@cfpb/cfpb-design-system": "portal:../design-system/packages/cfpb-design-system"
```

Then from **design-system-react**:

```bash
yarn install
yarn storybook
# optional
yarn test
```

`portal:` keeps the dependency wired to your clone so SCSS/JS changes in `design-system` show up after save (no publish step).

## After you’re done

1. Remove the `portal:` line and restore the published version (e.g. `"5.3.2"`).
2. Run `yarn install` again.

## Optional: trim duplicate Layout CSS here

`src/components/Layout/layout.scss` in this repo duplicates some rules that belong in the DS once your PR ships. After you adopt a released `@cfpb/cfpb-design-system` that includes the layout fix, consider removing the overlapping blocks from `layout.scss` so overrides stay minimal.

## Alternative: `yarn link`

From `design-system/packages/cfpb-design-system` you can `yarn link`, then in design-system-react `yarn link @cfpb/cfpb-design-system`. Portal is usually simpler in a Yarn workspaces/monorepo workflow.
