import React from "react";

import { ButtonProps } from "@/Button/Button.types";

const Button: React.FC<ButtonProps> = props => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};

export default Button;
