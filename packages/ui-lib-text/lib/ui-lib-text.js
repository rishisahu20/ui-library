import React from "react";
// import cx from "clsx";
import "./styles.css";

const Text = ({ children, className, as = "p", variant, ...rest }) => {
  // const textVariant = styles[variant] || "Body";
  // const classes = cx(
  //   styles.Text,
  //   {
  //     [textVariant]: variant,
  //   },
  //   className
  // );
  return <p className={variant}>{children}</p>;
};

export { Text };
