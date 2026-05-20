import classnames from 'classnames';
import { JSX } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import type { HeadingLevel } from '../../types/heading-level';
import type { HeadingType } from '../Headings/heading';
import { Heading } from '../Headings/heading';
import { HeroImage } from './hero-image';
import './hero.scss';
import { useBackgroundImage } from './use-background-image';

interface HeroProperties extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  heading?: ReactNode;
  headingLevel?: HeadingLevel;
  image?: string;
  imageAltText?: string;
  imageIsPhoto?: boolean;
  isKnockout?: boolean;
  subheading?: ReactNode;
  subheadingLevel?: HeadingLevel | 'p';
  textColor?: string;
}

/**
 * https://cfpb.github.io/design-system/patterns/heroes
 *
 * The Jumbo and 50/50 hero variants, included in the CFPB Design System,
 * and used on the CF.gov homepage are not included by this component.
 *
 * The implementation of the hero on https://www.consumerfinance.gov/es/
 * uses a combination of Jumbo and 50/50 hero variants including some tweaks in
 * wagtail.
 */
export default function Hero({
  backgroundColor,
  heading,
  headingLevel = 'h1',
  image,
  imageAltText = 'hero image',
  imageIsPhoto,
  isKnockout,
  subheading,
  subheadingLevel = 'p',
  textColor,
  className,
  ...properties
}: HeroProperties): JSX.Element {
  const wrapperReference = useBackgroundImage(image, Boolean(imageIsPhoto));

  const heroStyles = { backgroundColor };
  const textStyles = { color: textColor };
  const heroCnames = ['m-hero', className];

  if (isKnockout) heroCnames.push('m-hero--knockout');
  if (imageIsPhoto) heroCnames.push('m-hero--overlay');

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
    slug: 'slug',
  };

  return (
    <div className={classnames(heroCnames)} style={heroStyles} {...properties}>
      <div className='m-hero__wrapper' ref={wrapperReference}>
        <div
          className='m-hero__text'
          style={textStyles}
          data-testid='hero-text'
        >
          <Heading
            className='m-hero__heading'
            data-testid='hero-heading'
            type={HeadingLevelToHeadingType[headingLevel]}
          >
            {heading}
          </Heading>
          {subheadingLevel === 'p' ? (
            <p className='m-hero__subhead'>{subheading}</p>
          ) : (
            <Heading
              className='m-hero__subhead'
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
