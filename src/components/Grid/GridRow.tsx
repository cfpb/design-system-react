import classnames from 'classnames';

interface GridRowProperties {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}
export function GridRow({
  children,
  className,
  ...properties
}: GridRowProperties): JSX.Element {
  const cnames = ['row', className];
  return (
    <div className={classnames(cnames)} role='row' {...properties}>
      {children}
    </div>
  );
}
