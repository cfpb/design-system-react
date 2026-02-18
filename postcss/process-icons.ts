// modified from
// https://github.com/cfpb/design-system/blob/main/esbuild/plugins/postcss-process-icons.js

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// __filename and __dirname equivalents in ESM.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pluginProcessIcons = () => {
  const stripQuotes = (str) => str.replaceAll(/['"]+/g, '');

  return {
    postcssPlugin: 'process-icons',
    Declaration: {
      '--cfpb-background-icon-svg': async (decl) => {
        const props = decl.value.split(' ');
        const iconName = stripQuotes(props[0]);
        const iconColor = props.length > 1 ? stripQuotes(props[1]) : '';

        const pathToSVG = path.join(
          __dirname,
          '/../node_modules/@cfpb/cfpb-design-system/src/components/cfpb-icons/icons/' +
            iconName +
            '.svg',
        );

        let rawSVG;
        try {
          rawSVG = await fs.readFile(pathToSVG, 'utf8');
        } catch (error) {
          console.error(`Error reading SVG file: ${pathToSVG}`, error);
          return;
        }

        let cleanSVG = rawSVG;
        if (iconColor !== '') {
          cleanSVG = rawSVG.replace(
            /class="cf-icon-svg .+" /,
            `fill="${iconColor}" `,
          );
        }

        decl.prop = 'background-image';
        decl.value = `url('data:image/svg+xml;charset=UTF-8,${cleanSVG}')`;
      },
    },
  };
};
pluginProcessIcons.postcss = true;

export default pluginProcessIcons;
