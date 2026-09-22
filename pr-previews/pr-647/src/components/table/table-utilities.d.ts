import { TableProperties } from './table';
import { JSXElement } from '../../types/jsx-element';
export declare const buildColumnHeaders: (columns: TableProperties["columns"]) => JSXElement;
export declare const buildRows: (rows: TableProperties["rows"], columns: TableProperties["columns"]) => JSXElement;
