import { Notification } from '../Notification/Notification';
import type { NotificationFieldLevelType } from '../Notification/NotificationFieldLevel';
import { NotificationFieldLevelClass } from '../Notification/NotificationFieldLevel';

type TextInputReference =
  | React.RefObject<HTMLInputElement>
  | string
  | ((instance: HTMLInputElement | null) => void)
  | null
  | undefined;

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
  inputBorderColor?: string;
  inputProps?: JSX.IntrinsicElements['input'];
  inputRef?: TextInputReference;
  isDisabled?: boolean;
  notificationType?: NotificationFieldLevelType;
  textNotification?: string;
  type?: InputType;
  width?: 'default' | 'full';
}

export type OptionalTextInputProperties = CustomTextInputProperties &
  JSX.IntrinsicElements['input'];

export type TextInputProperties = OptionalTextInputProperties &
  RequiredTextInputProperties;

const baseStyles = ['a-text-input'];

const widthStyles = {
  default: [],
  full: ['a-text-input__full']
};

export function TextInput({
  className,
  id,
  inputBorderColor,
  inputRef,
  isDisabled = false,
  name,
  notificationType = '',
  textNotification,
  type = 'text',
  width = 'default',
  ...inputProperties
}: TextInputProperties): JSX.Element {
  const styles = [...baseStyles, ...widthStyles[width]];
  const classes = [
    className,
    `a-text-input${NotificationFieldLevelClass[notificationType]}`,
    ...styles
  ].join(' ');

  return (
    <div
      className={`m-form-field m-form-field${NotificationFieldLevelClass[notificationType]}`}
    >
      <input
        data-testid='textInput'
        className={classes}
        style={{ borderColor: inputBorderColor }}
        disabled={isDisabled}
        id={id}
        name={name}
        type={type}
        ref={inputRef}
        {...inputProperties}
      />
      <Notification
        id={`${id}-notification`}
        type={notificationType}
        message={textNotification}
        isFieldLevel
      />
    </div>
  );
}

export default TextInput;
