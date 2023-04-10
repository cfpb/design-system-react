import React from 'react';
import { ReactNode, useState } from 'react';
import Expandable from './Expandable';
import ExtendableProps from './Expandable';

interface ExpandableProps {
  accordian?: boolean;
  children: ReactNode;
}

const ExpandableGroup: React.FC<ExpandableProps> = ({
  accordion = false,
  children
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && accordian) {
      return React.cloneElement(child, { index, activeIndex, setActiveIndex });
    }
    return child;
  });
  return <div className='o-expandable-group'>{childrenWithProps}</div>;
};

export default ExpandableGroup;
