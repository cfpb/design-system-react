import type { StylesConfig } from 'react-select';

// Better align Select wih CFPB styles
export const extendedSelectStyles: StylesConfig = {
  menu: base => ({
    ...base,
    margin: 0,
    borderRadius: 0,
    border: '1px solid #0072ce' // Border around the menu
  })
};
