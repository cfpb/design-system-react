import type { ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import { components } from 'react-select';
import './DropdownInputWithCheckbox.css';

const CheckboxInputOption = ({
  getStyles, // TODO: figure out type
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps, // TODO: figure out type
  ...rest
}: {
  isDisabled: boolean;
  isFocused: boolean;
  isSelected: boolean;
  children: ReactNode;
}): ReactElement => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = (): void => setIsActive(true);
  const onMouseUp = (): void => setIsActive(false);
  const onMouseLeave = (): void => setIsActive(false);

  // styles
  let bg = 'transparent';
  if (isFocused) bg = '#eee';
  if (isActive) bg = '#B2D4FF';

  const style = {
    alignItems: 'center',
    backgroundColor: bg,
    color: 'inherit',
    display: 'flex '
  };

  // prop assignment
  const properties = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style
  };

  return (
    <components.Option
      className='OptionWithCheckbox'
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={properties}
    >
      <input
        className='checkbox'
        type='checkbox'
        checked={isSelected}
        readOnly
      />
      {children}
    </components.Option>
  );
};

export default CheckboxInputOption;
