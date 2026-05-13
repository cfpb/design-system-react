import type { Meta, StoryObj } from '@storybook/react-vite';
import { Layout } from '~/src/index';

const meta: Meta<typeof Layout.Wrapper> = {
  title: 'Components (Draft)/Layout/Wrapper',
  tags: ['autodocs'],
  component: Layout.Wrapper,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS Layout.Wrapper component

Container to help position Content and Sidebar elements.

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
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Wrapper: Story = {
  args: {
    // Order matches default Layout.Main layout "2-1" (main first, then sidebar).
    children: [
      <Layout.Content key='content'>
        <h1>Layout.Content</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          alias eum ut officiis optio similique explicabo cupiditate architecto
          voluptatem nostrum recusandae, eaque consectetur iure, veritatis eos,
          mollitia possimus error earum?
        </p>
      </Layout.Content>,
      <Layout.Sidebar key='sidebar'>
        <div>
          <h2>Layout.Sidebar</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </Layout.Sidebar>,
    ],
  },
  render: ({ children }) => (
    <Layout.Main>
      <Layout.Wrapper>{children}</Layout.Wrapper>
    </Layout.Main>
  ),
};
