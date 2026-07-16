import type { ReactElement, SVGProps } from 'react';

/** Stand-in for `*.svg?react` imports in unit tests (Vite 8 can emit data URLs in Vitest). */
export default function SvgReactComponent(
  properties: SVGProps<SVGSVGElement>,
): ReactElement {
  return <svg {...properties} />;
}
