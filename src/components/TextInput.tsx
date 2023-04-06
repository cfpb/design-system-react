import { Icon } from './Icon';

type TextInputReference =
  | React.RefObject<HTMLInputElement>
  | string
  | ((instance: HTMLInputElement | null) => void)
  | null
  | undefined;

interface RequiredTextInputProperties {
  id: string;
  name: string;
  type: 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
}

interface CustomTextInputProperties {
  className?: string;
  width?: 'default' | 'full';
  isDisabled?: boolean;
  inputRef?: TextInputReference;
  inputProps?: JSX.IntrinsicElements['input'];
  inputBorderColor?: string;
  textNotification?: string;
  notificationType?: NotificationType;
}

type NotificationType = 'success' | 'warning' | 'error' | '';

enum notificationClass {
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
  id,
  name,
  type,
  className,
  width = 'default',
  isDisabled = false,
  inputRef,
  inputBorderColor,
  notificationType = '',
  textNotification,
  ...inputProperties
}: TextInputProperties): JSX.Element {
  const styles = [...baseStyles, ...widthStyles[width]];
  const classes = [
    className,
    `a-text-input${notificationClass[notificationType]}`,
    ...styles
  ].join(' ');

  return (
    <div
      className={`m-form-field m-form-field${notificationClass[notificationType]}`}
    >
      <input
        data-testid='textInput'
        className={classes}
        style={{ borderColor: `${inputBorderColor}` }}
        disabled={isDisabled}
        id={id}
        name={name}
        type={type}
        ref={inputRef}
        {...inputProperties}
      />

      {notificationType && (
        <div
          className={`a-form-alert a-form-alert${notificationClass[notificationType]}`}
          id={id}
          role='alert'
        >
          <Icon
            name={iconType[notificationType]}
            alt={notificationType}
            withBg={true}
          />
          <span className='a-form-alert_text'>{textNotification}</span>
        </div>
      )}
    </div>
  );
}

export default TextInput;
