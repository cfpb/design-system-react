export const TextIntroduction = ({ heading, lead, body }): JSX.Element => (
  <div className='text-introduction'>
    <h1>{heading}</h1>
    <p className='lead-paragraph'>{lead}</p>
    <p>{body}</p>
  </div>
);
