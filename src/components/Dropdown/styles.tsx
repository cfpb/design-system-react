import type { CSSObjectWithLabel, ControlProps, GroupBase } from 'react-select';
import type { SelectOption } from './Dropdown.types';

// Better align Select wih CFPB styles
export const extendedSelectStyles = {
  control: (
    base: CSSObjectWithLabel,
    state: ControlProps<SelectOption, boolean, GroupBase<SelectOption>>
  ): CSSObjectWithLabel => ({
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
  })
};
