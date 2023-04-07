import { Icon } from './Icon';
import { useState } from 'react';

interface ExpandableProps {
  header: string;
  paragraphText: string;
  expandableLink: string;
  openOnLoad?: boolean;
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
        className='o-expandable_header o-expandable_target'
        title='Expand content'
        onClick={toggleExpanded}
      >
        <h3 className='h4 o-expandable_label'>{header}</h3>
        <span className='o-expandable_link'>
          <span
            className={`o-expandable_cue o-expandable_cue-${
              expanded ? 'close' : 'open'
            }`}
          >
            <span className=''>{expanded ? 'Hide' : 'Show'}</span>

            {expanded ? (
              <Icon name='minus' alt={'minus'} withBg={true} />
            ) : (
              <Icon name='plus' alt={'plus'} withBg={true} />
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
