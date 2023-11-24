import PropTypes from 'prop-types';
import { Button } from './Button';
interface ModalProps {
  type: string;
  state?: number;
  headline: string;
  text: string;
  buttonOneLabel: string;
  buttonOneOnClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonTwoLabel?: string;
  buttonTwoOnClick?: React.MouseEventHandler<HTMLButtonElement>;
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
  state,
  headline,
  text,
  buttonOneLabel,
  buttonOneOnClick,
  buttonTwoLabel,
  buttonTwoOnClick,
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
    buttonContainer: 'self-stretch justify-start items-start inline-flex',
    buttonPlaceHolder: 'grow shrink basis-0 h-7',
    buttonsBlock: 'self-stretch justify-start items-start gap-8 inline-flex',
  };
  return (
    <div className={classNames.area}>
      <div className={classNames.headerContainer}>
        <div className={classNames.header}>{headline}</div>
      </div>

      <div className={classNames.text}>{text}</div>

      <div className={classNames.buttonContainer}>
        <div className={classNames.buttonPlaceHolder}></div>
        <div className={classNames.buttonsBlock}>
          {state === 2 ? (
            <>
              <Button
                type="secondary"
                label={buttonTwoLabel}
                onClickFn={buttonTwoOnClick}
              />
              <Button
                type={type}
                label={buttonOneLabel}
                onClickFn={buttonOneOnClick}
              />
            </>
          ) : (
            <Button
              type={type}
              label={buttonOneLabel}
              onClickFn={buttonOneOnClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  type: 'primary',
  state: 1,
  headline: 'Headline',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ad facilis blanditiis, aliquid repellendus quia dicta debitis enim illo culpa?',
  buttonOneLabel: 'Click',
  buttonOneOnClick: () => null,
};

Modal.propTypes = {
  type: PropTypes.oneOf(modalTypeArray).isRequired,
  state: PropTypes.oneOf([1, 2]).isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonOneLabel: PropTypes.string.isRequired,
  buttonTwoLabel: PropTypes.string,
};
