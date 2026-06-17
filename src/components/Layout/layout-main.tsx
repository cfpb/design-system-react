import classnames from 'classnames';
import { JSX } from 'react';

export interface LayoutMainProperties {
  children: JSX.Element | JSX.Element[];
  classes?: string;
  id?: string;
  layout?: '1-3' | '2-1';
}
export const LayoutMain = ({
  children,
  classes = '',
  id = 'main',
  layout,
}: LayoutMainProperties): JSX.Element => (
  <main
    id={id}
    className={classnames('content', layout && `content--${layout}`, classes)}
    role='main'
  >
    {children}
  </main>
);
