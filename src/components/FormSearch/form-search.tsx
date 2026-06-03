import { CfpbFormSearch } from '@cfpb/cfpb-design-system';
import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  type ReactElement,
  type Ref,
} from 'react';
import { noOp } from '../../utils/no-op';
import {
  applyFormSearchElementProps,
  getFormSearchNativeInput,
  getFormSearchValue,
  syncFormSearchSubmitButton,
  whenFormSearchReady,
  type FormSearchElement,
} from './form-search-utils';

let formSearchInitialized = false;

const ensureFormSearchInitialized = (): void => {
  if (formSearchInitialized) {
    return;
  }

  CfpbFormSearch.init();
  formSearchInitialized = true;
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
  const elementId = id ?? generatedId.replace(/:/g, '');
  const elementReference = useRef<FormSearchElement | null>(null);
  const hasAppliedDefaultValue = useRef(false);
  const hasConnectedReference = useRef(false);
  const isControlled = value !== undefined;

  const handlersReference = useRef({ onChange, onSubmit, onClear });
  handlersReference.current = { onChange, onSubmit, onClear };

  const isControlledReference = useRef(isControlled);
  isControlledReference.current = isControlled;

  const valueReference = useRef(value);
  valueReference.current = value;

  const defaultValueReference = useRef(defaultValue);
  defaultValueReference.current = defaultValue;

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
  }, [
    ariaLabelButton,
    ariaLabelInput,
    disabled,
    label,
    maxlength,
    name,
    placeholder,
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

    const nextValue = value ?? '';
    if (element.value !== nextValue) {
      element.value = nextValue;
    }
  }, [isControlled, value]);

  useLayoutEffect(() => {
    const element = elementReference.current;
    if (!element || hasConnectedReference.current) {
      return undefined;
    }

    return whenFormSearchReady(element, () => {
      const input = getFormSearchNativeInput(element);
      if (!input) {
        return undefined;
      }

      hasConnectedReference.current = true;

      if (isControlledReference.current) {
        element.value = valueReference.current ?? '';
      } else if (
        defaultValueReference.current !== undefined &&
        !hasAppliedDefaultValue.current
      ) {
        element.value = defaultValueReference.current;
        hasAppliedDefaultValue.current = true;
      }

      const submitButton = element.shadowRoot?.querySelector<HTMLButtonElement>(
        'button[type="submit"]',
      );
      const searchInputHost = element.shadowRoot?.querySelector(
        'cfpb-form-search-input',
      );

      const handleInput = (): void => {
        handlersReference.current.onChange(getFormSearchValue(element));
      };

      const handleSubmit = (event: Event): void => {
        event.preventDefault();
        event.stopImmediatePropagation();
        handlersReference.current.onSubmit(getFormSearchValue(element));
      };

      const handleClear = (): void => {
        handlersReference.current.onClear();
        if (!isControlledReference.current) {
          element.value = '';
        }
        handlersReference.current.onChange('');
      };

      input.addEventListener('input', handleInput);
      submitButton?.addEventListener('click', handleSubmit, true);
      searchInputHost?.addEventListener('enter-down', handleSubmit);
      searchInputHost?.addEventListener('clear', handleClear);

      return () => {
        hasConnectedReference.current = false;
        input.removeEventListener('input', handleInput);
        submitButton?.removeEventListener('click', handleSubmit, true);
        searchInputHost?.removeEventListener('enter-down', handleSubmit);
        searchInputHost?.removeEventListener('clear', handleClear);
      };
    });
  }, []);

  useEffect(() => {
    const element = elementReference.current;
    if (!element) {
      return;
    }

    const syncSubmit = (): void => {
      syncFormSearchSubmitButton(element, {
        showSubmitButton,
        submitAriaLabel,
        submitLabel,
      });
    };

    if (hasConnectedReference.current) {
      syncSubmit();
      return;
    }

    void customElements.whenDefined('cfpb-form-search').then(() => {
      requestAnimationFrame(syncSubmit);
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
