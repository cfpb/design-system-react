import type { ReactElement, ReactNode } from 'react';
import { components } from 'react-select';

import Checkbox from '../Checkbox/Checkbox';
import './SelectInputWithCheckbox.css';

interface TypeCheckboxInput {
  children: ReactNode;
  innerProps: JSX.IntrinsicElements['div'];
  isDisabled: boolean;
  isFocused: boolean;
  isSelected: boolean;
}
const CheckboxInputOption = ({
  children,
  innerProps,
  isDisabled,
  isFocused,
  isSelected,
  ...rest
}: TypeCheckboxInput): ReactElement => {
  // styles
  const style = {
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: 'inherit',
    display: 'flex '
  };

  // prop assignment
  const properties = {
    ...innerProps,
    style
  };

  const withCheckbox = Boolean(rest.selectProps.customProps.withCheckbox);
  const { id } = rest.selectProps;

  return (
    <components.Option
      className='option-with-checkbox'
      // getStyles={getStyles}
      innerProps={properties}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      {...rest}
    >
      <div
        className={`select-option-container ${
          isFocused ? 'select-option-container--active' : ''
        }`}
      >
        {withCheckbox ? (
          <Checkbox
            id={id}
            disabled={isDisabled}
            checked={isSelected}
            inputClassName={`${isFocused ? 'select-option--active' : ''}`} // controls highlighting the checkbox if the entire line is focused
            label={<div>{children}</div>}
          />
        ) : (
          <div>{children}</div>
        )}
      </div>
    </components.Option>
  );
};

export default CheckboxInputOption;
