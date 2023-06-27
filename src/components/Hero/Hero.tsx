import classnames from 'classnames';
import type { HeadingLevel } from '../../types/headingLevel';
import { HeroImage } from './HeroImage';
import './hero.less';
import { useBackgroundImage } from './useBackgroundImage';

interface HeroProperties {
  backgroundColor?: string;
  heading?: string;
  headingLevel?: HeadingLevel;
  image?: string;
  imageAltText?: string;
  imageIsPhoto?: boolean;
  is5050?: boolean;
  isJumbo?: boolean;
  isKnockout?: boolean;
  subheading?: string;
  subheadingLevel?: HeadingLevel;
  textColor?: string;
}

/**
 * https://cfpb.github.io/design-system/patterns/heroes
 */
export default function Hero({
  backgroundColor,
  heading,
  headingLevel = 'h1',
  image,
  imageAltText = 'hero image',
  imageIsPhoto,
  is5050,
  isJumbo,
  isKnockout,
  subheading,
  subheadingLevel,
  textColor
}: HeroProperties): JSX.Element {
  const addWrapperImage = imageIsPhoto || isJumbo || is5050;
  const wrapperReference = useBackgroundImage(image, addWrapperImage);

  const heroStyles = { backgroundColor };
  const textStyles = { color: textColor };
  const heroCnames = ['m-hero'];

  if (isJumbo) heroCnames.push('m-hero__jumbo');
  if (is5050) heroCnames.push('m-hero__50-50');
  if (isKnockout) heroCnames.push('m-hero__knockout');
  if (imageIsPhoto) heroCnames.push('m-hero__overlay');

  return (
    <div className={classnames(heroCnames)} style={heroStyles}>
      <div className='m-hero_wrapper' ref={wrapperReference}>
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
