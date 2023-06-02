import type { Meta } from '@storybook/react';
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

export const StandardGrid = (): React.ReactElement => (
  <Grid demo>
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
  </Grid>
);

export const NestedGrid = (): React.ReactElement => (
  <Grid demo>
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
  </Grid>
);

export const CenteredGrid = (): React.ReactElement => (
  <Grid demo center>
    <section>
      <GridColumn width={12}>
        <p>12</p>
      </GridColumn>
    </section>
    <section>
      <GridColumn width={8}>
        <p>8</p>
      </GridColumn>
    </section>
    <section>
      <GridColumn width={4}>
        <p>4</p>
      </GridColumn>
      <GridColumn width={4}>
        <p>4</p>
      </GridColumn>
    </section>
    <section>
      <GridColumn width={4}>
        <p>4</p>
      </GridColumn>
    </section>
  </Grid>
);
