import autoprefixer from 'autoprefixer';
import { processIcons } from './postcss/plugins/process-icons.ts';

export default {
  plugins: [
    // Custom plugins.
    processIcons(),

    // Autoprefixer goes last.
    autoprefixer(),
  ],
};
