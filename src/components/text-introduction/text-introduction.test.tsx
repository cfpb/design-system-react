import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import List from '../list/list';
import {
  callToAction,
  callToActionText,
  description,
  heading,
  placeholders,
  subheading,
} from './test-helpers';
import { TextIntroduction } from './text-introduction';

describe('<TextIntroduction />', () => {
  it('renders all elements when provided', () => {
    render(<TextIntroduction {...placeholders} />);
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(subheading)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText('Call-to-action link')).toBeInTheDocument();
  });
});

describe('<TextIntroduction.Container />', () => {
  it('renders all elements when provided', () => {
    render(
      <TextIntroduction.Container>
        <TextIntroduction.Heading>{heading}</TextIntroduction.Heading>
        <TextIntroduction.Subheading>{subheading}</TextIntroduction.Subheading>
        <TextIntroduction.Description>
          {description}
        </TextIntroduction.Description>
        <List isLinks>{callToAction}</List>
      </TextIntroduction.Container>,
    );
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(subheading)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(callToActionText)).toBeInTheDocument();
  });
});
