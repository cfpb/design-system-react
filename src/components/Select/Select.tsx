import { SelectMulti } from './SelectMulti';
import { SelectSingle } from './SelectSingle';

export interface SelectOption {
  value: string;
  label: string;
  selected?: boolean;
}

export interface SelectProperties {
  disabled?: boolean;
  id: string;
  isMulti?: boolean;
  label?: string;
  onChange?: (selected: SelectOption | SelectOption[] | undefined) => void;
  options: SelectOption[];
  maxSelections?: number;
  className?: string;
}

/**
 * Source: https://cfpb.github.io/design-system/components/selects
 */
export const Select = ({
  isMulti = false,
  onChange = (): null => null,
  ...properties
}: SelectProperties): JSX.Element => {
  if (isMulti) return <SelectMulti {...{ onChange, ...properties }} />;

  return <SelectSingle {...{ onChange, ...properties }} />;
};

export default Select;
