import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const startIconLibrary = () => {
  library.add(faXmark, faChevronRight);
};

const Icon = ({ icon, size, color, style, className, ...rest }) => {
  return (
    <FontAwesomeIcon
      {...rest}
      className={className}
      style={style}
      color={color}
      size={size}
      icon={icon}
    ></FontAwesomeIcon>
  );
};

export default Icon;
