import { JSX, ComponentPropsWithoutRef, ReactNode } from '../../../node_modules/react';
import { TextInputStatusType } from './text-input-status';
type TextInputReference = ReactNode;
export type InputType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
interface RequiredTextInputProperties {
    id: string;
    name: string;
}
interface CustomTextInputProperties extends ComponentPropsWithoutRef<'input'> {
    className?: string;
    inputProps?: JSX.IntrinsicElements['input'];
    inputRef?: TextInputReference;
    isDisabled?: boolean;
    status?: TextInputStatusType;
    type?: InputType;
    isFullWidth?: boolean;
}
export type OptionalTextInputProperties = CustomTextInputProperties;
export type TextInputProperties = OptionalTextInputProperties & RequiredTextInputProperties;
/**
 * Source: <a href='https://cfpb.github.io/design-system/components/text-inputs' target='_blank'> https://cfpb.github.io/design-system/components/text-inputs</a>
 */
export declare const TextInput: import('../../../node_modules/react').ForwardRefExoticComponent<CustomTextInputProperties & RequiredTextInputProperties & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export {};
