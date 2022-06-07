import { SignInErrorType, SignInFormValue, SignUpErrorType, SignUpFormValue } from "../../components/main/types";

//Validation
export const handleFormSignInValidation = (values: SignInFormValue): SignInErrorType => {
    const errors: SignInErrorType = {};
   
    if (!values.email) {
      errors.email = "Email field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }else if(!values.password) {
      errors.password = "Password field is required";
    }else if(values.password.length < 6) {
      errors.password = "Password shoud greater than 6";
    }
    return errors;
};

export const handleFormSignUpValidation = (values: SignUpFormValue): SignUpErrorType => {
  const errors: SignUpErrorType = {};
 
  if(!values.firstname){
    errors.firstname = "Firstname field is required";
  } else if (!values.lastname){
    errors.lastname = "Lastname field is required";
  } else if (!values.email) {
    errors.email = "Email field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }else if(!values.password) {
    errors.password = "Password field is required";
  }else if(values.password.length < 6) {
    errors.password = "Password shoud greater than 6";
  }
  return errors;
};