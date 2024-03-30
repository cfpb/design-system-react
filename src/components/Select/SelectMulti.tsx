// Lots of rules disabled because we're using DS code that is plain JS, not TS
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Multiselect } from '@cfpb/cfpb-forms';
import { useEffect, useRef, useState } from 'react';
import { noOp } from '~/src/utils/noOp';
import type { SelectProperties } from './Select';
import { buildOptions } from './selectUtils';

const MAX_SELECTIONS = 5;

export const SelectMulti = ({
  id,
  options,
  label,
  onChange = noOp,
  defaultOptionLabel = '-- select an option --',
  maxSelections = MAX_SELECTIONS,
  ...properties
}: SelectProperties): JSX.Element => {
  const [selectedIndicies, setSelectedIndicies] = useState([]);
  const inputReference = useRef(null);

  // Initialize and configure DS Multiselect
  useEffect(() => {
    const ms = new Multiselect(inputReference.current);
    const newSelect = ms.init({ maxSelections, renderTags: true });

    const onUpdate = (): void => {
      const modelSelected = newSelect.getModel().getSelectedIndices();
      setSelectedIndicies([...modelSelected]);
    };

    const EVT_SELECT = 'selectionsupdated';
    newSelect.addEventListener(EVT_SELECT, onUpdate);

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
      <select
        id={id}
        data-testid={id}
        ref={inputReference}
        multiple
        placeholder={`Select up to ${maxSelections}`}
        data-open
        {...properties}
      >
        {buildOptions(options, defaultOptionLabel)}
      </select>
    </div>
  );
};
