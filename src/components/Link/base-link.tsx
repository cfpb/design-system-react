import { ReactNode } from "react";
import type { JSXElement } from "~/src/types/jsx-element";

export interface BaseLinkProperties {
  to: string | undefined;
  children: ReactNode;
  [key: string]: unknown;
}

export const BaseLink = ({
  to,
  children,
  ...others
}: BaseLinkProperties): JSXElement | null => {
  return (
    <a href={to} {...others}>
      {children}
    </a>
  );
};