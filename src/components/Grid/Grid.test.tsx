import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { GridColumn } from './GridColumn';
import { GridWrapper } from './GridWrapper';

describe('Grid', () => {
  it('Renders a wrapper with 12 columns', async () => {
    render(<GridWrapper />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(`cols-12`);
  });

  it('Renders a wrapper with 10 columns', async () => {
    render(<GridWrapper width={10} />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(`cols-10`);
  });

  it('Renders a demo wrapper', async () => {
    render(<GridWrapper demo />);

    expect(screen.getByRole('grid').getAttribute('class')).toContain(`demo`);
  });
});

describe('Grid Centered', () => {
  it('Renders a wrapper with 12 columns', async () => {
    render(<GridWrapper center />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(
      `cols-12 centered`
    );
  });

  it('Renders a wrapper with 10 columns', async () => {
    render(<GridWrapper width={10} center />);

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
    render(<GridColumn />);

    expect(screen.getByRole('gridcell').getAttribute('class')).toMatch(
      `col col-1`
    );
  });
});
