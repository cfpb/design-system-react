import { Multiselect } from '@cfpb/cfpb-forms';
import { useEffect, useRef, useState } from 'react';
import { noOp } from '~/src/utils/noOp';
import type { SelectProperties } from './Select';
import { SelectTag } from './SelectTag';
import { buildOptions } from './selectUtils';

const MAX_SELECTIONS = 5;

export const SelectMulti = ({
  id,
  options,
  label,
  onChange = noOp,
  maxSelections = MAX_SELECTIONS,
  ...properties
}: SelectProperties): JSX.Element => {
  const [selectElement, setSelectElement] = useState(null);
  const [selectedIndicies, setSelectedIndicies] = useState([]);
  const inputReference = useRef(null);

  // Initialize and configure DS Multiselect
  useEffect(() => {
    const ms = new Multiselect(inputReference.current);
    const newSelect = ms.init({ maxSelections, renderTags: false });

    const onUpdate = (): void => {
      const modelSelected = newSelect.getModel().getSelectedIndices();
      setSelectedIndicies([...modelSelected]);
    };

    const EVT_SELECT = 'selectionsupdated';
    newSelect.addEventListener(EVT_SELECT, onUpdate);

    setSelectElement(newSelect);

    return () => newSelect.removeEventListener(EVT_SELECT, onUpdate);
  }, [maxSelections]);

  // Notify parent on change of selected options
  useEffect(() => {
    // Map our simplified tracking state to actual Option objects
    const selectedValues = selectedIndicies.map(index => ({
      ...options[index],
      selected: true
    }));

    onChange(selectedValues);
  }, [selectedIndicies, onChange, options]);

  return (
    <div
      className='m-form-field m-form-field__select'
      id={`multi-wrapper-${id}`}
    >
      <label className='a-label a-label__heading' htmlFor={id}>
        {label}
      </label>
      <ul className='o-multiselect_choices selected'>
        {selectedIndicies.map(index => {
          const option = options[index];
          const labelId = `${id}-${option.value}`;

          return (
            <SelectTag
              key={option.value}
              {...option}
              onClick={selectElement.selectionClickHandler}
              onKeyDown={selectElement.selectionKeyDownHandler}
              htmlFor={labelId}
              data-testid={`tag-${labelId}`}
            />
          );
        })}
      </ul>
      <select
        id={id}
        data-testid={id}
        ref={inputReference}
        multiple
        placeholder={`Select up to ${maxSelections}`}
        data-open
        {...properties}
      >
        {buildOptions(options)}
      </select>
    </div>
  );
};
