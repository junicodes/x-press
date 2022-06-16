import React, { ChangeEvent, useState } from "react";
import { Formik } from "formik";
import { SignInFormValue } from "../types";
import {
  FormikButton,
  SelectDropDown,
  DefaultImage,
  DefaultInput,
} from "../../sub-elements";
import {
  handleFormSignInValidation,
  validateSignUpFile,
} from "../../../utils/validations/signInValidation";
import { useNavigate } from "react-router-dom";
import mainStyles from "../main.module.scss";
import { State } from "../../../utils/state";
import { iconPending, simpleLineIconsCloudDownload } from "../../../utils/images";
import { GiPaperClip } from "react-icons/gi";
import { AiFillEye, AiFillEyeInvisible, AiOutlineLoading3Quarters } from "react-icons/ai";
import { MODAL_INFO, SiGN_UP_PAYLOAD } from '../../../context_api/App/appTypes';
import { useAppContext } from "../../../context_api/App/AppProvider";



const SignInView = ({onHandleSigninSubmit}: {onHandleSigninSubmit: (data: any) => void}) => {

  //Use Context
  const {appContext, setAppContext} = useAppContext();

  //State
  const [eyePassword, setEyePassword] = useState<{password: "password" | "text"}>({
    password: "password",
  });

  const { signupPayload } = appContext;

  //Variable
  const initialValueData = {
    business_email_address: "",
    password: "",
  };

  //navigation
  const navigate = useNavigate();

  //Handler Function
  const handlePasswordView = (): void => {
    setEyePassword({...eyePassword, ['password']: eyePassword.password === "password" ? "text" : 'password'})
  };
  

  const handleFormSubmit = (
    values: SignInFormValue,
    { setSubmitting }: any
  ) => {
    //Validate image and business category file
    setTimeout(() =>{
        //Validate user an access dashboard
        setSubmitting(false);

        //Set tp parent component to store to memery
        onHandleSigninSubmit(values)
        
    }, 2000)
  };


  return (
    <div
      className={`p-4 px-8 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 mx-auto bg-white rounded-md ${mainStyles.authView}`}
    >
      <div>
        <h2 className="text-2xl text-primary">Welcome Back!</h2>
        <p className="text-xs text-custom-gray mt-1">
        Sign in to your Xpress reward partner’s dashboard
        </p>
        <hr className="my-4"></hr>
      </div>
      <Formik
        initialValues={initialValueData}
        validate={handleFormSignInValidation}
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
          <form onSubmit={handleSubmit} className="pb-6 pt-2 w-full">
            <DefaultInput
                type="text"
                name="business_email_address"
                label="Email Address"
                placeHolder=""
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.business_email_address}
                error={
                    errors.business_email_address &&
                    touched.business_email_address &&
                    errors.business_email_address
                }
                variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
                containerVariant="w-full pb-5 relative"
            />
            <div>
                <DefaultInput
                type={eyePassword.password}
                name="password"
                label="Password"
                placeHolder="Password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password && errors.password}
                variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
                containerVariant="w-full pb-5 relative"
                icon={
                    eyePassword.password === "password" ? (
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
            </div>
            <p className="text-sm text-custom-gray mt-1">
              Forgot Password? <span className="text-primary" onClick={() => navigate("/reset-password")}>Reset it</span>
            </p>
            <div className="flex flex-row justify-start items-center mt-5">
              <FormikButton
                labelText={!isSubmitting ? "Sign in" : `Loading`}
                variant="border border-custom-gray-two w-full h-14 rounded-md text-white font-normal bg-primary hover:bg-primary_hover"
                containerVariant="w-full"
                isDisabled={isSubmitting}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignInView;
