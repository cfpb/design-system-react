import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '~/src/index';
import { TextInput } from '../TextInput/TextInput';

const meta: Meta<typeof Label> = {
  title: 'Components (Verified)/Labels',
  tags: ['autodocs'],
  component: Label,
  argTypes: {
    inline: { control: 'boolean' }
  },
  parameters: {
    docs: {
      description: {
        component: `

Labels are used to help users understand the meaning of a form input.

Source: https://cfpb.github.io/design-system/components/labels-and-legends
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelHeading: Story = {
  name: 'Label heading',
  args: {
    children: <>Label heading</>,
    htmlFor: 'testInput'
  },
  render: arguments_ => (
    <>
      <Label {...arguments_} />
      <TextInput
        id={arguments_.htmlFor}
        name={arguments_.htmlFor}
        type='text'
      />
    </>
  )
};

export const InlineLabel: Story = {
  name: 'Inline label',
  args: {
    children: <>Text input label</>,
    htmlFor: 'testInput',
    inline: true
  },
  render: arguments_ => (
    <div className='m-form-field m-form-field__checkbox'>
      <input className='a-checkbox' type='checkbox' id={arguments_.htmlFor} />
      <Label {...arguments_}>Inline label</Label>
    </div>
  )
};
