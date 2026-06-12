import { Ref } from '../../../node_modules/react';
/**
 * Applies photograph hero background-image rules to `.m-hero__wrapper` per the DS.
 * Only runs for `m-hero--overlay`; does not clear other inline styles (e.g. backgroundColor).
 *
 * @param image Image URL
 * @param shouldAddPhotoBackground When true, set wrapper background-image (tablet+)
 * @param backgroundColor Optional wrapper background color to preserve with photo styles
 * @returns Ref that should be attached to the wrapper `<div>`
 */
export declare const useBackgroundImage: (image?: string, shouldAddPhotoBackground?: boolean, backgroundColor?: string) => Ref<HTMLDivElement>;
