import classnames from 'classnames';
import {
  forwardRef,
  JSX,
  useCallback,
  type ComponentPropsWithoutRef,
  type Ref,
} from 'react';
import './cfpb-text-input.scss';
import type { TextInputStatusType } from './text-input-status';
import { getTextInputStatusClass } from './text-input-status';

type TextInputReference = Ref<HTMLInputElement>;

const releaseNothing = (): void => undefined;

const bindReference = (
  target: Ref<HTMLInputElement> | undefined,
  element: HTMLInputElement | null,
): (() => void) => {
  if (typeof target === 'function') {
    const cleanup = target(element);
    return (): void => {
      if (typeof cleanup === 'function') cleanup();
      else target(null);
    };
  }
  if (target) {
    target.current = element;
    return (): void => {
      target.current = null;
    };
  }
  return releaseNothing;
};

export type InputType =
  'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';

interface RequiredTextInputProperties {
  id: string;
  name: string;
}

interface CustomTextInputProperties extends ComponentPropsWithoutRef<'input'> {
  className?: string;
  inputProps?: JSX.IntrinsicElements['input'];
  inputRef?: TextInputReference;
  isDisabled?: boolean;
  status?: TextInputStatusType;
  type?: InputType;
  isFullWidth?: boolean;
}

export type OptionalTextInputProperties = CustomTextInputProperties;

export type TextInputProperties = OptionalTextInputProperties &
  RequiredTextInputProperties;

/**
 * Source: <a href='https://cfpb.github.io/design-system/components/text-inputs' target='_blank'> https://cfpb.github.io/design-system/components/text-inputs</a>
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProperties>(
  (
    {
      className,
      id,
      inputRef,
      isDisabled = false,
      name,
      status,
      type = 'text',
      isFullWidth = false,
      ...otherInputProperties
    },
    reference,
  ) => {
    const classes = [
      'a-text-input',
      className,
      getTextInputStatusClass(status),
    ];

    if (isFullWidth) {
      classes.push('a-text-input--full');
    }

    const setReferences = useCallback(
      (element: HTMLInputElement | null): (() => void) => {
        const releaseInputReference = bindReference(inputRef, element);
        const releaseForwardedReference = bindReference(reference, element);
        return (): void => {
          releaseInputReference();
          releaseForwardedReference();
        };
      },
      [inputRef, reference],
    );

    const input = (
      <input
        data-testid='textInput'
        className={classnames(classes)}
        disabled={isDisabled}
        id={id}
        name={name}
        type={type}
        ref={setReferences}
        {...otherInputProperties}
      />
    );

    return isFullWidth ? <div className='m-form-field'>{input}</div> : input;
  },
);

TextInput.displayName = 'TextInput';
