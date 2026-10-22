import { ButtonHTMLAttributes, MouseEvent, ReactNode } from '../../../node_modules/react';
export interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button contents
     */
    label?: string;
    /**
     * Any children to render within the button. Allows you to wrap any node with button tag
     */
    children?: ReactNode;
    /**
     * What is the button's appearance?
     */
    appearance?: 'primary' | 'secondary' | 'warning';
    /**
     * How large should the button be?
     */
    size?: 'default' | 'full';
    /**
     * Optional click handler
     */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Button should be styled as a link?
     */
    isLink?: boolean;
    /**
     * Name of icon to display left of button text
     */
    iconLeft?: string;
    /**
     * Name of icon to display right of button text
     */
    iconRight?: string;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: import('../../../node_modules/react').ForwardRefExoticComponent<ButtonProperties & import('../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
