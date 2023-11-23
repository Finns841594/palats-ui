import type { Meta, StoryObj } from '@storybook/react';
import { Button, buttonTypeArray } from '../components/Button';
import { DeleteIcon } from '../components/DeleteIcon';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: buttonTypeArray },
    label: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md'] },
    iconPosition: { control: 'select', options: ['start', 'end'] },
    onClickFn: { action: 'clicked' },
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

export const Secondary: Story = {
  args: {
    label: 'Button',
    type: 'secondary',
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Button',
    type: 'primary',
    icon: DeleteIcon,
  },
};
