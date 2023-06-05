import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridColumn, GridNested } from './Grid';

const meta: Meta<typeof Grid> = {
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS Grid component

Source: https://cfpb.github.io/design-system/foundation/grid
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardGrid: Story = {
  args: {
    demo: true,
    children: (
      <>
        <section>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
          <GridColumn width={1}>
            <p>one</p>
          </GridColumn>
        </section>
        <section>
          <GridColumn width={2}>
            <p>two</p>
          </GridColumn>
          <GridColumn width={2}>
            <p>two</p>
          </GridColumn>
          <GridColumn width={2}>
            <p>two</p>
          </GridColumn>
          <GridColumn width={2}>
            <p>two</p>
          </GridColumn>
          <GridColumn width={2}>
            <p>two</p>
          </GridColumn>
          <GridColumn width={2}>
            <p>two</p>
          </GridColumn>
        </section>
        <section>
          <GridColumn width={2}>
            <p>two</p>
          </GridColumn>
          <GridColumn width={3}>
            <p>three</p>
          </GridColumn>
          <GridColumn width={2}>
            <p>two</p>
          </GridColumn>
          <GridColumn width={3}>
            <p>three</p>
          </GridColumn>
          <GridColumn width={2}>
            <p>two</p>
          </GridColumn>
        </section>
        <section>
          <GridColumn width={3}>
            <p>three</p>
          </GridColumn>
          <GridColumn width={3}>
            <p>three</p>
          </GridColumn>
          <GridColumn width={3}>
            <p>three</p>
          </GridColumn>
          <GridColumn width={3}>
            <p>three</p>
          </GridColumn>
        </section>
        <section>
          <GridColumn width={4}>
            <p>four</p>
          </GridColumn>
          <GridColumn width={4}>
            <p>four</p>
          </GridColumn>
          <GridColumn width={4}>
            <p>four</p>
          </GridColumn>
        </section>
        <section>
          <GridColumn width={6}>
            <p>six</p>
          </GridColumn>
          <GridColumn width={6}>
            <p>six</p>
          </GridColumn>
        </section>
        <section>
          <GridColumn width={12}>
            <p>twelve</p>
          </GridColumn>
        </section>
      </>
    )
  }
};

export const NestedGrid: Story = {
  args: {
    demo: true,
    children: (
      <>
        {' '}
        <section>
          <GridColumn width={6}>
            <p>six</p>
            <GridNested>
              <GridColumn width={4}>
                <p>four</p>
              </GridColumn>
              <GridColumn width={4}>
                <p>four</p>
              </GridColumn>
              <GridColumn width={4}>
                <p>four</p>
              </GridColumn>
            </GridNested>
          </GridColumn>
          <GridColumn width={6}>
            <p>six</p>
            <GridNested>
              <GridColumn width={4}>
                <p>four</p>
              </GridColumn>
              <GridColumn width={4}>
                <p>four</p>
              </GridColumn>
              <GridColumn width={4}>
                <p>four</p>
              </GridColumn>
            </GridNested>
          </GridColumn>
        </section>
        <section>
          <GridColumn width={3}>
            <p>three</p>
            <GridNested>
              <GridColumn width={6}>
                <p>six</p>
              </GridColumn>
              <GridColumn width={6}>
                <p>six</p>
              </GridColumn>
            </GridNested>
          </GridColumn>
          <GridColumn width={6}>
            <p>six</p>
            <GridNested>
              <GridColumn width={4}>
                <p>four</p>
              </GridColumn>
              <GridColumn width={4}>
                <p>four</p>
              </GridColumn>
              <GridColumn width={4}>
                <p>four</p>
              </GridColumn>
            </GridNested>
          </GridColumn>
          <GridColumn width={3}>
            <p>three</p>
            <GridNested>
              <GridColumn width={3}>
                <p>three</p>
              </GridColumn>
              <GridColumn width={3}>
                <p>three</p>
              </GridColumn>
              <GridColumn width={3}>
                <p>three</p>
              </GridColumn>
              <GridColumn width={3}>
                <p>three</p>
              </GridColumn>
            </GridNested>
          </GridColumn>
        </section>
      </>
    )
  }
};

export const CenteredGrid: Story = {
  args: {
    demo: true,
    center: true,
    children: (
      <>
        {' '}
        <section>
          <GridColumn width={12}>
            <p>twelve</p>
          </GridColumn>
        </section>
        <section>
          <GridColumn width={8}>
            <p>eight</p>
          </GridColumn>
        </section>
        <section>
          <GridColumn width={4}>
            <p>four</p>
          </GridColumn>
          <GridColumn width={4}>
            <p>four</p>
          </GridColumn>
        </section>
        <section>
          <GridColumn width={4}>
            <p>four</p>
          </GridColumn>
        </section>
      </>
    )
  }
};
