import type { JSXElement } from '../../types/jsxElement';

export interface ComponentTemplateProperties {
  /**
   * Label text for the component.
   */
  label: string;
  /**
   * Optional helper text shown below the label.
   */
  helperText?: string;
}

/**
 * Copy the component description from the CFPB Design System page for the component in the component file JSDoc block (autodocs uses it).
 * Add the link to the component's CFPB Design System documentation page below
 *
 * Source: https://cfpb.github.io/design-system/components/[Component-Name]
 */
export default function Component({
  label,
  helperText
}: ComponentTemplateProperties): JSXElement {
  return (
    <div className='component-template'>
      <label className='component-template__label'>{label}</label>
      {helperText ? (
        <p className='component-template__helper-text'>{helperText}</p>
      ) : null}
    </div>
  );
}
