import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { cloneElement } from 'react';
import { List, ListItem, TextIntroduction } from '~/src/index';
import {
  callToAction,
  callToActionText,
  description,
  heading,
  subheading
} from './testHelpers';

describe('<TextIntroduction />', () => {
  it('renders all elements when provided', () => {
    render(
      <TextIntroduction>
        <TextIntroduction.Heading>{heading}</TextIntroduction.Heading>
        <TextIntroduction.Subheading>{subheading}</TextIntroduction.Subheading>
        <TextIntroduction.Description>
          {description}
        </TextIntroduction.Description>
        <List isLinks>
          <ListItem>{cloneElement(callToAction, { type: 'list' })}</ListItem>
        </List>
      </TextIntroduction>
    );
    expect(screen.getByText(heading)).toBeInTheDocument();
    expect(screen.getByText(subheading)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(callToActionText)).toBeInTheDocument();
  });
});
