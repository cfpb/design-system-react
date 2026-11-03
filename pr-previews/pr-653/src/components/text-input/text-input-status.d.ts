/** Validation modifiers documented at https://cfpb.github.io/design-system/components/text-inputs */
declare const validationStatusClassMap: {
    readonly success: "a-text-input--success";
    readonly error: "a-text-input--error";
    readonly warning: "a-text-input--warning";
};
export type TextInputStatusType = keyof typeof validationStatusClassMap;
/** Returns the DS validation class, or an empty string when status is omitted or unknown. */
export declare const getTextInputStatusClass: (status?: TextInputStatusType) => string;
export {};
