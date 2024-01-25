import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '~/src/index';

const meta: Meta<typeof Grid.Wrapper> = {
  title: 'Components (Draft)/Grids',
  component: Grid.Wrapper,
  tags: ['autodocs'],
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
    className: '',
    children: (
      <>
        <Grid.Row>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
          <Grid.Column width={1}>
            <p>1</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
          <Grid.Column width={2}>
            <p>2</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6}>
            <p>6</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <p>6</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <p>12</p>
          </Grid.Column>
        </Grid.Row>
      </>
    )
  }
};

export const NestedGrid: Story = {
  args: {
    demo: true,
    className: '',
    children: (
      <>
        <Grid.Row>
          <Grid.Column width={6}>
            <p>6</p>
            <Grid.Wrapper>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
            </Grid.Wrapper>
          </Grid.Column>
          <Grid.Column width={6}>
            <p>6</p>
            <Grid.Wrapper>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
            </Grid.Wrapper>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <p>3</p>
            <Grid.Wrapper>
              <Grid.Column width={6}>
                <p>6</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <p>6</p>
              </Grid.Column>
            </Grid.Wrapper>
          </Grid.Column>
          <Grid.Column width={6}>
            <p>6</p>
            <Grid.Wrapper>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>4</p>
              </Grid.Column>
            </Grid.Wrapper>
          </Grid.Column>
          <Grid.Column width={3}>
            <p>3</p>
            <Grid.Wrapper>
              <Grid.Column width={3}>
                <p>3</p>
              </Grid.Column>
              <Grid.Column width={3}>
                <p>3</p>
              </Grid.Column>
              <Grid.Column width={3}>
                <p>3</p>
              </Grid.Column>
              <Grid.Column width={3}>
                <p>3</p>
              </Grid.Column>
            </Grid.Wrapper>
          </Grid.Column>
        </Grid.Row>
      </>
    )
  }
};

export const CenteredGrid: Story = {
  args: {
    demo: true,
    className: '',
    center: true,
    children: (
      <>
        <Grid.Row>
          <Grid.Column width={12}>
            <p>12</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <p>8</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <p>4</p>
          </Grid.Column>
        </Grid.Row>
      </>
    )
  }
};

export const GridColWidthEnum: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'GridColWidth is an enum used to help simplify sizing Grid.Columns.'
      }
    }
  },
  args: {
    demo: true,
    className: '',
    children: (
      <>
        <Grid.Row>
          <Grid.Column width={Grid.Width.Quarter}>
            <p>Quarter</p>
          </Grid.Column>
          <Grid.Column width={Grid.Width.ThreeQuarters}>
            <p>ThreeQuarters</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={Grid.Width.Third}>
            <p>Third</p>
          </Grid.Column>
          <Grid.Column width={Grid.Width.TwoThirds}>
            <p>TwoThirds</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={Grid.Width.Half}>
            <p>Half</p>
          </Grid.Column>
          <Grid.Column width={Grid.Width.Half}>
            <p>Half</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={Grid.Width.Full}>
            <p>Full</p>
          </Grid.Column>
        </Grid.Row>
      </>
    )
  }
};
