import classnames from 'classnames';
import type { Ref } from 'react';
import { forwardRef, type ReactNode } from 'react';

type TextInputReference = ReactNode;

export type InputType =
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

export type StatusType = 'error' | 'success' | 'warning';

const statusAlert: Record<StatusType, string> = {
  success: 'a-text-input__success',
  error: 'a-text-input__error',
  warning: 'a-text-input__warning'
};

interface RequiredTextInputProperties {
  id: string;
  name: string;
}

interface CustomTextInputProperties {
  className?: string;
  inputProps?: JSX.IntrinsicElements['input'];
  inputRef?: TextInputReference;
  isDisabled?: boolean;
  status?: StatusType;
  type?: InputType;
  fullWidth?: boolean;
}

export type OptionalTextInputProperties = CustomTextInputProperties &
  JSX.IntrinsicElements['input'];

export type TextInputProperties = OptionalTextInputProperties &
  RequiredTextInputProperties;

export const TextInput = forwardRef(
  (
    {
      className,
      id,
      inputRef,
      isDisabled = false,
      name,
      status,
      type = 'text',
      fullWidth = false,
      ...otherInputProperties
    }: JSX.IntrinsicElements['input'] & TextInputProperties,
    reference: Ref<HTMLInputElement>
  ) => {
    const classes = ['a-text-input'];
    if (fullWidth) {
      classes.push('a-text-input__full');
    }
    if (className) classes.push(className);
    if (status && statusAlert[status]) classes.push(statusAlert[status]);

    if (fullWidth) {
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
