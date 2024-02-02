const OPTION_COUNT = 4;
const ONE = 1

const SingleSelectOptions = [...Array.from({ length: OPTION_COUNT }).keys()].map(
  number_ => ({ value: `option${number_ + ONE}`, label: `Option ${number_ + ONE}` })
);

const MultipleSelectOptions = [
  ...SingleSelectOptions,
{
  value: 'long-option',
  label:
    'Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious'
}
]

export { MultipleSelectOptions, SingleSelectOptions };

