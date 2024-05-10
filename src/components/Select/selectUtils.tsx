import type { SelectOption } from './Select';

/* Convert an SelectOption[] into HTMLOptionElement[] */
export const buildOptions = (
  options: SelectOption[],
  defaultOptionLabel: string
): JSX.Element[] => {
  if (options.length === 0) return [];

  const formattedOptions = options.map(({ value, label }: SelectOption) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));

  return [
    <option key='initial' disabled value=''>
      {defaultOptionLabel}
    </option>,
    ...formattedOptions
  ];
};

/* Map a value to it's corresponding Option */
export const findOptionByValue = (
  options: SelectOption[],
  value: string
): SelectOption | undefined => options.find(opt => opt.value === value);
