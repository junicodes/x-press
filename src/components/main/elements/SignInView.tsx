import { useState } from "react";
import { Formik } from "formik";
import { SignInFormValue } from "../types";
import DefaultInput from "../../sub-elements/elements/DefaultInput";
import { Logo, FormikButton, DefaultButton } from "../../sub-elements";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { handleFormValidation } from "../../../utils/validations/signInValidation";
import { useNavigate } from "react-router-dom";


const SignInView = () => {
  
  //State
  const [eyePassword, setEyePassword] = useState<"password" | "text">(
    "password"
  );

  //navigation
  const navigate = useNavigate();

  //Handler Function
  const handleFormSubmit = (
    values: SignInFormValue,
    { setSubmitting }: any
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const handlePasswordView = (): void => {
    (eyePassword === "password") ? setEyePassword("text") : setEyePassword("password");
  };

  const handleGoogleLogin = () => {
    setTimeout(() => {
      alert(JSON.stringify('Google Login activated'));
      //Send to API Here for Google Login
    }, 400);
  }
  return (
    <div className={`h-full p-4 md:p-6 flex flex-col sm:px-12 xl:px-12`}>
      <Logo />
      <h2 className="text-2xl text-white">Log into your Business Manager</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={handleFormValidation}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="h-auto py-6 w-full">
            <DefaultInput
              type="email"
              name="email"
              label="Email Address"
              placeHolder="someone@email.com"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              error={errors.email && touched.email && errors.email}
              variant="w-full h-12 mt-3 rounded-sm text-black-300 px-2"
              containerVariant="w-full pb-5 relative"
            />
            <DefaultInput
              type={eyePassword}
              name="password"
              label="Enter Your Password"
              placeHolder="Password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              error={errors.password && touched.password && errors.password}
              variant="w-full h-14 mt-3 rounded-sm text-black-300 px-2"
              containerVariant="w-full pb-5 relative"
              icon={
                eyePassword === "password" ? (
                  <AiFillEyeInvisible
                    onClick={handlePasswordView}
                    className="absolute right-4 w-6 h-6 top-1/2 -mt-2 cursor-pointer"
                    color="#c1c4c9"
                  />
                ) : (
                  <AiFillEye
                    onClick={handlePasswordView}
                    className="absolute right-4 w-6 h-6 top-1/2 -mt-2 cursor-pointer"
                    color="#c1c4c9"
                  />
                )
              }
            />
            <FormikButton
              labelText="SIGN IN"
              variant="border w-full h-12 rounded-sm text-white font-bold hover:bg-white hover:text-black mt-2"
              containerVariant=""
              isDisabled={isSubmitting}
            />
          </form>
        )}
      </Formik>
      <div className="flex flex-col justify-center items-center w-full my-4">
        <p className="text-white cursor-pointer" onClick={() => navigate(`/sign-up`)}>
          <span className="opacity-50">Don’t have an account?&nbsp;&nbsp;</span>
          <span className="font-bold">Sign Up</span>
        </p>
        <p className="text-white mt-6 font-bold cursor-pointer" onClick={() => alert("Forget pass link clicked")}>
          <span>Forget Password?&nbsp;</span>
        </p>
      </div>
      <DefaultButton
        labelText="Log in with Google"
        handleClick={handleGoogleLogin}
        variant="border w-full h-12 rounded-sm bg-white text-gray-500 mt-2 flex flex-row justify-center item-center pt-3"
        containerVariant="relative"
        isDisabled={false}
        icon={<FcGoogle className="w-6 h-6" />}
      />
    </div>
  );
};

export default SignInView;