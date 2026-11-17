import {
  Expandable as CFPB_Expandable,
  type ExpandableInstance,
} from '@cfpb/cfpb-design-system/src/components/cfpb-expandables';
import classnames from 'classnames';
import React, { useEffect, useRef } from 'react';
import type { FC, HTMLAttributes, ReactElement } from 'react';
import type { ExpandableProperties } from './expandable';

export interface ExpandableGroupProperties extends HTMLAttributes<HTMLDivElement> {
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

  const groupReference = useRef<HTMLDivElement>(null);
  const isAccordionReference = useRef(accordion);
  const lastExpandedReference = useRef<ExpandableInstance | null>(null);

  useEffect(() => {
    isAccordionReference.current = accordion;
  }, [accordion]);

  // Initialize every expandable in this group that is not initialized yet.
  // This runs again when the children change, so items rendered after the
  // group mounted (async data, filtered lists) work too.
  useEffect(() => {
    const newExpandables = CFPB_Expandable.init(groupReference.current);

    for (const expandable of newExpandables) {
      expandable.addEventListener('expandbegin', () => {
        // Accordion: opening one item closes the one opened before it
        const lastExpanded = lastExpandedReference.current;
        lastExpandedReference.current = expandable;
        if (lastExpanded === expandable || !isAccordionReference.current) {
          return;
        }
        lastExpanded?.collapse();
      });
    }
  }, [children]);

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
    <div
      ref={groupReference}
      id={groupId}
      className={classnames(cname)}
      {...properties}
    >
      {childrenWithProperties}
    </div>
  );
};

export default ExpandableGroup;
