declare module '@cfpb/cfpb-design-system/src/components/cfpb-expandables' {
  type InitScope = Element | Document | NodeList | null | undefined;

  export const Expandable: {
    init(scope?: InitScope): void;
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
