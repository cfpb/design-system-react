import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  type ReactElement,
  type Ref,
  type RefObject,
} from 'react';
import { noOp } from '../../utils/no-op';
import {
  applyFormSearchElementProps,
  attachFormSearchShadowEvents,
  ensureFormSearchInitialized,
  getFormSearchNativeInput,
  getFormSearchValue,
  syncFormSearchNativeMaxlength,
  syncFormSearchSubmitButton,
  whenFormSearchReady,
  type FormSearchElement,
} from './form-search-utils';

const syncSubmitButtonState = (
  element: FormSearchElement | null,
  {
    showSubmitButton,
    submitAriaLabel,
    submitLabel,
  }: {
    showSubmitButton: boolean;
    submitAriaLabel: string;
    submitLabel: string;
  },
): void => {
  syncFormSearchSubmitButton(element, {
    showSubmitButton,
    submitAriaLabel,
    submitLabel,
  });
};

const disconnectFormSearchEvents = (
  disconnectReference: RefObject<(() => void) | null>,
): void => {
  disconnectReference.current?.();
};

const completeFormSearchConnection = (
  element: FormSearchElement,
  disconnectReference: RefObject<(() => void) | null>,
  applyInitialElementValue: (target: FormSearchElement) => void,
  maxlength: number,
  connectEvents: (target: FormSearchElement) => boolean,
  submitButton: {
    showSubmitButton: boolean;
    submitAriaLabel: string;
    submitLabel: string;
  },
): (() => void) => {
  applyInitialElementValue(element);
  syncFormSearchNativeMaxlength(element, maxlength);
  connectEvents(element);
  syncSubmitButtonState(element, submitButton);

  return () => {
    disconnectFormSearchEvents(disconnectReference);
  };
};

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
export const FormSearch = forwardRef(function FormSearch(
  {
    label,
    name,
    value,
    defaultValue,
    placeholder = 'Enter your search term(s)',
    maxlength = 75,
    disabled = false,
    validation,
    ariaLabelInput = 'Search input',
    ariaLabelButton = 'Clear search',
    submitLabel = 'Search',
    submitAriaLabel = 'Search for term(s)',
    showSubmitButton = true,
    suggestions,
    className,
    id,
    onChange = noOp,
    onSubmit = noOp,
    onClear = noOp,
  }: FormSearchProperties,
  reference: Ref<FormSearchHandle>,
): ReactElement {
  ensureFormSearchInitialized();

  const generatedId = useId();
  const elementId = id ?? generatedId.replaceAll(':', '');
  const elementReference = useRef<FormSearchElement | null>(null);
  const hasAppliedDefaultValue = useRef(false);
  const disconnectEventsReference = useRef<(() => void) | null>(null);
  const isInternalValueChangeReference = useRef(false);
  const isControlled = value !== undefined;

  const handlersReference = useRef({ onChange, onSubmit, onClear });
  handlersReference.current = { onChange, onSubmit, onClear };

  const isControlledReference = useRef(isControlled);
  isControlledReference.current = isControlled;

  const valueReference = useRef(value);
  valueReference.current = value;

  const defaultValueReference = useRef(defaultValue);
  defaultValueReference.current = defaultValue;

  const applyInitialElementValue = useCallback((element: FormSearchElement) => {
    if (isControlledReference.current) {
      element.value = valueReference.current ?? '';
      return;
    }

    if (
      defaultValueReference.current !== undefined &&
      !hasAppliedDefaultValue.current
    ) {
      element.value = defaultValueReference.current;
      hasAppliedDefaultValue.current = true;
    }
  }, []);

  const connectEvents = useCallback(
    (element: FormSearchElement): boolean => {
      disconnectEventsReference.current?.();
      disconnectEventsReference.current = null;

      const removeListeners = attachFormSearchShadowEvents(element, {
        onInput: () => {
          isInternalValueChangeReference.current = true;
          handlersReference.current.onChange(getFormSearchValue(element));
        },
        onSubmit: (event) => {
          event.preventDefault();
          event.stopImmediatePropagation();
          handlersReference.current.onSubmit(getFormSearchValue(element));
        },
        onClear: () => {
          handlersReference.current.onClear();
          if (!isControlledReference.current) {
            element.value = '';
          }
          handlersReference.current.onChange('');
        },
      });

      if (!removeListeners) {
        return false;
      }

      disconnectEventsReference.current = removeListeners;
      return true;
    },
    [],
  );

  useImperativeHandle(reference, () => ({
    element: elementReference.current,
    focus: () => {
      getFormSearchNativeInput(elementReference.current)?.focus();
    },
  }));

  useEffect(() => {
    const element = elementReference.current;
    if (!element) {
      return;
    }

    applyFormSearchElementProps(element, {
      ariaLabelButton,
      ariaLabelInput,
      disabled,
      label,
      maxlength,
      name,
      placeholder,
      validation,
    });

    if (!disconnectEventsReference.current) {
      return;
    }

    let cancelled = false;

    const syncAfterLitUpdate = (): void => {
      if (cancelled) {
        return;
      }

      const currentValue = getFormSearchValue(element);
      syncFormSearchNativeMaxlength(element, maxlength);

      if (currentValue && element.value !== currentValue) {
        element.value = currentValue;
      }

      syncSubmitButtonState(element, {
        showSubmitButton,
        submitAriaLabel,
        submitLabel,
      });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(syncAfterLitUpdate);
    });

    return () => {
      cancelled = true;
    };
  }, [
    ariaLabelButton,
    ariaLabelInput,
    disabled,
    label,
    maxlength,
    name,
    placeholder,
    showSubmitButton,
    submitAriaLabel,
    submitLabel,
    validation,
  ]);

  useEffect(() => {
    if (!isControlled) {
      return;
    }

    const element = elementReference.current;
    if (!element) {
      return;
    }

    if (isInternalValueChangeReference.current) {
      isInternalValueChangeReference.current = false;
      return;
    }

    const nextValue = value ?? '';
    const nativeValue = getFormSearchNativeInput(element)?.value ?? '';

    if (nativeValue === nextValue) {
      if (element.value !== nextValue) {
        element.value = nextValue;
      }

      return;
    }

    if (element.value !== nextValue) {
      element.value = nextValue;
    }
  }, [isControlled, value]);

  useLayoutEffect(() => {
    const element = elementReference.current;
    if (!element) {
      return;
    }

    const submitButton = {
      showSubmitButton,
      submitAriaLabel,
      submitLabel,
    };

    const finishConnection = (): (() => void) =>
      completeFormSearchConnection(
        element,
        disconnectEventsReference,
        applyInitialElementValue,
        maxlength,
        connectEvents,
        submitButton,
      );

    if (element.shadowRoot && getFormSearchNativeInput(element)) {
      return finishConnection();
    }

    return whenFormSearchReady(element, () => finishConnection());
  }, [
    applyInitialElementValue,
    connectEvents,
    maxlength,
    showSubmitButton,
    submitAriaLabel,
    submitLabel,
  ]);

  useEffect(() => {
    const element = elementReference.current;
    if (!element) {
      return;
    }

    const submitOptions = {
      showSubmitButton,
      submitAriaLabel,
      submitLabel,
    };

    if (disconnectEventsReference.current) {
      syncSubmitButtonState(element, submitOptions);
      return;
    }

    void customElements.whenDefined('cfpb-form-search').then(() => {
      requestAnimationFrame(() => {
        syncSubmitButtonState(element, submitOptions);
      });
    });
  }, [showSubmitButton, submitAriaLabel, submitLabel]);

  const suggestionList =
    suggestions && suggestions.length > 0 ? (
      <ul hidden>
        {suggestions.map((suggestion) => (
          <li key={suggestion.label}>
            {suggestion.href ? (
              <a href={suggestion.href}>{suggestion.label}</a>
            ) : (
              suggestion.label
            )}
          </li>
        ))}
      </ul>
    ) : null;

  return (
    <cfpb-form-search
      ref={elementReference}
      className={className}
      id={elementId}
    >
      {suggestionList}
    </cfpb-form-search>
  );
});

FormSearch.displayName = 'FormSearch';

export default FormSearch;
