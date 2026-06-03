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
export const getFormSearchValue = (element: HTMLElement | null): string => {
  if (!element) {
    return '';
  }

  const host = element as FormSearchElement;

  if (host.value) {
    return host.value;
  }

  return getFormSearchNativeInput(element)?.value ?? '';
};

/** Apply React props to the custom element as properties (avoids attribute churn on re-render). */
export const applyFormSearchElementProps = (
  element: FormSearchElement,
  {
    name,
    label,
    placeholder,
    maxlength,
    disabled,
    validation,
    ariaLabelInput,
    ariaLabelButton,
  }: FormSearchElementProps,
): void => {
  if (name !== undefined) {
    element.name = name;
  }

  if (label !== undefined) {
    element.label = label;
  }

  if (placeholder !== undefined) {
    element.placeholder = placeholder;
  }

  if (maxlength !== undefined) {
    element.maxlength = maxlength;
  }

  element.disabled = Boolean(disabled);

  if (ariaLabelInput !== undefined) {
    element.ariaLabelInput = ariaLabelInput;
  }

  if (ariaLabelButton !== undefined) {
    element.ariaLabelButton = ariaLabelButton;
  }

  if (validation) {
    element.validation = validation;
  } else {
    element.removeAttribute('validation');
  }
};

/** Sync submit button label, aria-label, and visibility inside the shadow tree. */
export const syncFormSearchSubmitButton = (
  element: HTMLElement | null,
  {
    submitLabel,
    submitAriaLabel,
    showSubmitButton,
  }: {
    submitLabel: string;
    submitAriaLabel: string;
    showSubmitButton: boolean;
  },
): void => {
  const button = getFormSearchSubmitButton(element);
  if (!button) {
    return;
  }

  button.textContent = submitLabel;
  button.setAttribute('aria-label', submitAriaLabel);
  button.hidden = !showSubmitButton;
};

/** Run `callback` once the search widget shadow tree exposes the native input. */
export const whenFormSearchReady = (
  element: HTMLElement | null,
  callback: (element: HTMLElement) => void | (() => void),
): (() => void) => {
  if (!element) {
    return () => undefined;
  }

  let dispose: void | (() => void);
  let cancelled = false;

  const run = (): boolean => {
    if (cancelled) {
      return false;
    }

    dispose?.();
    dispose = undefined;

    const cleanup = callback(element);
    if (!cleanup) {
      return false;
    }

    dispose = cleanup;
    return true;
  };

  if (!run()) {
    void Promise.all([
      customElements.whenDefined('cfpb-form-search'),
      customElements.whenDefined('cfpb-form-search-input'),
    ]).then(() => {
      if (cancelled) return;

      requestAnimationFrame(() => {
        if (run() || cancelled) return;

        requestAnimationFrame(() => {
          run();
        });
      });
    });
  }

  return () => {
    cancelled = true;
    dispose?.();
  };
};

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
