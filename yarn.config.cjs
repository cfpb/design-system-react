/**
 * Yarn constraints: keep peerDependencies aligned with the version we
 * actually install (dependencies / devDependencies).
 *
 * `yarn up` and `yarn upgrade-interactive` update install ranges but not
 * peers — after either, run:
 *   yarn constraints --fix
 *
 * CI runs `yarn constraints` (no --fix) to catch drift.
 */

/**
 * @param {string} range
 * @returns {{prefix: string, version: string}}
 */
function splitRange(range) {
  const match = /^(?<prefix>~|\^)?(?<version>.+)$/.exec(range);
  return {
    prefix: match?.groups?.prefix ?? '',
    version: match?.groups?.version ?? range,
  };
}

/**
 * @param {import('@yarnpkg/types').Yarn.Constraints.Context} context
 */
function enforcePeerDependencyAlignment({ Yarn }) {
  for (const workspace of Yarn.workspaces()) {
    for (const peer of Yarn.dependencies({
      workspace,
      type: 'peerDependencies',
    })) {
      const [prod] = Yarn.dependencies({
        workspace,
        ident: peer.ident,
        type: 'dependencies',
      });
      const [dev] = Yarn.dependencies({
        workspace,
        ident: peer.ident,
        type: 'devDependencies',
      });
      const installed = prod ?? dev;

      if (!installed) {
        workspace.set(['devDependencies', peer.ident], peer.range);
        continue;
      }

      const { prefix } = splitRange(peer.range);
      const { version } = splitRange(installed.range);
      peer.update(`${prefix}${version}`);
    }
  }
}

/** @type {import('@yarnpkg/types').Yarn.Config} */
module.exports = {
  async constraints(ctx) {
    enforcePeerDependencyAlignment(ctx);
  },
};
