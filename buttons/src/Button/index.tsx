import React from "react";

import classNames from "classnames";

import "./Button.scss";

interface IButtonProps {
  type?: "bootstrap" | "material" | "block" | "pill";
  color?: "default" | "primary" | "secondary" | "success" | "danger";
  isOutline?: boolean;
  size?: "default" | "small" | "large";
}

const Button: React.FC<IButtonProps> = ({
  type,
  color,
  isOutline,
  size,
  children,
}) => {
  const isBootstrap = type === "bootstrap";
  const isMaterial = type === "material";
  const isBlock = type === "block";
  const isPill = type === "pill";

  const isDefault = color === "default";
  const isPrimary = color === "primary";
  const isSecondary = color === "secondary";
  const isSuccess = color === "success";
  const isDanger = color === "danger";

  const isSizeSmall = size === "small";
  const isSizeLarge = size === "large";

  const btnPrefix = isBootstrap
    ? "bs"
    : isMaterial
    ? "mat"
    : isBlock
    ? "block"
    : isPill
    ? "pill"
    : undefined;

  if (!btnPrefix) {
    throw new Error("Invalid button type");
  }

  const className = classNames(
    `${btnPrefix}-btn`,
    // colors
    {
      [`${btnPrefix}-btn-primary`]: isPrimary && !isOutline,
      [`${btnPrefix}-btn-secondary`]: isSecondary && !isOutline,
      [`${btnPrefix}-btn-success`]: isSuccess && !isOutline,
      [`${btnPrefix}-btn-danger`]: isDanger && !isOutline,
    },
    // outline colors
    {
      [`${btnPrefix}-btn--outline`]: isDefault && isOutline,
      [`${btnPrefix}-btn-primary--outline`]: isPrimary && isOutline,
      [`${btnPrefix}-btn-secondary--outline`]: isSecondary && isOutline,
      [`${btnPrefix}-btn-success--outline`]: isSuccess && isOutline,
      [`${btnPrefix}-btn-danger--outline`]: isDanger && isOutline,
    },
    // sizes
    {
      [`${btnPrefix}-btn--small`]: isSizeSmall,
      [`${btnPrefix}-btn--large`]: isSizeLarge,
    }
  );

  return <button className={className}>{children}</button>;
};

Button.defaultProps = {
  color: "default",
  type: "bootstrap",
  isOutline: false,
  size: "default",
};

export default Button;
