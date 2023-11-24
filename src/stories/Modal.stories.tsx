import type { Meta, StoryObj } from '@storybook/react';
import { Modal, modalTypeArray } from '../components/Modal';

const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
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
    headline: 'Headline',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus cupiditate distinctio maxime non quasi quo. Accusamus tempora totam voluptas!',
    buttonOneLabel: 'First',
    buttonOneOnClick: () => null,
  },
};

export const PrimaryTwoButtons: Story = {
  args: {
    type: 'primary',
    state: 2,
    headline: 'Headline',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus cupiditate distinctio maxime non quasi quo. Accusamus tempora totam voluptas!',
    buttonOneLabel: 'First',
    buttonOneOnClick: () => null,
    buttonTwoLabel: 'Second',
    buttonTwoOnClick: () => null,
  },
};

export const SecondaryOneButton: Story = {
  args: {
    type: 'secondary',
    state: 1,
    headline: 'Headline',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam impedit velit ut unde, atque commodi assumenda. Culpa, laborum suscipit. Omnis dolorum cumque provident quaerat, itaque, unde reprehenderit blanditiis tenetur culpa quisquam deleniti qui labore commodi vero. Enim, fugit, accusantium reprehenderit et esse optio illo assumenda mollitia doloribus ratione minima molestias?',
    buttonOneLabel: 'First',
    buttonOneOnClick: () => null,
  },
};
