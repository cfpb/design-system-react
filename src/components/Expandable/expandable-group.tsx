import { ExpandableGroup as CFPB_ExpandableGroup } from '@cfpb/cfpb-design-system/src/components/cfpb-expandables';
import classnames from 'classnames';
import React, { useEffect } from 'react';
import type { FC, HTMLAttributes, ReactElement } from 'react';
import type { ExpandableProperties } from './expandable';

export interface ExpandableGroupProperties
  extends HTMLAttributes<HTMLDivElement> {
  groupId: string;
  accordion?: boolean;
  children?: ReactElement<ExpandableProperties>[];
}

export const ExpandableGroup: FC<ExpandableGroupProperties> = ({
  groupId,
  accordion = false,
  children,
  className = '',
  ...properties
}) => {
  const cname = ['o-expandable-group', className];
  if (accordion) cname.push('o-expandable-group--accordion');

  useEffect(() => {
    CFPB_ExpandableGroup.init();
  }, [accordion]);

  const childrenWithProperties = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // We set inAccordion to true if the item is in a group
        // to ensure it sheds its standalone borders/background
        inAccordion: true,
        openOnLoad: child.props.openOnLoad ?? false,
      } as Partial<ExpandableProperties>);
    }
    return child;
  });
  return (
    <div id={groupId} className={classnames(cname)} {...properties}>
      {childrenWithProperties}
    </div>
  );
};

export default ExpandableGroup;
