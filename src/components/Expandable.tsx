import { Icon } from './Icon';
import { useState } from 'react';

export interface ExpandableProps {
  header: string;
  paragraphText: string;
  expandableLink: string;
}

const Expandable: React.FC<ExpandableProps> = ({
  header,
  paragraphText,
  expandableLink
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div
      className='o-expandable
            o-expandable__padded
            o-expandable__background
            o-expandable__border'
    >
      <button
        className={`o-expandable_header o-expandable_target o-expandable_target__${
          expanded ? 'expanded' : 'collapsed'
        }`}
        title='Expand content'
        onClick={toggleExpanded}
      >
        <h3 className='h4 o-expandable_label'>{header}</h3>
        <span className='o-expandable_link'>
          <span
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            className={`o-expandable_cue o-expandable_cue-${
              expanded ? 'close' : 'open'
            }`}
          >
            <div
              style={{ minWidth: '2.5em' }}
              className='u-visually-hidden-on-mobile'
            >{expanded ? 'Hide' : 'Show'}</div>

            {expanded ? (
              <Icon name={'minus-round'} alt={'minus-round'} />
            ) : (
              <Icon name={'plus-round'} alt={'plus-round'} />
            )}
          </span>
        </span>
      </button>
      {expanded && (
        <div
          className={`o-expandable_content ${
            expanded ? 'o-expandable_content__onload-open' : ''
          }`}
        >
          <p>
            {paragraphText}
            <a href='#'>{expandableLink}</a>.
          </p>
        </div>
      )}
    </div>
  );
};

export default Expandable;
