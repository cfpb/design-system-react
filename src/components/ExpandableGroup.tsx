import React, { ReactElement, useState } from 'react';

import type { ExpandableProps } from './Expandable';

interface ExpandableGroupProps {
  accordion?: boolean;
  children: ReactElement<ExpandableProps>[];
}

const ExpandableGroup: React.FC<ExpandableGroupProps> = ({
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
      } as Pick<ExpandableProps, 'index' | 'activeIndex' | 'setActiveIndex'>);
    }
    return child;
  });
  return <div className='o-expandable-group'>{childrenWithProps}</div>;
};

export default ExpandableGroup;
