import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fn } from 'storybook/test';
import { TextArea } from './text-area';
import { TextInputStatusType } from './text-input-status';

const TEST_STRING = 'Tiny bubbles...';

describe('<TextArea />', () => {
  it('Enabled input accepts text', async () => {
    const onChange = fn();
    render(<TextArea id='enabled' onChange={onChange} />);
    const input = screen.getByTestId('textAreaInput');
    await userEvent.type(input, TEST_STRING);
    expect(onChange).toBeCalledWith(TEST_STRING);
  });

  it('Disabled input', () => {
    render(<TextArea id='disabled' isDisabled />);

    const disabled = screen.getByTestId('textAreaInput');
    expect(disabled).toHaveAttribute('disabled');
  });

  it('Full width', () => {
    render(<TextArea id='alert' isFullWidth />);

    const textInput = screen.getByTestId('textAreaInput');
    expect(textInput).toHaveClass('a-text-input--full');
    expect(textInput.parentElement).toHaveClass('m-form-field');
  });

  it('does not wrap in m-form-field by default', () => {
    render(<TextArea id='enabled' />);

    const textArea = screen.getByTestId('textAreaInput');
    expect(textArea.parentElement).not.toHaveClass('m-form-field');
  });

  it('applies validation status modifiers', () => {
    const statuses: TextInputStatusType[] = ['error', 'success', 'warning'];

    for (const status of statuses) {
      render(<TextArea id='alert' {...{ status, placeholder: status }} />);
      const textInput = screen.getByPlaceholderText(status);
      expect(textInput).toHaveClass(`a-text-input--${status}`);
    }
  });

  it('renders without status when omitted', () => {
    render(<TextArea id='enabled' placeholder='enabled' />);

    const textInput = screen.getByPlaceholderText('enabled');
    expect(textInput).toHaveClass('a-text-input');
    expect(textInput).not.toHaveClass('a-text-input--success');
  });

  it('restricts resizing to the vertical axis', () => {
    render(<TextArea id='enabled' />);

    const textArea = screen.getByTestId('textAreaInput');
    expect(textArea).toHaveStyle({ resize: 'vertical' });
  });
});
