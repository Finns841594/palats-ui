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
  
  const className = `px-3 bg-background-button-${type}-enabled hover:bg-background-button-${type}-hover active:bg-background-button-${type}-pressed`;
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
