import React from "react";
// import cx from "clsx";
import "./styles.css";

const Button = ({ children, className, variant, ...rest }) => {
  const classes = cx(
    styles.Button,
    {
      [styles.ButtonSecondary]: variant === "secondarys",
    },
    className
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export { Button };
