import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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
});
