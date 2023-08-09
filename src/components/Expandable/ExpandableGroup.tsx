import { Expandable as CFPB_Expandable } from '@cfpb/cfpb-expandables/src/Expandable';
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
  if (accordion) cname.push('o-expandable-group__accordion');

  useEffect(() => {
    if (!accordion) return;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    CFPB_Expandable.init(document.querySelector(`#${groupId}`));
  }, [accordion, groupId]);

  const childrenWithProperties = React.Children.map(children, child => {
    if (React.isValidElement(child) && accordion) {
      return React.cloneElement(child, { inAccordion: accordion } as Pick<
        ExpandableProperties,
        'inAccordion'
      >);
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
