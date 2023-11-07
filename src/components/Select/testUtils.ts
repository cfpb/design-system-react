const OPTION_COUNT = 7;

const DemoOptions = [...Array.from({ length: OPTION_COUNT }).keys()].map(
  number_ => ({ value: `option${number_}`, label: `Option ${number_}` })
);
DemoOptions.push({
  value: 'long-option',
  label:
    'Multiselect options can also contain long words that will be wrapped like supercalifragilisticexpialidocious'
});

export { DemoOptions };
