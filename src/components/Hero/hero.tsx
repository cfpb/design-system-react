import classnames from 'classnames';
import { JSX } from 'react';
import type { HTMLAttributes } from 'react';
import { Heading } from '../Headings/heading';
import { HeroImage } from './hero-image';
import './hero.scss';
import { useBackgroundImage } from './use-background-image';

export interface HeroProperties
  extends Omit<HTMLAttributes<HTMLElement>, 'children' | 'color'> {
  /** CSS background color (wrapper for standard heroes; section for knockout). */
  backgroundColor?: string;
  /** Hero heading copy (DS: 41 chars max for one line at largest breakpoint). */
  heading?: string;
  /** Illustration or photo URL for `.m-hero__image` / overlay wrapper background. */
  image?: string;
  /** Accessible name for the decorative hero image. */
  imageAltText?: string;
  /** Photo hero (`m-hero--overlay`): image on the wrapper at tablet+, in the image slot on mobile. */
  imageIsPhoto?: boolean;
  /** Dark background with light text (`m-hero--knockout`). Text color comes from DS styles. */
  isKnockout?: boolean;
  /** Lead copy under the heading (DS character counts vary by heading line count). */
  subheading?: string;
}

/**
 * CFPB hero pattern (illustration, photograph, knockout).
 *
 * Jumbo and 50/50 variants are not included — see
 * https://cfpb.github.io/design-system/patterns/heroes
 *
 * Heading uses DS `Heading` type 1 with `m-hero__heading`; subheading is `p.m-hero__subhead`.
 * Responsive type sizes are handled by DS CSS, not by configurable heading levels.
 */
export default function Hero({
  backgroundColor,
  heading,
  image,
  imageAltText = 'hero image',
  imageIsPhoto,
  isKnockout,
  subheading,
  className,
  ...properties
}: HeroProperties): JSX.Element {
  const wrapperBackgroundColor = isKnockout ? undefined : backgroundColor;

  const wrapperReference = useBackgroundImage(
    image,
    Boolean(imageIsPhoto),
    wrapperBackgroundColor,
  );

  const heroCnames = ['m-hero', className];

  if (isKnockout) heroCnames.push('m-hero--knockout');
  if (imageIsPhoto) heroCnames.push('m-hero--overlay');

  const heroStyle =
    isKnockout && backgroundColor ? { backgroundColor } : undefined;

  const usesWrapperBackgroundColor =
    Boolean(wrapperBackgroundColor) && !imageIsPhoto;
  const wrapperStyle = usesWrapperBackgroundColor
    ? { backgroundColor: wrapperBackgroundColor }
    : undefined;

  return (
    <section
      className={classnames(heroCnames)}
      style={heroStyle}
      {...properties}
    >
      <div
        className='m-hero__wrapper'
        data-testid='hero-wrapper'
        ref={wrapperReference}
        style={wrapperStyle}
      >
        <div className='m-hero__text' data-testid='hero-text'>
          {heading ? (
            <Heading
              className='m-hero__heading'
              data-testid='hero-heading'
              type='1'
            >
              {heading}
            </Heading>
          ) : null}
          {subheading ? (
            <p className='m-hero__subhead' data-testid='hero-subheading'>
              {subheading}
            </p>
          ) : null}
        </div>
        <HeroImage image={image} altText={imageAltText} />
      </div>
    </section>
  );
}
