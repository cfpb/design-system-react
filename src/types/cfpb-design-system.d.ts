import type { HTMLAttributes } from 'react';

declare module '@cfpb/cfpb-design-system' {
  export function setSharedConfig(config: { iconPath: string }): void;

  export class CfpbTagline extends HTMLElement {
    static init(): void;
    isLarge: boolean;
  }

  export class CfpbFormSearch extends HTMLElement {
    static init(): void;
    disabled: boolean;
    validation: string;
    label: string;
    name: string;
    value: string;
    placeholder: string;
    maxlength: number;
    ariaLabelInput: string;
    ariaLabelButton: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'cfpb-form-search': HTMLAttributes<HTMLElement> & {
        disabled?: boolean;
        validation?: string;
        label?: string;
        name?: string;
        value?: string;
        placeholder?: string;
        maxlength?: number;
        'aria-label-input'?: string;
        'aria-label-button'?: string;
      };
      'cfpb-tagline': HTMLAttributes<HTMLElement> & {
        isLarge?: boolean;
      };
    }
  }
}
