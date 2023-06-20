import classnames from 'classnames';

interface LayoutMainProperties {
  bleedbar?: boolean;
  children: JSX.Element | JSX.Element[];
  classes?: string;
  id?: string;
  layout?: '1-3' | '2-1';
}
export const LayoutMain = ({
  children,
  classes = '',
  id = 'main',
  layout = '2-1',
  bleedbar
}: LayoutMainProperties): JSX.Element => {
  const cnames = ['content', `content__${layout}`, classes];
  if (bleedbar) cnames.push('content__bleedbar');

  return (
    <main id={id} className={classnames(cnames)} role='main'>
      {children}
    </main>
  );
};
