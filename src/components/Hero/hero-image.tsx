import type { JSXElement } from '../../types/jsx-element';

interface HeroImageProperties {
  image?: string;
  altText?: string;
}

/**
 * DS pattern: empty `.m-hero__image` with `background-image` (not `<img>`), so
 * `background-size: contain` and aspect ratio control the slot height.
 * https://cfpb.github.io/design-system/patterns/heroes
 */
export const HeroImage = ({
  image,
  altText,
}: HeroImageProperties): JSXElement => {
  if (!image) return null;

  return (
    <div className='m-hero__image-wrapper'>
      <div
        className='m-hero__image'
        role='img'
        aria-label={altText}
        style={{
          backgroundImage: `url(${JSON.stringify(image)})`,
        }}
      />
    </div>
  );
};
