import type { CSSProperties } from 'react';
import type { JSXElement } from '../../types/jsx-element';

interface HeroImageProperties {
  image?: string;
  mobileImage?: string;
  altText?: string;
}

type HeroImageStyle = CSSProperties & {
  '--m-hero-image'?: string;
  '--m-hero-mobile-image'?: string;
};

const createBackgroundImageValue = (image: string): string =>
  `url(${JSON.stringify(image)})`;

/**
 * DS pattern: empty `.m-hero__image` with `background-image` (not `<img>`), so
 * `background-size: contain` and aspect ratio control the slot height.
 * https://cfpb.github.io/design-system/patterns/heroes
 */
export const HeroImage = ({
  image,
  mobileImage,
  altText,
}: HeroImageProperties): JSXElement => {
  if (!image && !mobileImage) return null;

  const imageStyle: HeroImageStyle = {};

  if (image) imageStyle['--m-hero-image'] = createBackgroundImageValue(image);
  if (mobileImage) {
    imageStyle['--m-hero-mobile-image'] =
      createBackgroundImageValue(mobileImage);
  }

  return (
    <div className='m-hero__image-wrapper'>
      <div
        className='m-hero__image'
        role='img'
        aria-label={altText}
        style={imageStyle}
      />
    </div>
  );
};
