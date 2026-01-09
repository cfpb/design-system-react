declare module '@cfpb/cfpb-design-system/src/components/cfpb-forms' {
  export class Multiselect {
    constructor(element: HTMLElement | null);
    init(options?: { maxSelections?: number; renderTags?: boolean }): any;
  }
}

declare module '@cfpb/cfpb-design-system/src/components/cfpb-expandables' {
  export class Expandable {
    static init(element?: Element | NodeList | null): void;
  }
}

declare module '@cfpb/cfpb-design-system/src/components/cfpb-expandables' {
  export class ExpandableGroup {
    static init(element?: Element | NodeList | null): void;
  }
}

declare module '*.svg?react' {
  import { FC, SVGProps } from 'react';
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}