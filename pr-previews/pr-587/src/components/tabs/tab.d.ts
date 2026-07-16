import { HTMLAttributes, ReactNode, MouseEvent } from '../../../node_modules/react';
import { JSXElement } from '../../types/jsx-element';
import { ButtonProperties } from '../buttons/button';
export interface TabProperties extends Omit<ButtonProperties, 'appearance' | 'size' | 'isLink'> {
    /**
     * Id for the tab. Allows it to be associated with its content panel.
     */
    id: string;
    /**
     * Any additional classes for the tab
     */
    className?: string;
    /**
     * Whether this is the active tab
     */
    isActive?: boolean;
    /**
     * Any children to render within the tab. Allows you to wrap any node with tab tag
     */
    children?: ReactNode;
    /**
     * Optional click handler
     */
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export declare const Tab: ({ id, className, isActive, onClick, children, ...properties }: TabProperties) => JSXElement;
export interface TabListProperties extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}
export declare const TabList: ({ className, children, ...properties }: TabListProperties) => JSXElement;
export interface TabPanelProperties extends HTMLAttributes<HTMLDivElement> {
    id: string;
    className?: string;
    children?: ReactNode;
}
export declare const TabPanel: ({ id, className, children, ...properties }: TabPanelProperties) => JSXElement;
