import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import { TextInput } from '~/src/index';
import { InputType } from './TextInput';

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

  it('Displays notification', async () => {
    render(
      <TextInput
        id='alert'
        name='alert'
        type='number'
        notificationType='success'
        textNotification='Success message'
      />
    );

    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('a-form-alert__success');

    const icon = await within(alert).findByRole('img');
    expect(icon).toBeInTheDocument();
    expect(screen.getByText('Success message')).toBeInTheDocument();
  });

  it('Disabled input', async () => {
    render(<TextInput id='alert' name='alert' type='number' isDisabled />);

    const disabled = screen.getByTestId('textInput');
    expect(disabled).toHaveAttribute('disabled');
  });

  it('Full width', async () => {
    render(<TextInput id='alert' name='alert' type='number' width='full' />);

    const full = screen.getByTestId('textInput');
    expect(full).toHaveClass('a-text-input__full');
  });
});
