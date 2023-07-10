export const SelectableInstitution = ({ institution }) => (
  <div className='institution'>
    <input
      type='checkbox'
      onChange={value => console.log('Value changed:', value.target)}
    />
    <div className='info'>
      <div>
        <b>{institution.name}</b>
      </div>
      <div>
        <span className='label'>LEI:</span>
        {institution.lei}
      </div>
      <div>
        <span className='label'>Tax ID:</span> Source?
      </div>
      <div>
        <span className='label'>Agency Code:</span> Source?
      </div>
    </div>
  </div>
);

export const MatchedInstitutions = ({ institutions }) => {
  if (!institutions || institutions.length === 0) return null;
  const selectableItems = [];
  for (const index of institutions)
    selectableItems.push(<SelectableInstitution institution={index} />);

  return (
    <div className='matched-institutions u-mb30'>
      The following institutions match your email domain. Select the available
      institutions you wish to file for. You may select more than one.
      {selectableItems}
    </div>
  );
};
