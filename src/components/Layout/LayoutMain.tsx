import classnames from 'classnames';

interface LayoutMainProperties {
  children: JSX.Element | JSX.Element[];
  classes?: string;
  id?: string;
  layout?: '1-3' | '2-1';
}
export const LayoutMain = ({
  children,
  classes = '',
  id = 'main',
  layout = '2-1'
}: LayoutMainProperties): JSX.Element => {
  const cnames = ['content', `content--${layout}`, classes];

  return (
    <main id={id} className={classnames(cnames)} role='main'>
      {children}
    </main>
  );
};
