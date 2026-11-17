declare module '@cfpb/cfpb-design-system/src/components/cfpb-expandables' {
  type InitScope = Element | Document | NodeList | null | undefined;

  export interface ExpandableInstance {
    addEventListener(event: 'expandbegin', callback: () => void): void;
    collapse(): void;
  }

  export const Expandable: {
    /** Returns the instances it initialized (already initialized ones are skipped). */
    init(scope?: InitScope): ExpandableInstance[];
  };
  export const ExpandableGroup: {
    init(scope?: InitScope): void;
  };
  export const Summary: {
    init(scope?: InitScope): void;
  };
  export const SummaryMinimal: {
    init(scope?: InitScope): void;
  };

  export const ExpandableStyles: Record<string, string>;
  export const ExpandableGroupStyles: Record<string, string>;
  export const SummaryStyles: Record<string, string>;
}
