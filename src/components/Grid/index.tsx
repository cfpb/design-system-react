import './Grid.less';
import { GridColWidth, GridColumn } from './GridColumn';
import { GridRow } from './GridRow';
import { GridWrapper } from './GridWrapper';

/**
 * CFPB Grid
 * https://cfpb.github.io/design-system/foundation/grid
 */

export default {
  Column: GridColumn,
  Row: GridRow,
  Width: GridColWidth,
  Wrapper: GridWrapper
};
