import classNames from 'classnames';
import type { ReactElement, Ref } from 'react';
import { forwardRef, type ChangeEventHandler } from 'react';
import { noOp as onNoOp } from '~/src/utils/noOp';
import {
  getTextInputStatusClass,
  type TextInputStatusType
} from './TextInputStatus';

export interface TextAreaType {
  id: string;
  onChange?: (value: string) => void;
  className?: string;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  placeholder?: string;
  status?: TextInputStatusType;
}

/**
 * Source: <a href='https://cfpb.github.io/design-system/components/text-inputs#text-area-input-1' target='_blank'> https://cfpb.github.io/design-system/components/text-inputs#text-area-input-1</a>
 */
export const TextArea = forwardRef(
  (
    {
      id,
      className = '',
      status = 'info',
      placeholder = 'Placeholder text',
      isFullWidth = false,
      isDisabled = false,
      onChange = onNoOp,
      ...properties
    }: JSX.IntrinsicElements['textarea'] & TextAreaType,
    reference: Ref<HTMLTextAreaElement>
  ): ReactElement => {
    const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = event => {
      event.preventDefault();
      onChange(event.target.value);
    };

    const classes = [
      'a-text-input',
      getTextInputStatusClass(status),
      isFullWidth ? 'a-text-input__full' : '',
      className || ''
    ].filter(x => x.length);

    return (
      <div className='m-form-field'>
        <textarea
          className={classNames(classes)}
          id={id}
          placeholder={placeholder}
          onChange={onChangeHandler}
          disabled={isDisabled}
          data-testid='textAreaInput'
          ref={reference}
          {...properties}
        />
      </div>
    );
  }
);
