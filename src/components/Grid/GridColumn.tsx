import classnames from 'classnames';

export enum GridColWidth {
  Full = 12,
  ThreeQuarters = 9,
  TwoThirds = 8,
  Half = 6,
  Third = 4,
  Quarter = 3,
  Single = 1
}

interface GridColumnProperties {
  width?: GridColWidth | number | undefined;
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
  others?: unknown[];
}
export function GridColumn({
  width = GridColWidth.Single,
  children,
  className = '',
  ...properties
}: GridColumnProperties): JSX.Element {
  const cnames = ['col', `col-${width}`, className];

  return (
    <div className={classnames(cnames)} role='gridcell' {...properties}>
      {children}
    </div>
  );
}
