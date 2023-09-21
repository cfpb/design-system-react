import type { StylesConfig } from 'react-select';

// Better align Select wih CFPB styles
export const extendedSelectStyles: StylesConfig = {
  control: (base, state) => ({
    ...base,
    borderColor: state.isFocused ? '#0072ce' : base.borderColor,
    outline: state.isFocused ? '1px dotted #0072ce !important' : base.outline,
    outlineOffset: state.isFocused ? '3px' : base.outlineOffset,
    '&:hover': {
      borderColor: '#0072ce',
      outline: state.isFocused
        ? '1px dotted #0072ce !important'
        : '1px solid #0072ce !important',
      outlineOffset: state.isFocused ? '3px' : '0'
    }
  }),
  menu: provided => ({
    ...provided,
    // backgroundColor: '#f0f0f0', // Background color of the entire menu
    margin: 0,
    borderRadius: 0,
    border: '1px solid #0072ce' // Border around the menu
  })
};
