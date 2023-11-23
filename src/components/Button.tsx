import PropTypes from 'prop-types';
import { TrailingIcon } from './TrailingIcon';

export interface ButtonProps {
  label: string;
  type: string;
  size?: string;
  Icon?: any;
  iconPosition?: string;
  onClickFn?: React.MouseEventHandler<HTMLButtonElement>;
}

export const buttonTypeArray = [
  'primary',
  'secondary',
  'system',
  'success',
  'danger',
  'disabled',
];

// icon, scale
export const Button = ({
  label,
  type,
  size,
  Icon,
  iconPosition = 'start',
  onClickFn,
}: ButtonProps) => {
  const backgroundColor = `bg-background-button-${type}-enabled hover:bg-background-button-${type}-hover active:bg-background-button-${type}-pressed`;
  const borderSettings = `border border-2 border-border-button-${type}`;
  const text = `text-label-button-${type} text-button-${size} text-label-button-${type}-enabled hover:text-label-button-${type}-hover active:text-label-button-${type}-pressed focus:text-label-button-${type}-selected`;

  // the string part of the classNames below are from Figma design file
  const buttonClassNamesMD = {
    area: 'w-[116px] h-10 justify-start items-start inline-flex',
    border: [
      'px-2 py-1.5 rounded-lg justify-center items-center flex',
      backgroundColor,
      borderSettings,
    ].join(' '),
    leftIcon: 'w-6 h-6 relative',
    labelDiv: 'px-2 py-0.5 justify-start items-start gap-2 flex',
    label: text,
    rightIcon: 'w-6 h-6 relative',
  };
  const buttonClassNamesSM = {
    area: 'w-[88px] h-8 justify-start items-start inline-flex',
    border: [
      'px-2 py-0.5 rounded justify-center items-center flex',
      backgroundColor,
      borderSettings,
    ].join(' '),
    leftIcon: 'w-6 h-6 relative',
    labelDiv: 'px-2 py-0.5 justify-center items-center gap-2 flex',
    label: text,
    rightIcon: '',
  };
  let buttonClassName = null;
  switch (size) {
    case 'sm':
      buttonClassName = buttonClassNamesSM;
      break;
    default:
      buttonClassName = buttonClassNamesMD;
  }

  return (
    <button className={buttonClassName.area} onClick={onClickFn}>
      <div className={buttonClassName.border}>
        <div className={buttonClassName.leftIcon}>
          {Icon && iconPosition === 'start' ? (
             <Icon className={`fill-icon-button-${type} fill-icon-button-${type}-enabled hover:fill-icon-button-${type}-hover focus:fill-icon-button-${type}-selected active:fill-icon-button-${type}-pressed`}/>
          ) : (
            <TrailingIcon type={type} flip={true} />
          )}
        </div>
        <div className={buttonClassName.labelDiv}>
          <div className={buttonClassName.label}>{label}</div>
        </div>
        <div className={buttonClassName.rightIcon}>
          {Icon && iconPosition === 'end' ? (
            <Icon className={`fill-icon-button-${type} fill-icon-button-${type}-enabled hover:fill-icon-button-${type}-hover focus:fill-icon-button-${type}-selected active:fill-icon-button-${type}-pressed`}/>
          ) : (
            <TrailingIcon type={type} />
          )}
        </div>
      </div>
    </button>
  );
};

Button.defaultProps = {
  label: 'Button',
  type: 'primary',
  size: 'md',
  iconPosition: 'start',
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(buttonTypeArray).isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  iconPosition: PropTypes.oneOf(['start', 'end']),
};
