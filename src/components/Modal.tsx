import PropTypes from 'prop-types';
import React from 'react';
import { Button } from './Button';
interface ModalProps {
  type: string;
  state: number;
}

export const modalTypeArray = [
  'primary',
  'secondary',
  'system',
  'success',
  'danger',
  'disabled',
];

export const Modal = ({ type, state }: ModalProps) => {
  const backgroundColor = `bg-background-surface-${type}`;
  const textClasses = `text-text-surface-${type} text-fontSize-headline-md`;

  const classNames = {
    area: [
      'w-[380px] h-44 p-4 rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex',
      backgroundColor,
    ].join(' '),
    headerContainer: 'self-stretch justify-start items-start gap-4 inline-flex',
    header: [
      "grow shrink basis-0 font-bold font-['Open Sans'] leading-normal",
      textClasses,
    ].join(' '),
  };
  return (
    <div className={classNames.area}>
      <div className={classNames.headerContainer}>
        <div className={classNames.header}>Headline</div>
      </div>

      <div className="self-stretch text-gray-800 text-base font-normal font-['Open Sans'] leading-normal">
        Text
      </div>

      <div className="w-2 h-2 relative">
        <div className="w-2 h-2 left-0 top-0 absolute shadow"></div>
      </div>

      <div className="self-stretch justify-start items-start inline-flex">
        <div className="grow shrink basis-0 h-7"></div>

        <div className="justify-start items-start flex">
          {state === 1 ? (
            <Button type="primary" />
          ) : (
            <>
              <Button type="primary" />
              <Button type="secondary" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  label: 'Button',
  type: 'primary',
  size: 'md',
  iconPosition: 'start',
};

Modal.propTypes = {
  state: PropTypes.oneOf([1, 2]),
  type: PropTypes.oneOf(modalTypeArray),
};
export default Modal;
