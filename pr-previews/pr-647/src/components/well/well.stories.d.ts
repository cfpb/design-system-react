import { Meta, StoryObj } from '@storybook/react-vite';
import { WellContainer, WellContent } from './well';
declare const meta: Meta<typeof WellContainer>;
export default meta;
type Story = StoryObj<typeof meta>;
type ContentStory = StoryObj<typeof WellContent>;
export declare const Container: Story;
export declare const Content: ContentStory;
