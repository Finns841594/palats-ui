import PropTypes from 'prop-types';

export interface ButtonProps {
  label: string;
  type: string;
}

export const buttonTypeArray = [
  'primary',
  'secondary',
  'system',
  'success',
  'danger',
  'disabled',
];

export const Button = ({ label, type }: ButtonProps) => {
  
  const backgroundColor = `bg-background-button-${type}-enabled hover:bg-background-button-${type}-hover active:bg-background-button-${type}-pressed`;
  const border = `border-2 border-border-button-${type} rounded-md px-3`
  const text = `text-label-button-${type} text-label-button-${type}-enabled hover:text-label-button-${type}-hover active:text-label-button-${type}-pressed focus:text-label-button-${type}-selected`

  const className = [backgroundColor, border, text].join(' ')
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
