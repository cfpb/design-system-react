import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Header } from '~/src/index';
import { ExampleLinks } from './responsive-menu';
import Link from '../Link/link';
import React from 'react';

const meta: Meta<typeof Header> = {
  title: 'Components (Draft)/Headers',
  tags: ['autodocs'],
  component: Header,
  argTypes: {
    lang: {
      control: 'select',
      options: ['en', 'es'],
      description: 'Logo language (English or Spanish)',
    },
  },
  parameters: {
    sbNestedCanvasPadding: 'flush',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Header',
  render: (properties) => <Header {...properties} />,
  args: {
    links: ExampleLinks,
    lang: 'en',
  },
};

export const Basic: Story = {
  render: (properties) => <Header {...properties} />,
  args: {
    links: [],
  },
};

export const LinksWithIcon: Story = {
  render: (properties) => <Header {...properties} />,
  args: {
    links: [
      <Link key='home' href='/' label='Home' />,
      <Link
        key='filing'
        className='nav-item'
        href='/filing'
        label='Filing'
      />,
      <Link
        key='profile'
        className='nav-item'
        href='/profile'
        label='User guide'
        iconRight='document'
      />,
      <Button
        appearance={'secondary'}
        label='Log out'
        onClick={(): void => {
          /* Empty*/
        }}
        key='logout'
      />,
    ],
  },
};

