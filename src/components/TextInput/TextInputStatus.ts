export type TextInputStatusType = 'error' | 'info' | 'success' | 'warning';

export const TextInputStatusClassMap: Record<TextInputStatusType, string> = {
  success: 'a-text-input__success',
  error: 'a-text-input__error',
  warning: 'a-text-input__warning',
  info: 'a-text-input__info'
};

export const getTextInputStatusClass = (status: TextInputStatusType): string =>
  TextInputStatusClassMap[status];
