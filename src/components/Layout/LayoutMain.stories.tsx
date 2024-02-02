import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '~/src/index';

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

<li>[bleedbar](https://cfpb.github.io/design-system/development/main-content-and-sidebars#bleedbar-sidebar-styling)</li>
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
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Layout_2_1: Story = {
  args: {
    layout: '2-1',
    bleedbar: true
  },
  render: properties => (
    <Layout.Main {...properties}>
      <Layout.Wrapper>
        <Layout.Content>
          <h1>Content</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            alias eum ut officiis optio similique explicabo cupiditate
            architecto voluptatem nostrum recusandae, eaque consectetur iure,
            veritatis eos, mollitia possimus error earum?
          </p>
        </Layout.Content>
        <Layout.Sidebar>
          <div>
            <h2>Sidebar</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </Layout.Sidebar>
      </Layout.Wrapper>
    </Layout.Main>
  )
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Layout_1_3: Story = {
  args: {
    layout: '1-3',
    bleedbar: false
  },
  render: properties => (
    <Layout.Main {...properties}>
      <Layout.Wrapper>
        <Layout.Sidebar>
          <div>
            <h2>Sidebar</h2>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </Layout.Sidebar>
        <Layout.Content>
          <h1>Content</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            alias eum ut officiis optio similique explicabo cupiditate
            architecto voluptatem nostrum recusandae, eaque consectetur iure,
            veritatis eos, mollitia possimus error earum?
          </p>
        </Layout.Content>
      </Layout.Wrapper>
    </Layout.Main>
  )
};
