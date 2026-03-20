// modified from
// https://github.com/cfpb/design-system/blob/main/esbuild/plugins/postcss-process-icons.js

import fs from 'node:fs/promises';
import path from 'node:path';
import type { Declaration, Plugin } from 'postcss';

const __dirname = import.meta.dirname;
const stripQuotes = (str: string): string => str.replaceAll(/['"]+/g, '');

const processIcons = (): Plugin => {
  return {
    postcssPlugin: 'process-icons',
    Declaration: {
      '--cfpb-background-icon-svg': async (
        decl: Declaration,
      ): Promise<void> => {
        const props: string[] = decl.value.split(' ');
        const iconName: string = stripQuotes(props[0]);
        const iconColor: string = props.length > 1 ? stripQuotes(props[1]) : '';

        const pathToSVG: string = path.join(
          __dirname,
          '/../../node_modules/@cfpb/cfpb-design-system/src/components/cfpb-icons/icons/' +
            iconName +
            '.svg',
        );

        let rawSVG: string;
        try {
          rawSVG = await fs.readFile(pathToSVG, 'utf8');
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(`Error reading SVG file: ${pathToSVG}`, error);
          return;
        }

        let cleanSVG: string = rawSVG;

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
processIcons.postcss = true;

export { processIcons };
