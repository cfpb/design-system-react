declare module '@cfpb/cfpb-design-system' {
  export class CfpbButton extends HTMLElement {
    static init(): void;
    href?: string;
  }

  export class CfpbTagline extends HTMLElement {
    static init(): void;
    isLarge: boolean;
  }
}
