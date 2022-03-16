import React from "react";
import "./styles.css";

const Button = ({ children, className, variant, ...rest }) => {
  console.log("variant", variant);
  return (
    <button {...rest} className={variant}>
      {children}
    </button>
  );
};

export { Button };
