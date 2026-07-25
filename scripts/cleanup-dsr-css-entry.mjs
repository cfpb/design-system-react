import { unlinkSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * The dsr.css Vite build emits a throwaway JS stub alongside the CSS asset.
 * Pattern B consumers only need `dist/dsr.css`.
 */
const stub = resolve(import.meta.dirname, '../dist/dsr-styles-entry.js');

try {
  unlinkSync(stub);
} catch (error) {
  if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
    // Already clean (e.g. re-run or CSS-only emit).
    process.exit(0);
  }
  throw error;
}
