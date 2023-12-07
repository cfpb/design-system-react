export function SubsectionWrapper({ children, ...properties }): JSX.Element {
  return (
    <div {...properties} className='subsection-wrapper'>
      <div className='left-padded'>{children}</div>
    </div>
  );
}

export default SubsectionWrapper;
