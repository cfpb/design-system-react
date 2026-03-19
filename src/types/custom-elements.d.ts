import type * as React from 'react';
import type { CfpbFlagUsa } from '../elements/cfpb-flag-usa';
import type { CfpbTagline } from '../elements/cfpb-tagline';

export {};

type CustomElementProps<Attributes extends object = {}> =
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> &
    Attributes;

declare global {
  interface HTMLElementTagNameMap {
    'cfpb-flag-usa': CfpbFlagUsa;
    'cfpb-tagline': CfpbTagline;
  }

  namespace JSX {
    interface IntrinsicElements {
      'cfpb-flag-usa': CustomElementProps;
      'cfpb-tagline': CustomElementProps<{ isLarge?: boolean }>;
    }
  }
}
