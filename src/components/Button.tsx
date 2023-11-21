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
  const className = `bg-background-button-${type}-enabled hover:bg-background-button-primary-hover active:bg-background-button-primary-pressed`;
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
