import { JSX } from '../../../node_modules/react';
import { SelectOption } from './select';
export declare const buildOptions: (options: SelectOption[], defaultOptionLabel: string) => JSX.Element[];
export declare const findOptionByValue: (options: SelectOption[], value: string) => SelectOption | undefined;
