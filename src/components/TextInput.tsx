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
  svg?: SVGElement;
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
  id,
  name,
  type,
  className,
  width = 'default',
  isDisabled = false,
  inputRef,
  inputBorderColor,
  svg,
  textNotification,
  ...inputProperties
}: TextInputProperties): JSX.Element {
  const styles = [...baseStyles, ...widthStyles[width]];
  const classes = [className, ...styles].join(' ');

  return (
    <div className='m-form-field m-form-field__success'>
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

      <div
        className='.cf-icon-svg-wrapper+.m-notification_content'
        id={id}
        role='alert'
      >
        {svg}
        {/* <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='#20aa3f'
          height='18'
          viewBox='0 0 17 20.4'
        >
          <path d='M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z'></path>
        </svg> */}

        <span className='a-form-alert_text'>{textNotification}</span>
      </div>
    </div>
  );
}

export default TextInput;
