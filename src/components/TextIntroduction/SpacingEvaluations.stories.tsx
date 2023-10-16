import type { Meta } from '@storybook/react';
import { cloneElement } from 'react';
import Link from '../Link/Link';
import List from '../List/List';
import ListItem from '../List/ListItem';
import './SpaceAdjustments.less';
import { TextIntroduction } from './TextIntroduction';
import placeholders from './testHelpers';

/**
 * Element combinations for spacing evaluation
 */
const meta: Meta<typeof TextIntroduction> = {
  title: 'Components (Verified)/Spacing Evaluations',
  component: TextIntroduction
};

export default meta;

export const V1 = {
  name: 'Heading + Lead paragraph',
  render: (): JSX.Element => (
    <div className='space-evaluation'>
      <h1>{placeholders.heading}</h1>
      <p className='lead-paragraph'>{placeholders.subheading}</p>
    </div>
  )
};

export const V2 = {
  name: 'Heading + Lead paragraph + paragraph',
  render: (): JSX.Element => (
    <div className='space-evaluation'>
      <h1>{placeholders.heading}</h1>
      <p className='lead-paragraph'>{placeholders.subheading}</p>
      <p>{placeholders.description}</p>
    </div>
  )
};

export const V3 = {
  name: 'Heading + Lead paragraph + paragraph + call-to-action',
  render: (): JSX.Element => (
    <div className='space-evaluation'>
      <h1>{placeholders.heading}</h1>
      <p className='lead-paragraph'>{placeholders.subheading}</p>
      <p>{placeholders.description}</p>
      <List isLinks>
        <ListItem>
          {cloneElement(placeholders.callToAction, { type: 'list' })}
        </ListItem>
      </List>
    </div>
  )
};

export const V4 = {
  name: 'Heading + paragraph + call-to-action',
  render: (): JSX.Element => (
    <div className='space-evaluation'>
      <h1>{placeholders.heading}</h1>
      <p>{placeholders.description}</p>
      <List isLinks>
        <ListItem>
          {cloneElement(placeholders.callToAction, { type: 'list' })}
        </ListItem>
      </List>
    </div>
  )
};

export const V5 = {
  name: 'Heading + Lead paragraph + call-to-action',
  render: (): JSX.Element => (
    <div className='space-evaluation'>
      <h1>{placeholders.heading}</h1>
      <p className='lead-paragraph'>{placeholders.subheading}</p>
      <List isLinks>
        <ListItem>
          <Link type='list' href='/'>
            {cloneElement(placeholders.callToAction, { type: 'list' })}
          </Link>
        </ListItem>
      </List>
    </div>
  )
};

export const V6 = {
  name: 'Heading 1 + Lead paragraph + Heading 4 + List links/Call-to-action links',
  render: (): JSX.Element => (
    <div className='space-evaluation'>
      <h1>{placeholders.heading}</h1>
      <p className='lead-paragraph'>{placeholders.subheading}</p>
      <h4>This is an additional section header level 4</h4>
      <List isLinks>
        <ListItem>
          <Link type='list' href='/'>
            {cloneElement(placeholders.callToAction, { type: 'list' })}
          </Link>
        </ListItem>
        <ListItem>
          <Link type='list' href='/'>
            {cloneElement(placeholders.callToAction, { type: 'list' })}
          </Link>
        </ListItem>
      </List>
    </div>
  )
};

export const V7 = {
  name: 'Heading 1 + Lead paragraph + Paragraph + Heading 4 + List links/Call-to-action links',
  render: (): JSX.Element => (
    <div className='space-evaluation'>
      <h1>{placeholders.heading}</h1>
      <p className='lead-paragraph'>{placeholders.subheading}</p>
      <p>{placeholders.description}</p>
      <h4>This is an additional section header level 4</h4>
      <List isLinks>
        <ListItem>
          <Link type='list' href='/'>
            {cloneElement(placeholders.callToAction, { type: 'list' })}
          </Link>
        </ListItem>
        <ListItem>
          <Link type='list' href='/'>
            {cloneElement(placeholders.callToAction, { type: 'list' })}
          </Link>
        </ListItem>
      </List>
    </div>
  )
};
