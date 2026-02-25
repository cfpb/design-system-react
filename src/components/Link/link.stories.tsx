import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserRouter } from 'react-router';
import { expect, within } from 'storybook/test';
import { Heading, Link, List, ListLink } from '~/src/index';

const meta: Meta<typeof Link> = {
  title: 'Components (Verified)/Links',
  tags: ['autodocs'],
  component: Link,
};

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultArguments = {
  args: {
    href: '#',
    children: 'Link Text',
  },
};

export const Inline: Story = {
  render: () => (
    <p>
      Here&apos;s the default <Link href='/#' label='inline link' /> style.
    </p>
  ),
};

export const Standalone: Story = {
  render: (arguments_) => (
    <Link {...arguments_} href='/#' isJump label='Standalone link' />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: /standalone link/i });
    expect(link).toHaveAttribute('href', '/#');
  },
};

export const WithIcon: Story = {
  name: 'With icon',
  args: {
    ...DefaultArguments.args,
  },
  render: () => (
    <>
      <Heading type='4'>Inline</Heading>
      <p>
        The document icon should emphasize a link that contains a{' '}
        <Link
          href={DefaultArguments.args.href}
          label='file or document'
          iconRight='download'
        />
        . The external link icon is used to emphasize a link to a{' '}
        <Link
          href={DefaultArguments.args.href}
          label='non-CFPB webpage'
          iconRight='external-link'
        />
        .
      </p>
      <Heading type='4'>Standalone</Heading>
      <p>
        <Link
          isJump
          href='https://www.example.com'
          iconLeft='left'
          label='Go back'
        />
      </p>
      <p>
        <Link
          isJump
          href='https://www.example.com'
          label='Continue'
          iconRight='right'
        />
      </p>
      <p>
        <Link
          isJump
          href='https://www.example.com'
          label='External link'
          iconRight='external-link'
        />
      </p>
      <p>
        <Link
          isJump
          href='https://www.example.com'
          label='Document or file'
          iconRight='document'
        />
      </p>
    </>
  ),
};

export const Listlink: Story = {
  name: 'List',
  args: {
    ...DefaultArguments.args,
  },
  render: () => (
    <List isLinks>
      <ListLink href='/#' label='List item 1' />
      <ListLink href='/#' label='List item 2' />
      <ListLink href='/#' label='List item 3' />
    </List>
  ),
};

export const Destructive: Story = {
  args: {
    ...DefaultArguments.args,
  },
  render: () => <Link href='/#' type='destructive' label='Destructive link' />,
};

export const LinkWithReactRouterLink: Story = {
  name: 'Link using React Router Link',
  parameters: {
    docs: {
      description: {
        story:
          'See [React Router Link docs](https://reactrouter.com/api/components/Link) for usage information',
      },
    },
  },
  render: () => (
    <BrowserRouter>
      <Link href='/#' label='Link using React Router Link' isRouterLink />
    </BrowserRouter>
  ),
};
