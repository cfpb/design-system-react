import { SelectHTMLAttributes, JSX } from '../../../node_modules/react';
export interface SelectOption {
    value: string;
    label: string;
    selected?: boolean;
}
export interface SelectProperties extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    disabled?: boolean;
    id: string;
    isMulti?: boolean;
    label?: string;
    onChange?: (selected: SelectOption | SelectOption[] | undefined) => void;
    options: SelectOption[];
    maxSelections?: number;
    className?: string;
    value?: string;
    defaultOptionLabel?: string;
}
/**
 * Selects allow users to make a single selection or multiple selections from a finite list of options. They are not always the best choice from a usability perspective; see the use cases section below for more details.
 *
 * Source: https://cfpb.github.io/design-system/components/selects
 */
export declare const Select: ({ isMulti, onChange, ...properties }: SelectProperties) => JSX.Element;
export default Select;
