import { promises as fs } from 'node:fs';
import type { Plugin } from 'vite';

export function svgRawLoaderPlugin(): Plugin {
  return {
    name: 'svg-raw-loader',
    enforce: 'pre', // Run before SVGR and other plugins
    async load(id) {
      // Only target .svg files that do NOT have a query (like ?react)
      if (id.endsWith('.svg') && !id.includes('?')) {
        const svgRaw = await fs.readFile(id, 'utf8');
        // Return the raw SVG content wrapped in a JS export
        return `export default ${JSON.stringify(svgRaw)}`;
      }
    },
  };
}
