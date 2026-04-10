import 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import 'react/jsx-runtime';

interface CfpbTaglineElement extends HTMLElement {
  isLarge?: boolean;
}

type CfpbTaglineProps = HTMLAttributes<CfpbTaglineElement> & {
  children?: ReactNode;
  isLarge?: boolean;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'cfpb-tagline': CfpbTaglineProps;
    }
  }
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'cfpb-tagline': CfpbTaglineProps;
    }
  }
}
