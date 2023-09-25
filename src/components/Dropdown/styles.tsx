import type { StylesConfig } from 'react-select';

// Better align Select wih CFPB styles
export const extendedSelectStyles: StylesConfig = {
  menu: base => ({
    ...base,
    // backgroundColor: '#f0f0f0', // Background color of the entire menu
    margin: 0,
    borderRadius: 0,
    border: '1px solid #0072ce' // Border around the menu
  })
};
