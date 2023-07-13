import type { ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import { components } from 'react-select';
import './DropdownInputWithCheckbox.css';

interface TypeCheckboxInput {
  children: ReactNode;
  getStyles: any; // TODO: figure out type - GetStyles<Option, IsMulti, Group>?
  innerProps: JSX.IntrinsicElements['div'];
  isDisabled: boolean;
  isFocused: boolean;
  isSelected: boolean;
}
const CheckboxInputOption = ({
  children,
  getStyles,
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
      getStyles={getStyles}
      innerProps={properties}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      {...rest}
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
