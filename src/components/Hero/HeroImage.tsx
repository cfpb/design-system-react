interface HeroImageProperties {
  image?: string;
  altText?: string;
}
export const HeroImage = ({
  image,
  altText
}: HeroImageProperties): JSX.Element | null => {
  if (!image) return null;

  return (
    <div className='m-hero_image-wrapper'>
      <img src={image} alt={altText} className='m-hero_image' />
    </div>
  );
};
