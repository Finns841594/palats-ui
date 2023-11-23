import PropTypes from 'prop-types';
import { Button } from './Button';
interface ModalProps {
  type: string;
  state?: number;
  buttonOneLabel: string;
  buttonTwoLabel?: string;
}

export const modalTypeArray = [
  'primary',
  'secondary',
  'system',
  'success',
  'danger',
  'disabled',
];

export const Modal = ({
  type,
  state = 1,
  buttonOneLabel,
  buttonTwoLabel,
}: ModalProps) => {
  const backgroundColor = `bg-background-surface-${type}`;
  const headlineClasses = `text-text-surface-${type} text-headline-md`;
  const textClasses = `text-text-surface-${type} text-text-md`;

  const classNames = {
    area: [
      'w-[600px] h-[400px] p-4 rounded-lg shadow-modal flex-col justify-start items-start gap-4 inline-flex',
      backgroundColor,
    ].join(' '),
    headerContainer: 'self-stretch justify-start items-start gap-4 inline-flex',
    header: [
      'grow shrink basis-0 leading-normal text-start',
      headlineClasses,
    ].join(' '),
    text: [
      'self-stretch leading-normal text-start h-[260px]',
      textClasses,
    ].join(' '),
  };
  return (
    <div className={classNames.area}>
      <div className={classNames.headerContainer}>
        <div className={classNames.header}>Headline</div>
      </div>

      <div className={classNames.text}>Text</div>

      <div className="self-stretch justify-start items-start gap-4 inline-flex">
        <div className="grow shrink basis-0 h-7"></div>
        <div className="self-stretch justify-start items-start gap-8 inline-flex px-4">
          {state === 2 ? (
            <>
              <Button type="secondary" label={buttonTwoLabel} />
              <Button type={type} label={buttonOneLabel} />
            </>
          ) : (
            <Button type={type} label={buttonOneLabel} />
          )}
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  type: 'primary',
  state: 1,
  buttonOneLabel: 'Click',
};

Modal.propTypes = {
  type: PropTypes.oneOf(modalTypeArray).isRequired,
  state: PropTypes.oneOf([1, 2]).isRequired,
  buttonOneLabel: PropTypes.string.isRequired,
  buttonTwoLabel: PropTypes.string,
};
