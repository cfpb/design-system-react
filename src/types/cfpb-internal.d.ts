declare module '@cfpb/cfpb-design-system/src/components/cfpb-forms' {
  export class Multiselect {
    constructor(element: HTMLElement | null);
    init(options?: { maxSelections?: number; renderTags?: boolean }): any;
  }
}
