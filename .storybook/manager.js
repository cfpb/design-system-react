import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme: theme,
  sidebar: {
    renderLabel: ({ name, type }) => {
      if (type === 'story') {
        // Sentence case
        let newName = name.toLowerCase();
        newName = newName[0].toUpperCase() + newName.substr(1);
        return newName;
      }
      return name;
    }
  }
});
