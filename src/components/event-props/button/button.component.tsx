import { ButtonProps } from './button.types';

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 1)}>Click Me</button>;
};

export default Button;
