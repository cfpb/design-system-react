import { CfpbFormSearch } from '@cfpb/cfpb-design-system';

let formSearchInitialized = false;

/** Register DS custom elements once per app (icons must be configured separately). */
export const ensureFormSearchInitialized = (): void => {
  if (formSearchInitialized) {
    return;
  }

  // Ambient types exist; ESLint's import resolver does not resolve this package.
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access -- WC registration
  CfpbFormSearch.init();
  formSearchInitialized = true;
};

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
  if (name !== undefined && element.name !== name) {
    element.name = name;
  }

  if (label !== undefined && element.label !== label) {
    element.label = label;
  }

  if (placeholder !== undefined && element.placeholder !== placeholder) {
    element.placeholder = placeholder;
  }

  if (maxlength !== undefined) {
    const parsedMaxlength = Number(maxlength);
    if (
      !Number.isNaN(parsedMaxlength) &&
      element.maxlength !== parsedMaxlength
    ) {
      element.maxlength = parsedMaxlength;
    }
  }

  const isDisabled = Boolean(disabled);
  if (element.disabled !== isDisabled) {
    element.disabled = isDisabled;
  }

  if (
    ariaLabelInput !== undefined &&
    element.ariaLabelInput !== ariaLabelInput
  ) {
    element.ariaLabelInput = ariaLabelInput;
  }

  if (
    ariaLabelButton !== undefined &&
    element.ariaLabelButton !== ariaLabelButton
  ) {
    element.ariaLabelButton = ariaLabelButton;
  }

  // Only sync when the React prop is set; otherwise leave WC-driven validation
  // (e.g. maxlength exceeded) intact.
  if (validation !== undefined && (element.validation ?? '') !== validation) {
    if (validation) {
      element.validation = validation;
    } else {
      element.removeAttribute('validation');
    }
  }
};

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
export const attachFormSearchShadowEvents = (
  element: FormSearchElement,
  handlers: FormSearchEventHandlers,
): (() => void) | undefined => {
  const shadowRoot = element.shadowRoot;
  if (!shadowRoot) {
    return undefined;
  }

  let boundInput: HTMLInputElement | null = null;

  const handleNativeInput = (): void => {
    handlers.onInput();
  };

  const bindNativeInput = (): void => {
    if (boundInput) {
      boundInput.removeEventListener('input', handleNativeInput);
      boundInput = null;
    }

    const input = getFormSearchNativeInput(element);
    if (!input) {
      return;
    }

    boundInput = input;
    boundInput.addEventListener('input', handleNativeInput);
  };

  const handleSubmitClick = (event: Event): void => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement) || target.type !== 'submit') {
      return;
    }

    handlers.onSubmit(event);
  };

  const handleEnterDown = (event: Event): void => {
    handlers.onSubmit(event);
  };

  const handleClear = (): void => {
    handlers.onClear();
  };

  bindNativeInput();
  element.dataset.dsrFormSearchConnected = 'true';

  const observer = new MutationObserver(() => {
    bindNativeInput();
  });
  observer.observe(shadowRoot, { childList: true, subtree: true });

  shadowRoot.addEventListener('click', handleSubmitClick, true);
  shadowRoot.addEventListener('enter-down', handleEnterDown);
  shadowRoot.addEventListener('clear', handleClear);

  return () => {
    delete element.dataset.dsrFormSearchConnected;
    observer.disconnect();
    if (boundInput) {
      boundInput.removeEventListener('input', handleNativeInput);
    }
    shadowRoot.removeEventListener('click', handleSubmitClick, true);
    shadowRoot.removeEventListener('enter-down', handleEnterDown);
    shadowRoot.removeEventListener('clear', handleClear);
  };
};

/** Keep the native field's `maxLength` in sync after WC property updates. */
export const syncFormSearchNativeMaxlength = (
  element: FormSearchElement,
  maxlength?: number,
): void => {
  if (maxlength === undefined) {
    return;
  }

  const parsedMaxlength = Number(maxlength);
  if (Number.isNaN(parsedMaxlength)) {
    return;
  }

  const input = getFormSearchNativeInput(element);
  if (input) {
    input.maxLength = parsedMaxlength;
  }
};

/** Stable inner widget; survives Lit re-renders when props like `maxlength` change. */
export const getFormSearchInputHost = (
  element: HTMLElement | null,
): HTMLElement | null =>
  element?.shadowRoot?.querySelector('cfpb-form-search-input') ?? null;

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
    return (): void => {
      /* no-op: element not mounted */
    };
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
  if (element?.tagName !== 'CFPB-FORM-SEARCH') {
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
