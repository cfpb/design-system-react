import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { InputType, TextInput } from './TextInput';

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
  'url'
];

describe('<TextInput />', () => {
  for (const type of inputTypes)
    it(`Renders input of type ${type}`, testInputType(type));

  it('Disabled input', async () => {
    render(<TextInput id='alert' name='alert' type='number' isDisabled />);

    const disabled = screen.getByTestId('textInput');
    expect(disabled).toHaveAttribute('disabled');
  });

  it('Status', async () => {
    render(
      <TextInput id='alert' name='alert' type='number' status='success' />
    );

    const textInput = screen.getByTestId('textInput');
    expect(textInput).toHaveClass('a-text-input__success');
  });

  it('Full width', async () => {
    render(<TextInput id='alert' name='alert' type='number' isFullWidth />);

    const textInput = screen.getByTestId('textInput');
    expect(textInput).toHaveClass('a-text-input__full');
  });
});
