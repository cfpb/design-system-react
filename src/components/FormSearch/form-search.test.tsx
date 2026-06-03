import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { FormSearch } from './form-search';
import {
  getFormSearchInputHost,
  getFormSearchNativeInput,
  getFormSearchSubmitButton,
  type FormSearchElement,
} from './form-search-utils';

/* eslint-disable testing-library/no-node-access -- <cfpb-form-search> is not exposed via Testing Library roles */
const getFormSearchHost = (id?: string): HTMLElement | null =>
  id
    ? document.querySelector<HTMLElement>(`#${id}`)
    : document.querySelector<HTMLElement>('cfpb-form-search');

const waitForFormSearchReady = async (
  id?: string,
): Promise<HTMLElement | null> => {
  await customElements.whenDefined('cfpb-form-search');
  await customElements.whenDefined('cfpb-form-search-input');

  await waitFor(() => {
    const element = getFormSearchHost(id);

    expect(getFormSearchNativeInput(element)).not.toBeNull();
    expect(element?.dataset.dsrFormSearchConnected).toBe('true');
  });

  await new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(resolve));
  });

  return getFormSearchHost(id);
};
/* eslint-enable testing-library/no-node-access */

describe('<FormSearch />', () => {

  it('renders the cfpb-form-search web component', async () => {
    render(<FormSearch id='search-test' />);

    const element = await waitForFormSearchReady('search-test');
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

  it('allows typing when uncontrolled', async () => {
    const onChange = fn();

    render(<FormSearch id='search-type' onChange={onChange} />);

    const element = await waitForFormSearchReady('search-type');
    const input = getFormSearchNativeInput(element)!;

    fireEvent.input(input, { target: { value: 'hello' } });

    await waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith('hello');
    });
    expect((element as HTMLElement & { value: string }).value).toBe('hello');
  });

  it('allows typing after maxlength changes', async () => {
    const onChange = fn();

    const { rerender } = render(
      <FormSearch id='search-max' maxlength={75} onChange={onChange} />,
    );

    const element = await waitForFormSearchReady('search-max');
    rerender(<FormSearch id='search-max' maxlength={50} onChange={onChange} />);

    await waitFor(() => {
      expect((element as FormSearchElement).maxlength).toBe(50);
    });

    const input = getFormSearchNativeInput(element)!;
    fireEvent.input(input, { target: { value: 'typed' } });

    await waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith('typed');
    });
  });

  it('allows typing when controlled with onChange', async () => {
    const onChange = fn();

    const Controlled = () => {
      const [currentValue, setCurrentValue] = useState('');

      return (
        <FormSearch
          id='search-controlled'
          onChange={(next) => {
            setCurrentValue(next);
            onChange(next);
          }}
          value={currentValue}
        />
      );
    };

    render(<Controlled />);

    const element = await waitForFormSearchReady('search-controlled');
    const input = getFormSearchNativeInput(element)!;

    fireEvent.input(input, { target: { value: 'hi' } });

    await waitFor(() => {
      expect(onChange).toHaveBeenLastCalledWith('hi');
    });
    await waitFor(() => {
      expect(element?.value).toBe('hi');
    });
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

    const element = await waitForFormSearchReady('search-submit');

    const searchInputHost = getFormSearchInputHost(element);
    expect(searchInputHost).not.toBeNull();

    fireEvent(
      searchInputHost,
      new CustomEvent('enter-down', { bubbles: true, composed: true }),
    );

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith('mortgage');
    });
  });

  it('can hide the submit button', async () => {
    render(<FormSearch id='search-no-btn' showSubmitButton={false} />);

    const element = await waitForFormSearchReady('search-no-btn');

    await waitFor(() => {
      expect(getFormSearchSubmitButton(element)?.hidden).toBe(true);
    });
  });
});
