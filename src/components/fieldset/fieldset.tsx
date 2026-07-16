import classNames from 'classnames';
import type { ReactNode } from 'react';
import { JSX } from 'react';

import './fieldset.scss';

export interface FieldsetProperties {
  /** Legend text displayed at the top of the fieldset */
  legend: ReactNode;
  /** Optional block helper text displayed below the legend (uses a-label__helper--block) */
  legendHelperText?: ReactNode;
  /** Form controls such as Checkbox or RadioButton components */
  children: ReactNode;
  /** Display options inline (same line) instead of stacked vertically */
  isInline?: boolean;
  /** Additional CSS classes applied to the fieldset element */
  className?: string;
}

/**
 * A fieldset groups several form controls (checkboxes, radio buttons) with a legend and optional block helper text.
 *
 * Source: https://cfpb.github.io/design-system/components/fieldsets
 */
export const Fieldset = ({
  legend,
  legendHelperText,
  children,
  isInline = false,
  className,
  ...properties
}: FieldsetProperties & JSX.IntrinsicElements['fieldset']): JSX.Element => (
  <fieldset
    className={classNames(
      'o-form__fieldset',
      isInline && 'o-form__fieldset--inline',
      className,
    )}
    data-testid='fieldset'
    {...properties}
  >
    <legend className='h4'>
      {legend}
      {legendHelperText && (
        <small className='a-label__helper a-label__helper--block'>
          {legendHelperText}
        </small>
      )}
    </legend>
    {isInline ? (
      <div className='o-form__fieldset-options'>{children}</div>
    ) : (
      children
    )}
  </fieldset>
);

export default Fieldset;
