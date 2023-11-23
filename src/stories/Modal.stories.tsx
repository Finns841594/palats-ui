import type { Meta, StoryObj } from '@storybook/react';
import { Modal, modalTypeArray } from '../components/Modal';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: { control: 'select', options: modalTypeArray },
    state: { control: 'radio', options: [1, 2] },
    buttonOneLabel: { control: 'button 1' },
    buttonTwoLabel: { control: 'button 2' },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryOneButton: Story = {
  args: {
    type: 'primary',
    state: 1,
    buttonOneLabel: 'First',
  },
};

export const PrimaryTwoButtons: Story = {
  args: {
    type: 'primary',
    state: 2,
    buttonOneLabel: 'First',
    buttonTwoLabel: 'Second',
  },
};

export const SecondaryOneButton: Story = {
  args: {
    type: 'secondary',
    state: 1,
    buttonOneLabel: 'First',
  },
};
