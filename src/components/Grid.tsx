import classnames from 'classnames';
import './Grid.less';

/**
 * CFPB Grid
 * https://cfpb.github.io/design-system/foundation/grid
 */

const FULL_WIDTH = 12;
const ONE_COLUMN = 1;

interface GridProperties {
  width?: number | undefined;
  children?: JSX.Element | JSX.Element[] | string;
  demo?: boolean;
}

interface GridColumnProperties {
  width?: number | undefined;
  children?: JSX.Element | JSX.Element[] | string;
}

interface SubgridProperties {
  children: JSX.Element | JSX.Element[] | string;
}

export function Grid({
  children,
  width = FULL_WIDTH,
  demo
}: GridProperties): JSX.Element {
  const cnames = [`cols-${width}`];
  if (demo) cnames.push('demo');

  return (
    <div className={classnames(cnames)} role='grid'>
      {children}
    </div>
  );
}

export function GridColumn({
  width = ONE_COLUMN,
  children
}: GridColumnProperties): JSX.Element {
  return (
    <div className={`col col-${width}`} role='gridcell'>
      {children}
    </div>
  );
}

export function GridNested({ children }: SubgridProperties): JSX.Element {
  return (
    <div className='nested' role='grid'>
      {children}
    </div>
  );
}
