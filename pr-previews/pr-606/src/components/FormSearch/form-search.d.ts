export type FormSearchValidation = 'error' | 'success' | 'warning';
export interface FormSearchSuggestion {
    /** Display text used for typeahead matching. */
    label: string;
    href?: string;
    disabled?: boolean;
}
export interface FormSearchProperties {
    /** Accessible label for the search icon control. */
    label?: string;
    name?: string;
    /** Controlled search string (synced to the web component `value` property). */
    value?: string;
    /** Initial value when uncontrolled. */
    defaultValue?: string;
    placeholder?: string;
    maxlength?: number;
    disabled?: boolean;
    validation?: FormSearchValidation;
    /** `aria-label` on the search input. */
    ariaLabelInput?: string;
    /** `aria-label` on the clear (reset) control. */
    ariaLabelButton?: string;
    /** Submit button visible label (DS web component defaults to “Search”). */
    submitLabel?: string;
    /** Submit button `aria-label` (DS default: “Search for term(s)”). */
    submitAriaLabel?: string;
    /** When false, hides the DS submit button. */
    showSubmitButton?: boolean;
    /** Typeahead suggestions; rendered as a hidden list in the web component slot. */
    suggestions?: FormSearchSuggestion[];
    className?: string;
    id?: string;
    onChange?: (value: string) => void;
    onSubmit?: (value: string) => void;
    onClear?: () => void;
}
export interface FormSearchHandle {
    /** The underlying `<cfpb-form-search>` element. */
    element: HTMLElement | null;
    focus: () => void;
}
/**
 * Thin React wrapper around the DS `<cfpb-form-search>` web component.
 * Place inside a parent `<form>` when you need native form submission; otherwise
 * use `onSubmit` for app logic (e.g. Redux).
 *
 * @see https://cfpb.github.io/design-system/components/reference-for-custom-elements
 */
export declare const FormSearch: import('../../../node_modules/react').ForwardRefExoticComponent<FormSearchProperties & import('../../../node_modules/react').RefAttributes<FormSearchHandle>>;
export default FormSearch;
