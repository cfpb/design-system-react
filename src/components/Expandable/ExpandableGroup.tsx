import { ExpandableGroup as CFPB_ExpandableGroup } from '@cfpb/cfpb-design-system/src/components/cfpb-expandables';
import classnames from 'classnames';
import type { ReactElement } from 'react';
import React, { useEffect } from 'react';
import type { ExpandableProperties } from './Expandable';

export interface ExpandableGroupProperties
  extends React.HTMLAttributes<HTMLDivElement> {
  groupId: string;
  accordion?: boolean;
  children?: ReactElement<ExpandableProperties>[];
}

export const ExpandableGroup: React.FC<ExpandableGroupProperties> = ({
  groupId,
  accordion = false,
  children,
  className = '',
  ...properties
}) => {
  const cname = ['o-expandable-group', className];
  if (accordion) cname.push('o-expandable-group--accordion');

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    CFPB_ExpandableGroup.init();
  }, [accordion]);

  const childrenWithProperties = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // We set inAccordion to true if the item is in a group
        // to ensure it sheds its standalone borders/background
        inAccordion: true,
        openOnLoad: child.props.openOnLoad || false
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
