import { CfpbFormSearch } from '@cfpb/cfpb-design-system';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { fn } from 'storybook/test';
import { FormSearch } from './form-search';
import { getFormSearchSubmitButton } from './form-search-utils';

const waitForFormSearchUpgrade = async (
  id?: string,
): Promise<HTMLElement | null> => {
  await customElements.whenDefined('cfpb-form-search');
  await new Promise((resolve) => requestAnimationFrame(resolve));

  return id
    ? document.querySelector<HTMLElement>(`#${id}`)
    : document.querySelector<HTMLElement>('cfpb-form-search');
};

describe('<FormSearch />', () => {
  beforeEach(() => {
    CfpbFormSearch.init();
  });

  it('renders the cfpb-form-search web component', async () => {
    render(<FormSearch id='search-test' />);

    const element = await waitForFormSearchUpgrade('search-test');
    expect(element).toBeInTheDocument();
  });

  it('renders typeahead suggestions in a hidden list', () => {
    render(
      <FormSearch
        suggestions={[
          { label: 'First suggestion' },
          { label: 'Linked', href: '/linked' },
        ]}
      />,
    );

    expect(
      screen.getByText('First suggestion', { hidden: true }),
    ).toBeInTheDocument();
    expect(screen.getByText('Linked', { hidden: true })).toHaveAttribute(
      'href',
      '/linked',
    );
  });

  it('calls onSubmit with the current value', async () => {
    const onSubmit = fn();

    render(
      <FormSearch
        defaultValue='mortgage'
        id='search-submit'
        onSubmit={onSubmit}
        submitLabel='Find'
      />,
    );

    const element = await waitForFormSearchUpgrade('search-submit');
    expect(element).not.toBeNull();

    fireEvent.submit(document.getElementById('search-submit-form')!);

    expect(onSubmit).toHaveBeenCalledWith('mortgage');
  });

  it('can hide the submit button', async () => {
    render(<FormSearch id='search-no-btn' showSubmitButton={false} />);

    const element = await waitForFormSearchUpgrade('search-no-btn');

    await waitFor(() => {
      expect(getFormSearchSubmitButton(element)?.hidden).toBe(true);
    });
  });
});
