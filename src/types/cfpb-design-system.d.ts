declare module '@cfpb/cfpb-design-system' {
  export class CfpbIcon extends HTMLElement {
    static init(): void;
    name: string;
    color?: string;
    spin?: boolean;
  }

  export class CfpbTagline extends HTMLElement {
    static init(): void;
    isLarge: boolean;
  }
}
