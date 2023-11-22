import { cloneElement } from "react";

const __inputIcon = ({ icon }: InputIconProps): JSX.Element => {
  return cloneElement(icon, {
    className: "text-xl text-textGray",
  });
};

export default __inputIcon;
