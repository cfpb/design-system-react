import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { GridColumn } from './grid-column';
import { GridWrapper } from './grid-wrapper';

describe('Grid', () => {
  it('Renders a wrapper with 12 columns', () => {
    render(<GridWrapper />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(`cols-12`);
  });

  it('Renders a wrapper with 10 columns', () => {
    render(<GridWrapper width={10} />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(`cols-10`);
  });

  it('Renders a demo wrapper', () => {
    render(<GridWrapper demo />);

    expect(screen.getByRole('grid').getAttribute('class')).toContain(`demo`);
  });
});

describe('Grid Centered', () => {
  it('Renders a wrapper with 12 columns', () => {
    render(<GridWrapper center />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(
      `cols-12 centered`,
    );
  });

  it('Renders a wrapper with 10 columns', () => {
    render(<GridWrapper width={10} center />);

    expect(screen.getByRole('grid').getAttribute('class')).toMatch(
      `cols-10 centered`,
    );
  });
});

describe('GridColumn', () => {
  it('Renders a column with width 12', () => {
    render(<GridColumn width={12} />);

    expect(screen.getByRole('gridcell').getAttribute('class')).toMatch(
      `col col-12`,
    );
  });

  it('Renders a column with width 1', () => {
    render(<GridColumn />);

    expect(screen.getByRole('gridcell').getAttribute('class')).toMatch(
      `col col-1`,
    );
  });
});
