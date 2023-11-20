import PropTypes from 'prop-types';

export interface ButtonProps {
  label: string;
  type: string;
}

const buttonTypeArray = [
  'primary',
  'secondary',
  'system',
  'success',
  'danger',
  'disabled',
];

export const Button = ({ label, type }: ButtonProps) => {
  // const className = `bg-button-${type}-active hover:bg-button-${type}-hover`;
  const className = `bg-${type}`;
  return <button className={className}>{label}</button>;
};

Button.defaultProps = {
  label: 'Button',
  type: 'primary',
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(buttonTypeArray).isRequired,
};
