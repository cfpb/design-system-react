import { ReactNode, JSX } from '../../../node_modules/react';
export interface FieldsetProperties {
    /** Legend text displayed at the top of the fieldset */
    legend: ReactNode;
    /** Optional block helper text displayed below the legend (uses a-label__helper--block) */
    legendHelperText?: ReactNode;
    /** Form controls such as Checkbox or RadioButton components */
    children: ReactNode;
    /** Display options inline (same line) instead of stacked vertically */
    isInline?: boolean;
    /** Additional CSS classes applied to the fieldset element */
    className?: string;
}
/**
 * A fieldset groups several form controls (checkboxes, radio buttons) with a legend and optional block helper text.
 *
 * Source: https://cfpb.github.io/design-system/components/fieldsets
 */
export declare const Fieldset: ({ legend, legendHelperText, children, isInline, className, ...properties }: FieldsetProperties & JSX.IntrinsicElements["fieldset"]) => JSX.Element;
export default Fieldset;
