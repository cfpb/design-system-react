import { FC, SVGProps } from '../../node_modules/react';
/**
 * Dynamically import an SVG as a React Component
 *
 * @param fileName Canonical name of icon
 * @returns ReactComponent | null
 */
export declare const useIconSvg: (fileName: string) => FC<SVGProps<SVGSVGElement>> | null;
