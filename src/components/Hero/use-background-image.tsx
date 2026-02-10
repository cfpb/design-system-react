import type { Ref } from 'react';
import { useEffect, useRef } from 'react';

/**
 * Add inline styles which apply a background-image to the referenced <div>
 *
 * @param image Image URL
 * @param shoudAddStyles Flag to indicate that inline styles should be included
 * @returns Ref that should be attached to the wrapper <div>
 */
export const useBackgroundImage = (
  image?: string,
  shoudAddStyles?: boolean
): Ref<HTMLDivElement> => {
  const imageWrapperReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shoudAddStyles || !image || !imageWrapperReference.current) {
      imageWrapperReference.current?.setAttribute('style', '');
      return;
    }

    imageWrapperReference.current.setAttribute(
      'style',
      `background-image: url(${image});
       background-image: -webkit-image-set(
        url(${image}) 1x,
        url(${image}) 2x
      );
      background-image: image-set(
        url(${image}) 1x,
        url(${image}) 2x
      );`
    );
  }, [imageWrapperReference, image, shoudAddStyles]);

  return imageWrapperReference;
};
