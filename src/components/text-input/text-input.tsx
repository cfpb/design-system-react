import classnames from 'classnames';
import {
  forwardRef,
  JSX,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import './cfpb-text-input.scss';
import type { TextInputStatusType } from './text-input-status';
import { getTextInputStatusClass } from './text-input-status';

type TextInputReference = ReactNode;

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
      inputRef: _inputReference,
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

    const input = (
      <input
        data-testid='textInput'
        className={classnames(classes)}
        disabled={isDisabled}
        id={id}
        name={name}
        type={type}
        ref={reference}
        {...otherInputProperties}
      />
    );

    return isFullWidth ? (
      <div className='m-form-field'>{input}</div>
    ) : (
      input
    );
  },
);

TextInput.displayName = 'TextInput';
