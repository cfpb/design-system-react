/** Locate the native search field inside `<cfpb-form-search>`. */
export const getFormSearchNativeInput = (
  element: HTMLElement | null,
): HTMLInputElement | null => {
  if (!element || element.tagName !== 'CFPB-FORM-SEARCH') {
    return null;
  }

  const searchInput = element.shadowRoot?.querySelector(
    'cfpb-form-search-input',
  );

  return (
    searchInput?.shadowRoot?.querySelector<HTMLInputElement>(
      'input[type="search"]',
    ) ?? null
  );
};

/** Locate the submit control inside `<cfpb-form-search>`. */
export const getFormSearchSubmitButton = (
  element: HTMLElement | null,
): HTMLButtonElement | null =>
  element?.shadowRoot?.querySelector<HTMLButtonElement>(
    'button[type="submit"]',
  ) ?? null;
