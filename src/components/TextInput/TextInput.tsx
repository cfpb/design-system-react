import classnames from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef, type ReactNode } from 'react';
import type { TextInputStatusType } from './TextInputStatus';
import { getTextInputStatusClass } from './TextInputStatus';

type TextInputReference = ReactNode;

export type InputType =
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

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
      status = 'info',
      type = 'text',
      isFullWidth = false,
      ...otherInputProperties
    },
    reference
  ) => {
    const classes = [
      'a-text-input',
      className,
      getTextInputStatusClass(status)
    ];

    if (isFullWidth) {
      classes.push('a-text-input__full');
      return (
        <div className='m-form-field'>
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
        </div>
      );
    }

    return (
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
  }
);
