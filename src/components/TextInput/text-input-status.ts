/** Validation modifiers documented at https://cfpb.github.io/design-system/components/text-inputs */
const validationStatusClassMap = {
  success: 'a-text-input--success',
  error: 'a-text-input--error',
  warning: 'a-text-input--warning',
} as const;

export type TextInputStatusType = keyof typeof validationStatusClassMap;

/** Returns the DS validation class, or an empty string when status is omitted or unknown. */
export const getTextInputStatusClass = (
  status?: TextInputStatusType,
): string =>
  status ? (validationStatusClassMap[status] ?? '') : '';
