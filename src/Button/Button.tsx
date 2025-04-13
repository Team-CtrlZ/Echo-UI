import { ButtonProps } from "@/Button/Button.types";
import React from "react";

const Button: React.FC<ButtonProps> = props => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};

export default Button;
