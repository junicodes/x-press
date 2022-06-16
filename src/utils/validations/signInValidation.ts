import {
  SignInErrorType,
  SignInFormValue,
  SignUpErrorStepOneType,
  SignUpErrorStepTwoType,
  SignUpStepOneFormValue,
  SignUpStepTwoFormValue,
} from "../../components/main/types";

//Validation
export const handleFormSignInValidation = (
  values: SignInFormValue
): SignInErrorType => {
  const errors: SignInErrorType = {};

  if (!values.business_email_address) {
    errors.business_email_address = "Email address field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.business_email_address)) {
    errors.business_email_address = "Invalid email address";
  } else if (!values.password) {
    errors.password = "Password field is required";
  } else if (values.password.length < 6) {
    errors.password = "Password shoud greater than 6";
  }
  return errors;
};

export const handleFormSignUpStepOneValidation = (
  values: SignUpStepOneFormValue
): SignUpErrorStepOneType => {

  const errors: SignUpErrorStepOneType = {};

  if (!values.business_name) {
    errors.business_name = "Business name is required";
  } else if (!values.business_email_address) {
    errors.business_email_address = "Email field is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      values.business_email_address
    )
  ) {
    errors.business_email_address = "Invalid email address";
  } else if (!values.business_phone_number) {
    errors.business_phone_number = "Business phone number is required";
  } else if (!values.account_no) {
    errors.account_no = "Account number is required";
  }
  return errors;
};

export const handleFormSignUpStepTwoValidation = (
  values: SignUpStepTwoFormValue
): SignUpErrorStepTwoType => {

  const errors: SignUpErrorStepTwoType = {};

  if (!values.house_no) {
    errors.house_no = "House number field is required";
  } else if (!values.street) {
    errors.street = "Street field is required";
  } else if (!values.city) {
    errors.city = "City field is required";
  } else if (!values.contact_name) {
    errors.contact_name = "Contact name field is required";
  } else if (!values.contact_name) {
    errors.contact_phone_number = "Contact phone number field is required";
  } else if (!values.contact_email_adderess) {
    errors.contact_email_adderess = "Contact email field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.contact_email_adderess)) {
    errors.contact_email_adderess = "Invalid contact email address";
  } else if (!values.password) {
    errors.password = "Password field is required";
  } else if (values.password.length < 6) {
    errors.password = "Password shoud greater than 6";
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password = "Password does not match";
  }
  return errors;
};

export const validateSignUpFile = (file: any): string => {

  if (file.length === 0) {
    return "No image file selected";
  }
  if(file[0].size > 10000000) {
    return "File size too large"
  }
  return ""
}