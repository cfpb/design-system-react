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
      element.style.removeProperty('--m-hero-wrapper-image');
      return;
    }

    const url = `url(${JSON.stringify(image)})`;
    element.style.setProperty('--m-hero-wrapper-image', url);

    if (backgroundColor) {
      element.style.backgroundColor = backgroundColor;
    } else {
      element.style.removeProperty('background-color');
    }
  }, [image, shouldAddPhotoBackground, backgroundColor]);

  return imageWrapperReference;
};
