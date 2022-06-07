import { SignInFormValue } from "../../components/main/types";

//Validation
export const handleFormValidation = (values: SignInFormValue): { email?: string } => {
    const errors: { email?: string, password?: string } = {};
  
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