import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import type { JSXElement } from "../../types/jsx-element";
import { DSRContext, Heading, Link, List, ListLink, type BaseLinkProperties } from '~/src/index';

const meta: Meta<typeof Link> = {
  title: 'Components (Verified)/Links',
  tags: ['autodocs'],
  component: Link,
  excludeStories: ['CustomLinkComponent']
};

export default meta;

type Story = StoryObj<typeof meta>;

const DefaultArguments = {
  args: {
    to: '#',
    children: 'Link Text',
  },
};

export const Inline: Story = {
  render: () => (
    <p>
      Here&apos;s the default <Link to='/#' label='inline link' /> style.
    </p>
  ),
};

export const Standalone: Story = {
  render: (arguments_) => (
    <Link {...arguments_} to='/#' isJump label='Standalone link' />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: /standalone link/i });
    await expect(link).toHaveAttribute('to', '/#');
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
          to={DefaultArguments.args.to}
          label='file or document'
          iconRight='download'
        />
        . The external link icon is used to emphasize a link to a{' '}
        <Link
          to={DefaultArguments.args.to}
          label='non-CFPB webpage'
          iconRight='external-link'
        />
        .
      </p>
      <Heading type='4'>Standalone</Heading>
      <p>
        <Link
          isJump
          to='https://www.example.com'
          iconLeft='left'
          label='Go back'
        />
      </p>
      <p>
        <Link
          isJump
          to='https://www.example.com'
          label='Continue'
          iconRight='right'
        />
      </p>
      <p>
        <Link
          isJump
          to='https://www.example.com'
          label='External link'
          iconRight='external-link'
        />
      </p>
      <p>
        <Link
          isJump
          to='https://www.example.com'
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
      <ListLink to='/#' label='List item 1' />
      <ListLink to='/#' label='List item 2' />
      <ListLink to='/#' label='List item 3' />
    </List>
  ),
};

export const Destructive: Story = {
  args: {
    ...DefaultArguments.args,
  },
  render: () => <Link to='/#' type='destructive' label='Destructive link' />,
};

const CustomLinkComponent = ({
  to,
  children,
  ...others
}: BaseLinkProperties): JSXElement | null => {
  return (
    <a href={to} {...others} data-link-component='custom'>
      {children}
    </a>
  );
};

/**
 * You can configure the DSR to use a router library's link component by wrapping your app
 * in the DSRContext provider and setting a `LinkComponent` value. 
 * Your custom link component will be output instead of the default anchor element 
 * everywhere the DSR's Link component is used.
 *  
 * Example usage:
 * 
 *  \<DSRContext value={{LinkComponent: YourRouterLinkComponent}} >
 *    App content
 *  \</DSRContext>
 */
export const LinkWithCustomLinkComponent: Story = {
  name: 'Link using custom component',
  decorators: [
    (Story) => (
      <DSRContext value={{ LinkComponent: CustomLinkComponent }}>
        <Story />
      </DSRContext>
    ),
  ],
  render: () => (
      <Link to='/#' label='Link using custom link component' />
  ),
};


