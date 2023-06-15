import classnames from 'classnames';
import type { HeadingLevel } from '../../types/headingLevel';
import './hero.less';

interface HeroProperties {
  heading?: string;
  subheading?: string;
  image?: string;
  imageAltText?: string;
  backgroundColor?: string;
  textColor?: string;
  headingLevel?: HeadingLevel;
  subheadingLevel?: HeadingLevel;
  isJumbo?: boolean;
  is5050?: boolean;
  knockout?: boolean;
  imageIsPhoto?: boolean;
}

interface HeroImageProperties {
  image?: string;
  altText?: string;
}

const HeroImage = ({
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

export default function Hero({
  heading,
  image,
  imageAltText = 'hero image',
  subheading,
  backgroundColor,
  textColor,
  headingLevel = 'h1',
  subheadingLevel,
  isJumbo,
  is5050,
  knockout,
  imageIsPhoto
}: HeroProperties): JSX.Element {
  const heroStyles = { backgroundColor };
  const textStyles = { color: textColor };
  const heroCnames = ['m-hero'];

  if (isJumbo) heroCnames.push('m-hero__jumbo');
  if (is5050) heroCnames.push('m-hero__50-50');
  if (knockout) heroCnames.push('m-hero__knockout');
  if (imageIsPhoto) heroCnames.push('m-hero__overlay');

  return (
    <div className={classnames(heroCnames)} style={heroStyles}>
      <div className='m-hero_wrapper'>
        <div className='m-hero_text' style={textStyles}>
          <p className={`m-hero_heading ${headingLevel}`}>{heading}</p>
          <p className={`m-hero_subhead ${subheadingLevel ?? ''}`}>
            {subheading}
          </p>
        </div>
        <HeroImage image={image} altText={imageAltText} />
      </div>
    </div>
  );
}
