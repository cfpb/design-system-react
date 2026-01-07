export type TextInputStatusType = 'error' | 'info' | 'success' | 'warning';

export const TextInputStatusClassMap: Record<TextInputStatusType, string> = {
  success: 'a-text-input--success',
  error: 'a-text-input--error',
  warning: 'a-text-input--warning',
  info: 'a-text-input--info'
};

export const getTextInputStatusClass = (status: TextInputStatusType): string =>
  TextInputStatusClassMap[status];
