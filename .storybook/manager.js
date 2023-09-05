import { addons } from '@storybook/manager-api';

addons.setConfig({
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
