import React from "react";
import { appLogo } from "../../../utils/images";
import DefaultImage from "./DefaultImage";

const Logo = () => {
  return (
    <DefaultImage
      src={appLogo}
      variant={"w-32 h-3"}
      handleChange={() => {}}
      alt="SME LOGO"
      value={""}
      containerVariant={"mb-20 mt-10"}
    />
  );
};

export default Logo;
