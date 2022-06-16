//interface for all sub components 

import { ChangeEvent, MouseEvent } from "react";

export interface DefaultInputProps {
  type: string;
  name: string;
  label: string
  placeHolder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string | false | undefined;
  variant: string;
  containerVariant: string;
  icon?: any
}

export interface SelectDropDownProps {
  label: string
  placeHolder: string;
  onHandleChange: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, payload: string) => void;
  value: string;
  error: string | false | undefined;
  options: {}[];
  variant: string;
  containerVariant: string;
  optionHeight?: string
}

export interface DefaultImageProps {
  src: string;
  alt: string;
  handleChange: (e: ChangeEvent<HTMLImageElement>) => void;
  value: string;
  variant: string;
  containerVariant: string;
}

export interface DefaultButtonProps {
  labelText: string;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  isDisabled: boolean;
  variant: string;
  containerVariant: string;
  icon?: any
}

export interface FormikButtonProps {
  labelText: string;
  isDisabled: boolean;
  variant: string;
  containerVariant: string;
  icon?: any
}