import CFPB_Expandable from '@cfpb/cfpb-expandables/src/Expandable';
import type { ReactElement } from 'react';
import React, { useEffect } from 'react';
import type { ExpandableProperties } from './Expandable';

export interface ExpandableGroupProperties {
  accordion?: boolean;
  children: ReactElement<ExpandableProperties>[];
}

const ExpandableGroup: React.FC<ExpandableGroupProperties> = ({
  accordion = false,
  children
}) => {
  let cname = 'o-expandable-group';
  if (accordion) cname += ' o-expandable-group__accordion';

  useEffect(() => {
    if (!accordion) return;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    CFPB_Expandable.init(document.querySelector('.o-expandable-group'));
  }, [accordion]);

  const childrenWithProperties = React.Children.map(children, child => {
    if (React.isValidElement(child) && accordion) {
      return React.cloneElement(child, { inAccordion: accordion } as Pick<
        ExpandableProperties,
        'inAccordion'
      >);
    }
    return child;
  });
  return <div className={cname}>{childrenWithProperties}</div>;
};

export default ExpandableGroup;
