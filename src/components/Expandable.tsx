import type { ReactNode } from 'react';
import React, { useCallback, useState } from 'react';
import { Icon } from './Icon';

export interface ExpandableProperties {
  header: string;
  activeIndex?: number;
  index?: number;
  setActiveIndex?: (index?: number) => void;
  children: ReactNode;
}

const Expandable: React.FC<ExpandableProperties> = ({
  header,
  activeIndex,
  index,
  setActiveIndex,
  children
}) => {
  const [expanded, setExpanded] = useState(false);

  const onToggleExpanded = useCallback(() => {
    setExpanded(currentlyExpanded => {
      if (!currentlyExpanded && activeIndex !== index && setActiveIndex)
        setActiveIndex(index);
      return !currentlyExpanded;
    });
  }, [setActiveIndex, activeIndex, index]);

  const isExpanded =
    (expanded && index === undefined) || (expanded && index === activeIndex);

  return (
    <div
      className='o-expandable
            o-expandable__padded
            o-expandable__background
            o-expandable__border'
    >
      <button
        type='button'
        className={`o-expandable_header o-expandable_target o-expandable_target__${
          expanded ? 'expanded' : 'collapsed'
        }`}
        title='Expand content'
        onClick={onToggleExpanded}
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
            >
              {expanded ? 'Hide' : 'Show'}
            </div>

            {isExpanded ? (
              <Icon name='minus-round' alt='minus-round' />
            ) : (
              <Icon name='plus-round' alt='plus-round' />
            )}
          </span>
        </span>
      </button>
      {isExpanded ? (
        <div
          className={`o-expandable_content ${
            expanded ? 'o-expandable_content__onload-open' : ''
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Expandable;
