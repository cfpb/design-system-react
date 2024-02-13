import { jest } from '@storybook/jest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextArea } from './TextArea';
import { TextInputStatusType } from './TextInputStatus';

const TEST_STRING = 'Tiny bubbles...';

describe('<TextArea />', () => {
  it('Enabled input accepts text', async () => {
    const onChange = jest.fn();
    render(<TextArea id='enabled' onChange={onChange} />);
    const input = screen.getByTestId('textAreaInput');
    await userEvent.type(input, TEST_STRING);
    expect(onChange).toBeCalledWith(TEST_STRING);
  });

  it('Disabled input', async () => {
    render(<TextArea id='disabled' isDisabled />);

    const disabled = screen.getByTestId('textAreaInput');
    expect(disabled).toHaveAttribute('disabled');
  });

  it('Full width', async () => {
    render(<TextArea id='alert' isFullWidth />);

    const textInput = screen.getByTestId('textAreaInput');
    expect(textInput).toHaveClass('a-text-input__full');
  });

  it('Handles all supported statuses', async () => {
    // Valid status should have associated class
    const statuses: TextInputStatusType[] = [
      'error',
      'success',
      'warning',
      'info'
    ];
    for (const status of statuses) {
      render(<TextArea id='alert' {...{ status, placeholder: status }} />);
      const textInput = screen.getByPlaceholderText(status);
      expect(textInput).toHaveClass(`a-text-input__${status}`);
    }
  });
});
