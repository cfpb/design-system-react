import { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from '../../index';
declare const meta: Meta<typeof Grid.Wrapper>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const StandardGrid: Story;
export declare const NestedGrid: Story;
export declare const CenteredGrid: Story;
export declare const GridColWidthEnum: Story;
