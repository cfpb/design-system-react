import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '~/src/index';
import { TextInput } from '../TextInput/TextInput';

const meta: Meta<typeof Label> = {
  title: 'Components (Draft)/Labels',
  component: Label,
  argTypes: {
    inline: { control: 'boolean' }
  },
  parameters: {
    docs: {
      description: {
        component: `
### CFPB DS - Label component

Source: https://cfpb.github.io/design-system/components/expandables
`
      }
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LabelHeading: Story = {
  args: {
    children: <>Text input label</>,
    htmlFor: 'testInput'
  },
  render: arguments_ => (
    <>
      <Label {...arguments_} htmlFor='testInput' />
      <TextInput
        id='testInput'
        name='testInput'
        type='text'
        placeholder='Example input'
      />
    </>
  )
};

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Label> = arguments_ => (
//   <>
//     <Label {...arguments_} htmlFor='testInput'>
//       Text input label
//     </Label>
//     <TextInput
//       id='testInput'
//       name='testInput'
//       type='text'
//       placeholder='Example input'
//     />
//   </>
// );

// export const LabelHeading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// LabelHeading.args = {};
