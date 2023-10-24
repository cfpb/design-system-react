/* Potential improvement to DSR component */

import { HelperText } from '~/src/components/HelperText/HelperText';
import type { TextInputProperties } from '~/src/components/TextInput/TextInput';
import { Label, TextInput } from '~/src/index';

interface LIProperties extends TextInputProperties {
  label: JSX.Element | string;
  id: string;
  helperText?: string;
}

export const DSRLabeledInput = ({
  label,
  id,
  helperText,
  ...others
}: LIProperties): JSX.Element => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    {helperText ? <HelperText>{helperText}</HelperText> : null}
    <TextInput width='full' {...{ id, ...others }} />
  </div>
);
