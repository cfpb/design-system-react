import React, { ReactNode, useState } from 'react';

interface ExpandableProps {
  accordion?: boolean;
  children: ReactNode;
}

const ExpandableGroup: React.FC<ExpandableProps> = ({
  accordion = false,
  children
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && accordion) {
      return React.cloneElement(child, { index, activeIndex, setActiveIndex });
    }
    return child;
  });
  return <div className='o-expandable-group'>{childrenWithProps}</div>;
};

export default ExpandableGroup;
