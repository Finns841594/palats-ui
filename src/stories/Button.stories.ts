import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary'] },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'primary',
  },
};

// export const Error: Story = {
//   args: {
//     label: 'Error',
//     type: button.error.background-enabled,
//   },
// };
