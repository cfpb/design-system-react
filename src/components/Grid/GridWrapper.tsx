import classnames from 'classnames';
import { GridColWidth } from './GridColumn';

interface GridWrapperProperties {
  width?: number | undefined;
  children?: JSX.Element | JSX.Element[] | string;
  demo?: boolean;
  center?: boolean;
  className?: string;
}

export function GridWrapper({
  children,
  width = GridColWidth.Full, // TODO: Do we need to support non-12-column grids?
  demo,
  center,
  className,
  ...properties
}: GridWrapperProperties): JSX.Element {
  const cnames = [`grid cols-${width}`, className];
  if (demo) cnames.push('demo');
  if (center) cnames.push('centered');

  return (
    <div className={classnames(cnames)} role='grid' {...properties}>
      {children}
    </div>
  );
}
