import classnames from 'classnames';
import type { Ref } from 'react';
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

interface CustomTextInputProperties {
  className?: string;
  inputProps?: JSX.IntrinsicElements['input'];
  inputRef?: TextInputReference;
  isDisabled?: boolean;
  status?: TextInputStatusType;
  type?: InputType;
  isFullWidth?: boolean;
}

export type OptionalTextInputProperties = CustomTextInputProperties &
  JSX.IntrinsicElements['input'];

export type TextInputProperties = OptionalTextInputProperties &
  RequiredTextInputProperties;

/**
 *
 * Text inputs allow the user to enter any combination of letters, numbers, or symbols. Text input fields can span single or multiple lines.
 *
 * Source: <a href='https://cfpb.github.io/design-system/components/text-inputs' target='_blank'> https://cfpb.github.io/design-system/components/text-inputs</a>
 */
export const TextInput = forwardRef(
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
    }: JSX.IntrinsicElements['input'] & TextInputProperties,
    reference: Ref<HTMLInputElement>
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
