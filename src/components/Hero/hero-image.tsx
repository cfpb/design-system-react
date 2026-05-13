import type { JSXElement } from '../../types/jsx-element';

interface HeroImageProperties {
  image?: string;
  altText?: string;
}

export const HeroImage = ({
  image,
  altText,
}: HeroImageProperties): JSXElement => {
  if (!image) return null;

  return (
    <div className='m-hero__image-wrapper'>
      <img src={image} alt={altText} className='m-hero__image' />
    </div>
  );
};
