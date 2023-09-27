import type { GroupBase, OptionsOrGroups, PropsValue } from 'react-select';
import type { SelectOption } from './Dropdown.types';

export const MockOptions = [
  { value: 'value1', label: 'Option A' },
  { value: 'value2', label: 'Option B' },
  { value: 'value3', label: 'Option C' },
  {
    value: 'long',
    label:
      'Options can also contain long words that will be wrapped like supercalifragilisticexpialidocious'
  }
];

/**
 * For multi-select, hides already selected options.
 *
 * @param options Available options
 * @param selected Selected options
 * @param isMulti Is a multi-select component?
 * @param showAllOptions Force all options to be displayed for selection
 * @returns A list of selectable options
 */
export const filterOptions = (
  options: PropsValue<SelectOption>,
  value: PropsValue<SelectOption>,
  isMulti: boolean,
  showAllOptions: boolean
): OptionsOrGroups<SelectOption, GroupBase<SelectOption>> => {
  if (showAllOptions || !value || !isMulti)
    return options as OptionsOrGroups<SelectOption, GroupBase<SelectOption>>;

  return (options as SelectOption[]).filter(
    o => !(value as SelectOption[]).map(s => s.value).includes(o.value)
  );
};

// Make it easier for the user to delete/edit search text by highlighting all input text onFocus
export const onSelectInputFocus = (
  event: React.ChangeEvent<HTMLInputElement>
): void => {
  event.target.select();
};
