import type { Ref } from 'react';
import { useEffect, useRef } from 'react';

/**
 * Applies photograph hero background-image rules to `.m-hero__wrapper` per the DS.
 * Only runs for `m-hero--overlay`; does not clear other inline styles (e.g. backgroundColor).
 *
 * @param image Image URL
 * @param shouldAddPhotoBackground When true, set wrapper background-image (tablet+)
 * @param backgroundColor Optional wrapper background color to preserve with photo styles
 * @returns Ref that should be attached to the wrapper `<div>`
 */
export const useBackgroundImage = (
  image?: string,
  shouldAddPhotoBackground?: boolean,
  backgroundColor?: string,
): Ref<HTMLDivElement> => {
  const imageWrapperReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = imageWrapperReference.current;
    if (!element) return;

    if (!shouldAddPhotoBackground || !image) {
      element.style.removeProperty('background-image');
      return;
    }

    const url = JSON.stringify(image);
    const colorRule = backgroundColor
      ? `background-color: ${backgroundColor};`
      : '';
    element.style.cssText = `${colorRule}
      background-image: url(${url});
      background-image: -webkit-image-set(
        url(${url}) 1x,
        url(${url}) 2x
      );
      background-image: image-set(
        url(${url}) 1x,
        url(${url}) 2x
      );`;
  }, [image, shouldAddPhotoBackground, backgroundColor]);

  return imageWrapperReference;
};
