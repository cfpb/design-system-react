import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
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

  const isExpanded =
    (expanded && index === undefined) || (expanded && index === activeIndex);

  const onToggleExpanded = useCallback(() => {
    setExpanded(currentlyExpanded => {
      if (!currentlyExpanded && activeIndex !== index && setActiveIndex)
        setActiveIndex(index);
      return !currentlyExpanded;
    });
  }, [setActiveIndex, activeIndex, index]);

  useEffect(() => {
    if (activeIndex !== undefined && activeIndex !== index) setExpanded(false);
  }, [activeIndex, index, expanded, setExpanded]);

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
          <span className='o-expandable_cue o-expandable_cue-open'>
            <span className='u-visually-hidden-on-mobile'>Show</span>
            <Icon name='plus-round' alt='plus-round' />
          </span>
          <span className='o-expandable_cue o-expandable_cue-close'>
            <span className='u-visually-hidden-on-mobile'>Hide</span>
            <Icon name='minus-round' alt='minus-round' />
          </span>
        </span>
      </button>
      <div
        className={`o-expandable_content o-expandable_content__transition o-expandable_content__${
          isExpanded ? 'expanded' : 'collapsed'
        }`}
        style={{ maxHeight: isExpanded ? '1500px' : '0px', overflow: 'hidden' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Expandable;
