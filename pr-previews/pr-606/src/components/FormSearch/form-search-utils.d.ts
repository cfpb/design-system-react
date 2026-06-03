/** Register DS custom elements once per app (icons must be configured separately). */
export declare const ensureFormSearchInitialized: () => void;
export type FormSearchElement = HTMLElement & {
    value: string;
    name?: string;
    label?: string;
    placeholder?: string;
    maxlength?: number;
    disabled?: boolean;
    validation?: string;
    ariaLabelInput?: string;
    ariaLabelButton?: string;
};
export interface FormSearchElementProps {
    name?: string;
    label?: string;
    placeholder?: string;
    maxlength?: number;
    disabled?: boolean;
    validation?: string;
    ariaLabelInput?: string;
    ariaLabelButton?: string;
}
/** Read the current query string from the web component (host property or native input). */
export declare const getFormSearchValue: (element: HTMLElement | null) => string;
/** Apply React props to the custom element as properties (avoids attribute churn on re-render). */
export declare const applyFormSearchElementProps: (element: FormSearchElement, { name, label, placeholder, maxlength, disabled, validation, ariaLabelInput, ariaLabelButton, }: FormSearchElementProps) => void;
export interface FormSearchEventHandlers {
    onInput: () => void;
    onSubmit: (event: Event) => void;
    onClear: () => void;
}
/**
 * Wire search events so they survive Lit re-renders (e.g. when `maxlength` changes).
 * Uses shadow-root delegation for composed events and re-binds the native `<input>`
 * when the inner shadow tree is replaced.
 */
export declare const attachFormSearchShadowEvents: (element: FormSearchElement, handlers: FormSearchEventHandlers) => (() => void) | undefined;
/** Keep the native field's `maxLength` in sync after WC property updates. */
export declare const syncFormSearchNativeMaxlength: (element: FormSearchElement, maxlength?: number) => void;
/** Stable inner widget; survives Lit re-renders when props like `maxlength` change. */
export declare const getFormSearchInputHost: (element: HTMLElement | null) => HTMLElement | null;
/** Sync submit button label, aria-label, and visibility inside the shadow tree. */
export declare const syncFormSearchSubmitButton: (element: HTMLElement | null, { submitLabel, submitAriaLabel, showSubmitButton, }: {
    submitLabel: string;
    submitAriaLabel: string;
    showSubmitButton: boolean;
}) => void;
/** Run `callback` once the search widget shadow tree exposes the native input. */
export declare const whenFormSearchReady: (element: HTMLElement | null, callback: (element: HTMLElement) => void | (() => void)) => (() => void);
/** Locate the native search field inside `<cfpb-form-search>`. */
export declare const getFormSearchNativeInput: (element: HTMLElement | null) => HTMLInputElement | null;
/** Locate the submit control inside `<cfpb-form-search>`. */
export declare const getFormSearchSubmitButton: (element: HTMLElement | null) => HTMLButtonElement | null;
