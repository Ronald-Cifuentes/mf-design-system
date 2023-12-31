import React, { FC } from "react";
import "./Button.css";
import { ButtonProps } from "./interfaces";

export const Button: FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label = "label",
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
