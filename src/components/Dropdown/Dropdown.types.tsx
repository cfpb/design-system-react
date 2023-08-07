import type { OnChangeValue, PropsValue } from 'react-select';
import type { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

export interface SelectOption {
  value: string;
  label: string;
}

export interface DropdownProperties extends StateManagerProps {
  defaultValue?: PropsValue<SelectOption>;
  id: string;
  isDisabled?: boolean;
  isMulti?: boolean;
  label?: string;
  onSelect: (event: OnChangeValue<SelectOption, boolean>) => void;
  options: SelectOption[];
  pillAlign?: 'bottom' | 'hide' | 'top'; // Display pills below/above the select input or hide them
  showClearAllSelectedButton?: boolean; // Show/Hide our custom 'Clear All...' button
  value?: PropsValue<SelectOption>;
  withCheckbox?: boolean; // Show/Hide checkbox next to optios
}
