import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from './hero';

describe('Hero', () => {
  it('renders heading, subheading, and image with DS classes', () => {
    const heading = 'heading';
    const subheading = 'subheading';
    const image = '../../assets/images/credit-card-hero.png';
    const imageText = 'image text';

    render(
      <Hero
        heading={heading}
        subheading={subheading}
        image={image}
        imageAltText={imageText}
      />,
    );

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveClass('m-hero__heading');
    expect(headingElement).toHaveTextContent(heading);

    const subheadingElement = screen.getByText(subheading);
    expect(subheadingElement.tagName).toBe('P');
    expect(subheadingElement).toHaveClass('m-hero__subhead');

    expect(screen.getByRole('img', { name: imageText })).toHaveClass(
      'm-hero__image',
    );
  });

  it('derives CSS classes for component variations', () => {
    const knockoutClass = 'm-hero--knockout';
    const imageIsPhoto = 'm-hero--overlay';

    render(<Hero isKnockout data-testid={knockoutClass} />);
    expect(screen.getByTestId(knockoutClass)).toHaveClass(knockoutClass);

    render(
      <Hero
        imageIsPhoto
        mobileImage='/mobile-photo.jpg'
        data-testid={imageIsPhoto}
      />,
    );
    expect(screen.getByTestId(imageIsPhoto)).toHaveClass(imageIsPhoto);
  });

  it('applies background color on the section for standard heroes', () => {
    render(
      <Hero backgroundColor='#800080' heading='test' data-testid='hero' />,
    );

    expect(screen.getByTestId('hero')).toHaveStyle({
      backgroundColor: 'rgb(128, 0, 128)',
    });
    expect(screen.getByTestId('hero-wrapper')).not.toHaveAttribute('style');
  });

  it('applies background color on the section for knockout heroes', () => {
    render(
      <Hero
        isKnockout
        backgroundColor='#207676'
        heading='test'
        data-testid='hero'
      />,
    );

    expect(screen.getByTestId('hero')).toHaveStyle({
      backgroundColor: '#207676',
    });
  });

  it('does not set inline text color (knockout uses DS styles)', () => {
    render(
      <Hero isKnockout heading='test' subheading='sub' data-testid='hero' />,
    );

    expect(screen.getByTestId('hero-text')).not.toHaveAttribute('style');
  });

  it('uses the mobile image in the image slot for photo heroes', () => {
    render(
      <Hero
        imageIsPhoto
        image='/desktop-photo.png'
        mobileImage='/mobile-photo.jpg'
        imageAltText='photo hero'
      />,
    );

    const heroImage = screen.getByRole('img', { name: 'photo hero' });
    expect(heroImage.style.getPropertyValue('--m-hero-image')).toBe(
      'url("/desktop-photo.png")',
    );
    expect(heroImage.style.getPropertyValue('--m-hero-mobile-image')).toBe(
      'url("/mobile-photo.jpg")',
    );
  });

  it('supports a mobile image in the image slot for non-photo heroes', () => {
    render(
      <Hero
        image='/illustration.png'
        mobileImage='/mobile-photo.jpg'
        imageAltText='illustration hero'
      />,
    );

    const heroImage = screen.getByRole('img', { name: 'illustration hero' });
    expect(heroImage.style.getPropertyValue('--m-hero-image')).toBe(
      'url("/illustration.png")',
    );
    expect(heroImage.style.getPropertyValue('--m-hero-mobile-image')).toBe(
      'url("/mobile-photo.jpg")',
    );
  });

  it('requires a mobile image for photo heroes', () => {
    expect(() =>
      render(
        // @ts-expect-error mobileImage is required when imageIsPhoto is true.
        <Hero
          imageIsPhoto
          image='/desktop-photo.png'
          imageAltText='photo hero'
        />,
      ),
    ).toThrow('Hero requires mobileImage when imageIsPhoto is true.');
  });
});
