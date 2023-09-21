import type { ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import { components } from 'react-select';

import Checkbox from '../Checkbox/Checkbox';

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
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = (): void => setIsActive(true);
  const onMouseUp = (): void => setIsActive(false);
  const onMouseLeave = (): void => setIsActive(false);

  // styles
  const isFocusedStyles = {
    // backgroundColor: '#eee',
    outline: '1px dotted #0072ce',
    outlineOffset: '3px'
  };

  const isActiveStyle = {
    // backgroundColor: '#B2D4FF'
  };

  const style = {
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: 'inherit',
    display: 'flex ',
    ...(isFocused ? isFocusedStyles : null),
    ...(isActive ? isActiveStyle : null)
  };

  // prop assignment
  const properties = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  };

  console.log('rest:', rest);

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
      {/* <input
        className={`checkbox a-checkbox o-multiselect_checkbox ${
          isFocused ? '' : ''
        }`}
        type='checkbox'
        checked={isSelected}
        readOnly
      /> */}
      <Checkbox
        id={rest.data?.value}
        disabled={isDisabled}
        checked={isSelected}
        label={<div className=''>{children}</div>}
        // isFocused={isFocused} TODO:
      />
    </components.Option>
  );
};

export default CheckboxInputOption;
