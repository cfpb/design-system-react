import classNames from 'classnames';
import {
  forwardRef,
  JSX,
  type ChangeEventHandler,
  type ReactElement,
  type Ref,
} from 'react';
import { noOp as onNoOp } from '../../utils/no-op';
import './cfpb-text-input.scss';
import {
  getTextInputStatusClass,
  type TextInputStatusType,
} from './text-input-status';
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
      className,
      status,
      placeholder = 'Placeholder text',
      isFullWidth = false,
      isDisabled = false,
      onChange = onNoOp,
      ...properties
    }: JSX.IntrinsicElements['textarea'] & TextAreaType,
    reference: Ref<HTMLTextAreaElement>,
  ): ReactElement => {
    const { style, ...restProperties } = properties;

    const onChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (
      event,
    ) => {
      event.preventDefault();
      onChange(event.target.value);
    };

    const classes = [
      'a-text-input',
      className,
      getTextInputStatusClass(status),
    ];

    if (isFullWidth) {
      classes.push('a-text-input--full');
    }

    const textarea = (
      <textarea
        className={classNames(classes)}
        id={id}
        placeholder={placeholder}
        onChange={onChangeHandler}
        disabled={isDisabled}
        data-testid='textAreaInput'
        ref={reference}
        style={{ ...style, resize: 'vertical' }}
        {...restProperties}
      />
    );

    return isFullWidth ? (
      <div className='m-form-field'>{textarea}</div>
    ) : (
      textarea
    );
  },
);

TextArea.displayName = 'TextArea';
