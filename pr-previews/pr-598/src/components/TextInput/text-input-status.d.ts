export type TextInputStatusType = 'error' | 'info' | 'success' | 'warning';
export declare const TextInputStatusClassMap: Record<TextInputStatusType, string>;
export declare const getTextInputStatusClass: (status: TextInputStatusType) => string;
