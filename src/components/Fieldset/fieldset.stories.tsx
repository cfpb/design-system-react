import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Checkbox, Fieldset, RadioButton } from '~/src/index';

/**
 *
 * Source: https://cfpb.github.io/design-system/components/fieldsets
 */
const meta: Meta<typeof Fieldset> = {
  title: 'Components (Draft)/Fieldsets',
  tags: ['autodocs'],
  component: Fieldset,
  argTypes: {
    legend: { control: 'text' },
    legendHelperText: { control: 'text' },
    isInline: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
The fieldset component is used to group several controls as well as labels within a web form. A fieldset includes a legend, block helper text (if necessary), labels, and a set of controls, such as checkboxes or radio buttons.

Source: https://cfpb.github.io/design-system/components/fieldsets
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const legendHelperText = 'Use block helper text for instructions.';

export const WithCheckboxes: Story = {
  name: 'With checkboxes',
  args: {
    legend: 'Basic legend',
    legendHelperText,
  },
  render: (arguments_) => (
    <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <Checkbox
            id='fieldset-checkbox-1'
            name='test_checkbox'
            label='Label'
          />
          <Checkbox
            id='fieldset-checkbox-2'
            name='test_checkbox'
            label='Label'
          />
        </Fieldset>
      </div>
    </form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkbox');

    await waitFor(() => expect(checkboxes[0]).not.toBeChecked());
    await waitFor(() => expect(checkboxes[1]).not.toBeChecked());

    await userEvent.click(checkboxes[0]);
    await waitFor(() => expect(checkboxes[0]).toBeChecked());
    await expect(checkboxes[1]).not.toBeChecked();

    await userEvent.click(checkboxes[1]);
    await waitFor(() => expect(checkboxes[1]).toBeChecked());
    await expect(checkboxes[0]).toBeChecked();
  },
};

// export const WithHorizontalCheckboxes: Story = {
//   name: 'With horizontal checkboxes',
//   args: {
//     legend: 'Basic legend',
//     legendHelperText,
//     isInline: true,
//   },
//   render: (arguments_) => (
//     <form className='o-form'>
//       <div className='o-form__group'>
//         <Fieldset {...arguments_}>
//           <Checkbox
//             id='fieldset-inline-cb-1'
//             name='test_inline_cb'
//             label='Label'
//           />
//           <Checkbox
//             id='fieldset-inline-cb-2'
//             name='test_inline_cb'
//             label='Label'
//           />
//         </Fieldset>
//       </div>
//     </form>
//   ),
// };
//
// export const WithHorizontalRadioButtons: Story = {
//   name: 'With horizontal radio buttons',
//   args: {
//     legend: 'Basic legend',
//     legendHelperText,
//     isInline: true,
//   },
//   render: (arguments_) => (
//     <form className='o-form'>
//       <div className='o-form__group'>
//         <Fieldset {...arguments_}>
//           <RadioButton
//             id='fieldset-inline-r1'
//             name='test_inline_radio'
//             label='Label'
//           />
//           <RadioButton
//             id='fieldset-inline-r2'
//             name='test_inline_radio'
//             label='Label'
//           />
//         </Fieldset>
//       </div>
//     </form>
//   ),
// };

export const WithRadioButtons: Story = {
  name: 'With radio buttons',
  args: {
    legend: 'Basic legend',
    legendHelperText,
  },
  render: (arguments_) => (
    <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <RadioButton id='fieldset-radio-1' name='test_radio' label='Label' />
          <RadioButton id='fieldset-radio-2' name='test_radio' label='Label' />
        </Fieldset>
      </div>
    </form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioButtons = canvas.queryAllByRole('radio', { name: /label/i });
    const radioA = radioButtons[0];
    const radioB = radioButtons[1];

    await waitFor(() => expect(radioA).not.toBeChecked());
    await waitFor(() => expect(radioB).not.toBeChecked());

    await userEvent.click(radioA);
    await waitFor(() => expect(radioA).toBeChecked());
    await expect(radioB).not.toBeChecked();

    await userEvent.click(radioB);
    await waitFor(() => expect(radioB).toBeChecked());
    await expect(radioA).not.toBeChecked();
  },
};

export const LargeTargetWithCheckboxes: Story = {
  name: 'Large target area with checkboxes',
  args: {
    legend: 'Basic legend',
    legendHelperText,
  },
  render: (arguments_) => (
    <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <Checkbox
            id='fieldset-checkbox-lg-1'
            name='test_checkbox_lg'
            label='Label'
            isLarge
          />
          <Checkbox
            id='fieldset-checkbox-lg-2'
            name='test_checkbox_lg'
            label='Label'
            isLarge
          />
          <Checkbox
            id='fieldset-checkbox-lg-3'
            name='test_checkbox_lg'
            label='Label'
            isLarge
          />
          <Checkbox
            id='fieldset-checkbox-lg-4'
            name='test_checkbox_lg'
            label='Label'
            isLarge
          />
        </Fieldset>
      </div>
    </form>
  ),
};

export const LargeTargetWithRadioButtons: Story = {
  name: 'Large target area with radio buttons',
  args: {
    legend: 'Basic legend',
    legendHelperText,
  },
  render: (arguments_) => (
    <form className='o-form'>
      <div className='o-form__group'>
        <Fieldset {...arguments_}>
          <RadioButton
            id='fieldset-radio-lg-1'
            name='test_radio_lg'
            label='Label'
            isLarge
            value='1'
          />
          <RadioButton
            id='fieldset-radio-lg-2'
            name='test_radio_lg'
            label='Label'
            isLarge
            value='0'
          />
          <RadioButton
            id='fieldset-radio-lg-3'
            name='test_radio_lg'
            label='Label'
            isLarge
            value='0'
          />
          <RadioButton
            id='fieldset-radio-lg-4'
            name='test_radio_lg'
            label='Label'
            isLarge
            value='0'
          />
        </Fieldset>
      </div>
    </form>
  ),
};
