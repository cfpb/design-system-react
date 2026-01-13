import type { SelectOption } from './Select';

/* Convert an SelectOption[] into HTMLOptionElement[] */
export const buildOptions = (
  options: SelectOption[],
  defaultOptionLabel: string
): JSX.Element[] => {
  const formattedOptions = options.map(({ value, label }: SelectOption) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));
  return formattedOptions.length > 0
    ? formattedOptions
    : [
        // return placeholder if no options supplied
        <option key='initial' disabled value=''>
          {defaultOptionLabel}
        </option>
      ];
};

/* Map a value to it's corresponding Option */
export const findOptionByValue = (
  options: SelectOption[],
  value: string
): SelectOption | undefined => options.find(opt => opt.value === value);
