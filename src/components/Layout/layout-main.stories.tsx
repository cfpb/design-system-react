import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactElement } from 'react';
import { Layout } from '~/src/index';
import type { LayoutMainProperties } from './layout-main';

const meta: Meta<typeof Layout.Main> = {
  title: 'Components (Draft)/Layout/Main',
  tags: ['autodocs'],
  component: Layout.Main,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS Layout.Main component

Container for all of the content within a Layout. Used to configure the column structure ('layout') and whether the sidebar bleeds to the window edge ('bleedbar').


<ul>
<li>layout<ul>
<li>[1-3](https://cfpb.github.io/design-system/development/main-content-and-sidebars#left-hand-sidebar-layout)</li>
<li>[2-1](https://cfpb.github.io/design-system/development/main-content-and-sidebars#right-hand-sidebar-layout)</li>
</ul></li>

</ul>


Source: https://cfpb.github.io/design-system/development/main-content-and-sidebars

### Usage

import Layout from './Layout<br/>

< Layout.Main ><br/>
&nbsp;&nbsp;< Hero / ><br/>
&nbsp;&nbsp;< Layout.Wrapper ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;< Layout.Content ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Main Content<br/>
&nbsp;&nbsp;&nbsp;&nbsp;< /Layout.Content ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;< Layout.Sidebar ><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sidebar Content<br/>
&nbsp;&nbsp;&nbsp;&nbsp;< /Layout.Sidebar ><br/>
&nbsp;&nbsp;< /Layout.Wrapper ><br/>
< /Layout.Main ><br/>

**Note:** For \`layout="1-3"\` (sidebar on the left), put \`Layout.Sidebar\` **before** \`Layout.Content\` inside \`Layout.Wrapper\`. For \`layout="2-1"\`, put **main first**, then sidebar—matching the [CFPB markup](https://cfpb.github.io/design-system/development/main-content-and-sidebars).
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const exampleContent = (
  <Layout.Content key='content'>
    <h1>Content</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat alias
      eum ut officiis optio similique explicabo cupiditate architecto
      voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos,
      mollitia possimus error earum?
    </p>
  </Layout.Content>
);

const exampleSidebar = (
  <Layout.Sidebar key='sidebar'>
    <div>
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  </Layout.Sidebar>
);

function renderMainLayout(
  properties: LayoutMainProperties,
): ReactElement {
  const layout = properties.layout ?? '2-1';
  const columnChildren =
    layout === '1-3'
      ? [exampleSidebar, exampleContent]
      : [exampleContent, exampleSidebar];

  return (
    <Layout.Main {...properties}>
      <Layout.Wrapper>{columnChildren}</Layout.Wrapper>
    </Layout.Main>
  );
}

export const Layout_2_1: Story = {
  args: {
    layout: '2-1',
  },
  render: (properties) => renderMainLayout(properties),
};

export const Layout_1_3: Story = {
  args: {
    layout: '1-3',
  },
  render: (properties) => renderMainLayout(properties),
};
