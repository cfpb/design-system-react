import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'cfpb-tagline': DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & { isLarge?: boolean },
        HTMLElement
      >;
    }
  }
}

export {};
