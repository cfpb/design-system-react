import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { InputType, TextInput } from './text-input';

const testInputType = (type: InputType) => (): void => {
  render(<TextInput id='1' name='1' type={type} />);
  const input = screen.getByTestId('textInput');
  expect(input).toHaveAttribute('type', type);
  expect(input).not.toHaveAttribute('disabled');
};

const inputTypes: InputType[] = [
  'email',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'url',
];

describe('<TextInput />', () => {
  for (const type of inputTypes)
    it(`Renders input of type ${type}`, testInputType(type));

  it('Disabled input', () => {
    render(<TextInput id='alert' name='alert' type='number' isDisabled />);

    const disabled = screen.getByTestId('textInput');
    expect(disabled).toHaveAttribute('disabled');
  });

  it('renders default status without validation modifier', () => {
    render(<TextInput id='enabled' name='enabled' />);

    const textInput = screen.getByTestId('textInput');
    expect(textInput).toHaveClass('a-text-input');
    expect(textInput).not.toHaveClass('a-text-input--info');
  });

  it('applies validation status modifiers', () => {
    const statuses = ['success', 'warning', 'error'] as const;

    for (const status of statuses) {
      render(
        <TextInput
          id={status}
          name={status}
          status={status}
          data-testid={status}
        />,
      );
      const textInput = screen.getByTestId(status);
      expect(textInput).toHaveClass(`a-text-input--${status}`);
    }
  });

  it('ignores unknown status values at runtime', () => {
    render(
      <TextInput
        id='legacy'
        name='legacy'
        // @ts-expect-error legacy "info" status is not part of TextInputStatusType
        status='info'
      />,
    );

    const textInput = screen.getByTestId('textInput');
    expect(textInput).toHaveClass('a-text-input');
    expect(textInput).not.toHaveClass('a-text-input--info');
  });

  it('Full width', () => {
    render(<TextInput id='alert' name='alert' type='number' isFullWidth />);

    const textInput = screen.getByTestId('textInput');
    expect(textInput).toHaveClass('a-text-input--full');
  });

  it('attaches inputRef to the underlying input', () => {
    const inputRef = createRef<HTMLInputElement>();
    render(<TextInput id='ref-object' name='ref-object' inputRef={inputRef} />);

    expect(inputRef.current).toBe(screen.getByTestId('textInput'));
  });

  it('supports callback inputRef', () => {
    let node: HTMLInputElement | null = null;
    render(
      <TextInput
        id='ref-callback'
        name='ref-callback'
        inputRef={(element) => {
          node = element;
        }}
      />,
    );

    expect(node).toBe(screen.getByTestId('textInput'));
  });

  it('attaches both inputRef and forwarded ref', () => {
    const inputRef = createRef<HTMLInputElement>();
    const forwardedRef = createRef<HTMLInputElement>();
    render(
      <TextInput
        id='both-refs'
        name='both-refs'
        inputRef={inputRef}
        ref={forwardedRef}
      />,
    );

    const textInput = screen.getByTestId('textInput');
    expect(inputRef.current).toBe(textInput);
    expect(forwardedRef.current).toBe(textInput);
  });

  it('keeps a stable inputRef attached across rerenders', () => {
    const calls: (HTMLInputElement | null)[] = [];
    const inputRef = (element: HTMLInputElement | null): void => {
      calls.push(element);
    };
    const { rerender } = render(
      <TextInput id='stable-ref' name='stable-ref' inputRef={inputRef} />,
    );

    rerender(
      <TextInput id='stable-ref' name='stable-ref' inputRef={inputRef} />,
    );

    expect(calls).toEqual([screen.getByTestId('textInput')]);
  });

  it('clears object refs on unmount', () => {
    const inputRef = createRef<HTMLInputElement>();
    const forwardedRef = createRef<HTMLInputElement>();
    const { unmount } = render(
      <TextInput
        id='unmount-ref'
        name='unmount-ref'
        inputRef={inputRef}
        ref={forwardedRef}
      />,
    );

    unmount();

    expect(inputRef.current).toBeNull();
    expect(forwardedRef.current).toBeNull();
  });

  it('runs ref cleanups on unmount', () => {
    const calls: string[] = [];
    const { unmount } = render(
      <TextInput
        id='cleanup-ref'
        name='cleanup-ref'
        inputRef={(element) => {
          if (!element) return;
          calls.push('input-attach');
          return () => {
            calls.push('input-cleanup');
          };
        }}
        ref={(element) => {
          if (!element) return;
          calls.push('forwarded-attach');
          return () => {
            calls.push('forwarded-cleanup');
          };
        }}
      />,
    );

    expect(calls).toEqual(['input-attach', 'forwarded-attach']);
    unmount();
    expect(calls).toEqual([
      'input-attach',
      'forwarded-attach',
      'input-cleanup',
      'forwarded-cleanup',
    ]);
  });

  it('calls a callback inputRef with null on unmount when it returns no cleanup', () => {
    const calls: (HTMLInputElement | null)[] = [];
    const inputRef = (element: HTMLInputElement | null): void => {
      calls.push(element);
    };
    const { unmount } = render(
      <TextInput id='null-ref' name='null-ref' inputRef={inputRef} />,
    );

    unmount();

    expect(calls.at(-1)).toBeNull();
    expect(calls[0]).toBeInstanceOf(HTMLInputElement);
  });
});
