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
  const isAccordion = !!setActiveIndex;
  const isSelected = activeIndex === index;
  const isExpanded = isAccordion ? isSelected : expanded;

  const onToggleExpanded = useCallback(() => {
    setExpanded(() => {
      if (isAccordion) {
        if (isSelected) setActiveIndex();
        else setActiveIndex(index);
      }
      return !expanded;
    });
  }, [isAccordion, expanded, isSelected, setActiveIndex, index]);

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
          isExpanded ? 'expanded' : 'collapsed'
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
        className={`u-is-animating o-expandable_content o-expandable_content__transition o-expandable_content__${
          isExpanded ? 'expanded' : 'collapsed'
        }`}
      >
        {children}
      </div>
    </div>
  );
};;;

export default Expandable;
