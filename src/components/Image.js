import React from "react";

const Image = ({ src, alt}) => {
  return (
    <span className="img">
      <img src={src} alt={alt} width="250" />
    </span>
  );
};

export default Image;
