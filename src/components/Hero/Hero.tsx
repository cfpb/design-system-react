import classnames from 'classnames';
import type { HeadingLevel } from '../../types/headingLevel';
import type { HeadingType } from '../Headings/Heading';
import { Heading } from '../Headings/Heading';
import { HeroImage } from './HeroImage';
import './hero.less';
import { useBackgroundImage } from './useBackgroundImage';

interface HeroProperties extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  heading?: React.ReactNode;
  headingLevel?: HeadingLevel;
  image?: string;
  imageAltText?: string;
  imageIsPhoto?: boolean;
  is5050?: boolean;
  isJumbo?: boolean;
  isKnockout?: boolean;
  subheading?: React.ReactNode;
  subheadingLevel?: HeadingLevel | 'p';
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
  subheadingLevel = 'p',
  textColor,
  className,
  ...properties
}: HeroProperties): JSX.Element {
  const addWrapperImage = imageIsPhoto ?? isJumbo ?? is5050;
  const wrapperReference = useBackgroundImage(image, addWrapperImage);

  const heroStyles = { backgroundColor };
  const textStyles = { color: textColor };
  const heroCnames = ['m-hero', className];

  if (isJumbo) heroCnames.push('m-hero__jumbo');
  if (is5050) heroCnames.push('m-hero__50-50');
  if (isKnockout) heroCnames.push('m-hero__knockout');
  if (imageIsPhoto) heroCnames.push('m-hero__overlay');

  // NOTE: This is a mapping of the Hero component's HeadingLevel to the Heading component's
  // HeadingType but we could also use the HeadingType directly in the Hero component with some
  // refactoring of the Heading component or run a regex replace on the HeadingLevel in the Hero
  const HeadingLevelToHeadingType: Record<string, HeadingType> = {
    h1: '1',
    h2: '2',
    h3: '3',
    h4: '4',
    h5: '5',
    display: 'display',
    eyebrow: 'eyebrow',
    slug: 'slug'
  };

  return (
    <div className={classnames(heroCnames)} style={heroStyles} {...properties}>
      <div className='m-hero_wrapper' ref={wrapperReference}>
        <div className='m-hero_text' style={textStyles} data-testid='hero-text'>
          <Heading
            className='m-hero_heading'
            data-testid='hero-heading'
            type={HeadingLevelToHeadingType[headingLevel]}
          >
            {heading}
          </Heading>
          {subheadingLevel === 'p' ? (
            <p className='m-hero_subhead'>{subheading}</p>
          ) : (
            <Heading
              className='m-hero_subhead'
              data-testid='hero-subheading'
              type={HeadingLevelToHeadingType[subheadingLevel]}
            >
              {subheading}
            </Heading>
          )}
        </div>
        <HeroImage image={image} altText={imageAltText} />
      </div>
    </div>
  );
}
