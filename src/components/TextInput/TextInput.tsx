import { Icon } from '../Icon/Icon';

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
  notificationType?: NotificationType;
  textNotification?: string;
  type?: InputType;
  width?: 'default' | 'full';
}

type NotificationType = '' | 'error' | 'success' | 'warning';

enum NotificationClass {
  'success' = '__success',
  'warning' = '__warning',
  'error' = '__error',
  '' = ''
}

const iconType = {
  success: 'approved',
  warning: 'warning',
  error: 'error'
};

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
    `a-text-input${NotificationClass[notificationType]}`,
    ...styles
  ].join(' ');

  return (
    <div
      className={`m-form-field m-form-field${NotificationClass[notificationType]}`}
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

      {notificationType ? (
        <div
          className={`a-form-alert a-form-alert${NotificationClass[notificationType]}`}
          id={id}
          role='alert'
        >
          <Icon
            name={iconType[notificationType]}
            alt={notificationType}
            withBg
          />
          <span className='a-form-alert_text'>{textNotification}</span>
        </div>
      ) : null}
    </div>
  );
}

export default TextInput;
