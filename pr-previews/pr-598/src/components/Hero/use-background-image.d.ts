import { Ref } from '../../../node_modules/react';
/**
 * Add inline styles which apply a background-image to the referenced <div>
 *
 * @param image Image URL
 * @param shoudAddStyles Flag to indicate that inline styles should be included
 * @returns Ref that should be attached to the wrapper <div>
 */
export declare const useBackgroundImage: (image?: string, shoudAddStyles?: boolean) => Ref<HTMLDivElement>;
