import React, { ReactElement, useState } from 'react';
import type { ExpandableProperties } from './Expandable';

export interface ExpandableGroupProps {
  accordion?: boolean;
  children: ReactElement<ExpandableProperties>[];
}

export const ExpandableGroup: React.FC<ExpandableGroupProps> = ({
  accordion = false,
  children
}) => {
  const [activeIndex, setActiveIndex] = useState(undefined);
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && accordion) {
      return React.cloneElement(child, {
        index,
        activeIndex,
        setActiveIndex
      } as Pick<ExpandableProperties, 'index' | 'activeIndex' | 'setActiveIndex'>);
    }
    return child;
  });
  return <div className='o-expandable-group'>{childrenWithProps}</div>;
};

export default ExpandableGroup;
