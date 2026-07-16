import { ReactElement, ReactNode, RefObject, JSX } from '../../../node_modules/react';
interface RadioProperties {
    id: string;
    label: ReactNode;
    className?: string;
    helperText?: string;
    inputRef?: RefObject<HTMLInputElement> | string | ((instance: HTMLInputElement | null) => void) | null | undefined;
    disabled?: boolean;
    isLarge?: boolean;
    name?: string;
    labelClassName?: string;
    /** Removes/Adds 'label__heading' class to the Label. When true, uses inline label style. */
    isLabelInline?: boolean;
}
export declare const RadioButton: ({ id, name, helperText, className, disabled, isLarge, labelClassName, isLabelInline, label, inputRef, ...properties }: JSX.IntrinsicElements["input"] & RadioProperties) => ReactElement;
export default RadioButton;
