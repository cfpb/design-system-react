import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
import { JSXElement } from '../../types/jsx-element';
export type AlertFieldLevelType = 'error' | 'info' | 'success' | 'warning';
export declare const MapTypeToIconName: {
    info: string;
    error: string;
    success: string;
    warning: string;
};
export interface AlertFieldLevelProperties extends HTMLAttributes<HTMLDivElement> {
    status?: AlertFieldLevelType;
    message: ReactNode;
    isVisible?: boolean;
}
export declare const AlertFieldLevel: ({ status, message, isVisible, ...properties }: AlertFieldLevelProperties) => JSXElement;
