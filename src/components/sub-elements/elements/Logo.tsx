import React from "react";
import { appLogo } from "../../../utils/images";
import DefaultImage from "./DefaultImage";

const Logo = () => {
  return (
    <DefaultImage
      src={appLogo}
      variant={"w-24 h-6 sm:w-36 sm:h-8"}
      handleChange={() => {}}
      alt="XPRESS LOGO"
      value={""}
      containerVariant={"flex flex-row justify-center py-3"}
    />
  );
};

export default Logo;
