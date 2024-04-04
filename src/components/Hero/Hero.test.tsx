import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  it('Renders all elements: heading, subheading, image', () => {
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
      />
    );

    expect(screen.getByText(heading).className).toMatch(/m-hero_heading/g);
    expect(screen.getByText(subheading).className).toMatch(/m-hero_subhead/g);
    expect(screen.getByAltText(imageText).className).toMatch(/m-hero_image/g);
  });

  it('Derives CSS classes for component variations', () => {
    const isJumbo = 'm-hero__jumbo';
    const is5050 = 'm-hero__50-50';
    const isKnockout = 'm-hero__knockout';
    const imageIsPhoto = 'm-hero__overlay';

    render(<Hero isJumbo data-testid={isJumbo} />);
    expect(screen.getByTestId(isJumbo).className).toMatch(isJumbo);

    render(<Hero is5050 data-testid={is5050} />);
    expect(screen.getByTestId(is5050).className).toMatch(is5050);

    render(<Hero isKnockout data-testid={isKnockout} />);
    expect(screen.getByTestId(isKnockout).className).toMatch(isKnockout);

    render(<Hero imageIsPhoto data-testid={imageIsPhoto} />);
    expect(screen.getByTestId(imageIsPhoto).className).toMatch(imageIsPhoto);
  });

  it('Applies direct color settings', () => {
    const textColor = 'orange';
    const backgroundColor = 'purple';
    const wrapperSelector = 'wrapper';
    const textId = 'hero-text';

    render(
      <Hero
        data-testid='wrapper'
        textColor={textColor}
        backgroundColor={backgroundColor}
        heading='test'
      />
    );

    // Background color
    const wrapper = screen.getByTestId(wrapperSelector);
    expect(wrapper.style.backgroundColor).toMatch(backgroundColor);

    // Text color
    const text = screen.getByTestId(textId);
    expect(text.style.color).toMatch(textColor);
  });

  it('Applies heading levels', () => {
    const headingLevel = 2;
    const headingText = 'Heading text';
    const subheadingLevel = 3;
    const subheadingText = 'Subheading text';

    render(
      <Hero
        heading='Heading text'
        headingLevel={`h${headingLevel}`}
        subheading='Subheading text'
        subheadingLevel={`h${subheadingLevel}`}
      />
    );

    // Heading
    const header = screen.getByRole('heading', { level: headingLevel });
    expect(header).toHaveProperty('textContent', headingText);

    // Subheading
    const subheading = screen.getByRole('heading', { level: subheadingLevel });
    expect(subheading).toHaveProperty('textContent', subheadingText);
  });
});
