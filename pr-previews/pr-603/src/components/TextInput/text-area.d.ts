import { TextInputStatusType } from './text-input-status';
export interface TextAreaType {
    id: string;
    onChange?: (value: string) => void;
    className?: string;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    placeholder?: string;
    status?: TextInputStatusType;
}
/**
 * Source: <a href='https://cfpb.github.io/design-system/components/text-inputs#text-area-input-1' target='_blank'> https://cfpb.github.io/design-system/components/text-inputs#text-area-input-1</a>
 */
export declare const TextArea: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<import('../../../node_modules/react').ClassAttributes<HTMLTextAreaElement> & import('../../../node_modules/react').TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaType, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
