import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Grid, GridColumn, GridNested } from './Grid';

describe('Grid', () => {
  it('Renders a wrapper with 12 columns', async () => {
    render(<Grid />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(`cols-12`);
  });

  it('Renders a wrapper with 10 columns', async () => {
    render(<Grid width={10} />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(`cols-10`);
  });
});

describe('Grid Centered', () => {
  it('Renders a wrapper with 12 columns', async () => {
    render(<Grid center />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(
      `cols-12 centered`
    );
  });

  it('Renders a wrapper with 10 columns', async () => {
    render(<Grid width={10} center />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(
      `cols-10 centered`
    );
  });
});

describe('GridColumn', () => {
  it('Renders a column with width 12', async () => {
    render(<GridColumn width={12} />);

    expect(screen.getByRole('gridcell').getAttribute('class')).toMatch(
      `col col-12`
    );
  });

  it('Renders a column with width 1', async () => {
    render(<GridColumn width={1} />);

    expect(screen.getByRole('gridcell').getAttribute('class')).toMatch(
      `col col-1`
    );
  });
});

describe('GridNested', () => {
  it('Renders a column with width 12 in a nested wrapper', async () => {
    render(
      <GridNested>
        <GridColumn width={12} />
      </GridNested>
    );

    const grid = screen.getByRole('grid');
    expect(grid.getAttribute('class')).toMatch(`nested`);
    expect(screen.getByRole('gridcell').getAttribute('class')).toMatch(
      `col col-12`
    );
  });

  it('Renders a column with width 1', async () => {
    render(<GridNested>Content</GridNested>);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(`nested`);
  });
});
