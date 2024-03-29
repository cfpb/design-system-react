import type { SelectOption } from './Select';

/* Convert an SelectOption[] into HTMLOptionElement[] */
export const buildOptions = (options: SelectOption[]): JSX.Element[] => {
  if (options.length === 0) return [];

  return options.map(({ value, label }: SelectOption) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));
};

/* Map a value to it's corresponding Option */
export const findOptionByValue = (
  options: SelectOption[],
  value: string
): SelectOption | undefined => options.find(opt => opt.value === value);