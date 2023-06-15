import type { JSXElement } from '../../types/jsxElement';

export default function Link({
  children,
  ...others
}: React.HTMLProps<HTMLAnchorElement>): JSXElement {
  const cname = `a-link ${others.className ?? ''}`;

  return (
    <a {...others} className={cname}>
      {children}
    </a>
  );
}
