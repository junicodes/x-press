import React from "react";
import { DefaultImageProps } from "../interface";

const DefaultImage = ({
  src,
  handleChange,
  variant,
  containerVariant,
  alt,
}: DefaultImageProps) => {
  return (
    <div className={containerVariant}>
      <img src={src} className={variant} onChange={handleChange} alt={alt} />
    </div>
  );
};

export default DefaultImage;
