import { CfpbFormSearch } from '@cfpb/cfpb-design-system';
import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  type FormEvent,
  type ReactElement,
  type Ref,
} from 'react';
import { noOp } from '../../utils/no-op';
import {
  getFormSearchNativeInput,
  getFormSearchSubmitButton,
} from './form-search-utils';

CfpbFormSearch.init();

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
  /** When false, hides the DS submit button (e.g. submit via parent form only). */
  showSubmitButton?: boolean;
  /** Typeahead suggestions; rendered as a hidden list for the web component slot. */
  suggestions?: FormSearchSuggestion[];
  className?: string;
  id?: string;
  action?: string;
  method?: 'get' | 'post';
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onClear?: () => void;
}

export interface FormSearchHandle {
  /** The underlying `<cfpb-form-search>` element. */
  element: HTMLElement | null;
  focus: () => void;
}

const toDomBoolean = (flag?: boolean): boolean | undefined =>
  flag ? true : undefined;

/**
 * Search widget wrapping the DS `<cfpb-form-search>` web component (input, optional
 * typeahead, and submit). Place inside or alongside a `<form>`; the component renders
 * its own form wrapper so Enter and the submit button trigger `onSubmit`.
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
    action,
    method = 'get',
    onChange = noOp,
    onSubmit = noOp,
    onClear = noOp,
  }: FormSearchProperties,
  reference: Ref<FormSearchHandle>,
): ReactElement {
  const generatedId = useId();
  const elementId = id ?? generatedId.replace(/:/g, '');
  const elementReference = useRef<HTMLElement | null>(null);
  const isControlled = value !== undefined;

  useImperativeHandle(reference, () => ({
    element: elementReference.current,
    focus: () => {
      const input = getFormSearchNativeInput(elementReference.current);
      input?.focus();
    },
  }));

  useEffect(() => {
    const element = elementReference.current;
    if (!element) return;

    if (isControlled) {
      (element as HTMLElement & { value: string }).value = value;
    } else if (defaultValue !== undefined) {
      (element as HTMLElement & { value: string }).value = defaultValue;
    }
  }, [defaultValue, isControlled, value]);

  useEffect(() => {
    const element = elementReference.current;
    if (!element) return;

    const input = getFormSearchNativeInput(element);
    if (!input) return;

    const handleInput = (): void => {
      const currentValue =
        (element as HTMLElement & { value: string }).value ?? input.value;
      onChange(currentValue);
    };

    input.addEventListener('input', handleInput);
    return () => input.removeEventListener('input', handleInput);
  }, [onChange]);

  useEffect(() => {
    const element = elementReference.current;
    if (!element) return;

    const handleClear = (): void => {
      onClear();
      onChange('');
    };

    const searchInput = element.shadowRoot?.querySelector(
      'cfpb-form-search-input',
    );
    searchInput?.addEventListener('clear', handleClear);
    return () => searchInput?.removeEventListener('clear', handleClear);
  }, [onChange, onClear]);

  useEffect(() => {
    const element = elementReference.current;
    if (!element) return;

    let cancelled = false;

    const syncSubmitButton = (): void => {
      const button = getFormSearchSubmitButton(element);
      if (!button) return;

      button.textContent = submitLabel;
      button.setAttribute('aria-label', submitAriaLabel);
      button.hidden = !showSubmitButton;
    };

    void customElements.whenDefined('cfpb-form-search').then(() => {
      if (cancelled) return;
      requestAnimationFrame(syncSubmitButton);
    });

    return () => {
      cancelled = true;
    };
  }, [showSubmitButton, submitAriaLabel, submitLabel]);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const element = elementReference.current as HTMLElement & { value: string };
    const currentValue = element?.value ?? '';
    onSubmit(currentValue);
  };

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
    <form
      action={action}
      className={className}
      id={`${elementId}-form`}
      method={method}
      onSubmit={handleFormSubmit}
    >
      <cfpb-form-search
        ref={elementReference}
        aria-label-button={ariaLabelButton}
        aria-label-input={ariaLabelInput}
        disabled={toDomBoolean(disabled)}
        id={elementId}
        label={label}
        maxlength={maxlength}
        name={name}
        placeholder={placeholder}
        validation={validation}
      >
        {suggestionList}
      </cfpb-form-search>
    </form>
  );
});

FormSearch.displayName = 'FormSearch';

export default FormSearch;
