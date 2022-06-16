import React, { ChangeEvent, useState } from "react";
import { Formik } from "formik";
import { SignUpStepOneFormValue, SignUpStepTwoFormValue, SignUpStepTwoFromData } from "../types";
import {
  FormikButton,
  SelectDropDown,
  DefaultImage,
  DefaultInput,
} from "../../sub-elements";
import {
  handleFormSignUpStepTwoValidation,
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



const SignUpStepTwo = ({onHandleSignupSubmit}: {onHandleSignupSubmit: (data: any) => void}) => {

  //Use Context
  const {appContext, setAppContext} = useAppContext();

  const { signupPayload } = appContext;

  //State
  const [eyePassword, setEyePassword] = useState<{password: "password" | "text", confirm_pasword: "password" | "text"}>({
    password: "password",
    confirm_pasword: "password"
  });
  
  const [formData, setFormData] = useState<SignUpStepTwoFromData>({
    state: "",
  });
  //Variable
  const initialValueData = {
    house_no: "",
    street: "",
    city: "",
    contact_name: "",
    contact_phone_number: "",
    contact_email_adderess: "",
    password: "",
    confirm_password: ""
  };
  //navigation
  const navigate = useNavigate();

  //Handler Function
  const handlePasswordView = (): void => {
    setEyePassword({...eyePassword, ['password']: eyePassword.password === "password" ? "text" : 'password'})
  };
  const handleConfirmPasswordView = (): void => {
    setEyePassword({...eyePassword, ['confirm_pasword']: eyePassword.confirm_pasword === "password" ? "text" : 'password'})
  };

  const handleFormSubmit = (
    values: SignUpStepTwoFormValue,
    { setSubmitting }: any
  ) => {
    //Validate image and business category file
    if(formData.state === "") {
      setSubmitting(false);
      return setAppContext({
        type: MODAL_INFO,
        payload: {
          status: true,
          icon: iconPending,
          titleHeader: "Error",
          info: "Please select a state to continue",
          faintColor: "#FF9900",
          btnText: 'Close'
        }
      });
    }
    
    setTimeout(() =>{
        //Join the step one and step two state together
        const data = {...{id: `user-id-${signupPayload?.business_email_address}-${signupPayload?.business_name}}`}, ...values, ...signupPayload}
        //Stop payload to context state and move to next page
        setAppContext({
            type: SiGN_UP_PAYLOAD,
            payload: data
        });

        setSubmitting(false);
        //Set tp parent component to store to memery
        onHandleSignupSubmit(data)
    }, 2000)
  };

  const handleSelectChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: string
  ) => {
    setFormData({ ...formData, ["state"]: JSON.parse(data) });
  };

  return (
    <div
      className={`p-4 px-8 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 mx-auto bg-white rounded-md ${mainStyles.authView}`}
    >
      <div>
        <h2 className="text-2xl text-primary">Welcome to Xpress Rewards</h2>
        <p className="text-xs text-custom-gray mt-1">
          Complete the form below to get started
        </p>
        <hr className="my-4"></hr>
        <p className="text-sm text-primary">Business Address</p>
      </div>
      <Formik
        initialValues={initialValueData}
        validate={handleFormSignUpStepTwoValidation}
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
            <div className="flex justify-start space-x-4">
                <DefaultInput
                    type="text"
                    name="house_no"
                    label="House Number"
                    placeHolder=""
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.house_no}
                    error={
                        errors.house_no &&
                        touched.house_no &&
                        errors.house_no
                    }
                    variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
                    containerVariant="w-4/12 pb-5 relative"
                />
                <DefaultInput
                    type="text"
                    name="street"
                    label="Street"
                    placeHolder=""
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.street}
                    error={
                        errors.street &&
                        touched.street &&
                        errors.street
                    }
                    variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
                    containerVariant="w-10/12 pb-5 relative"
                />
            </div>
            <div className="flex justify-start space-x-4">
                <DefaultInput
                    type="text"
                    name="city"
                    label="City"
                    placeHolder=""
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.city}
                    error={
                        errors.city &&
                        touched.city &&
                        errors.city
                    }
                    variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
                    containerVariant="w-3/6 pb-5 relative"
                />
               <SelectDropDown
                label="State"
                placeHolder=""
                onHandleChange={handleSelectChange}
                value={formData.state}
                error={``}
                options={State}
                variant={`w-full relative h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2 flex flex-row justify-start items-center`}
                containerVariant="w-3/6 pb-5 relative cursor-pointer"
                />
            </div>
            <p className="text-sm text-primary my-2">Contact Person Information</p>
            <DefaultInput
                type="text"
                name="contact_name"
                label="Contact Name"
                placeHolder=""
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.contact_name}
                error={
                    errors.contact_name &&
                    touched.contact_name &&
                    errors.contact_name
                }
                variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
                containerVariant="w-full pb-5 relative"
            />
            <DefaultInput
                type="text"
                name="contact_phone_number"
                label="Contact Phone Number"
                placeHolder=""
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.contact_phone_number}
                error={
                    errors.contact_phone_number &&
                    touched.contact_phone_number &&
                    errors.contact_phone_number
                }
                variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
                containerVariant="w-full pb-5 relative"
            />
            <DefaultInput
                type="text"
                name="contact_email_adderess"
                label="Contact Email Address"
                placeHolder=""
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.contact_email_adderess}
                error={
                    errors.contact_email_adderess &&
                    touched.contact_email_adderess &&
                    errors.contact_email_adderess
                }
                variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
                containerVariant="w-full pb-5 relative"
            />
            <p className="text-sm text-primary my-2">Password</p>
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
                <DefaultInput
                    type={eyePassword.confirm_pasword}
                    name="confirm_password"
                    label="Confirm Password"
                    placeHolder="Password"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.confirm_password}
                    error={errors.confirm_password && touched.confirm_password && errors.confirm_password}
                    variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
                    containerVariant="w-full pb-5 relative"
                    icon={
                        eyePassword.confirm_pasword === "password" ? (
                        <AiFillEyeInvisible
                            onClick={handleConfirmPasswordView}
                            className="absolute right-4 w-6 h-6 top-1/2 -mt-2 cursor-pointer"
                            color="#c1c4c9"
                        />
                        ) : (
                        <AiFillEye
                            onClick={handleConfirmPasswordView}
                            className="absolute right-4 w-6 h-6 top-1/2 -mt-2 cursor-pointer"
                            color="#c1c4c9"
                        />
                        )
                    }
                />
            </div>
            <div className="flex flex-row justify-start items-center mt-10 space-x-3">
              <FormikButton
                labelText={!isSubmitting ? "Submit" : `Loading`}
                variant="border border-custom-gray-two w-full h-14 rounded-md text-white font-normal bg-primary hover:bg-primary_hover"
                containerVariant="w-5/12"
                isDisabled={isSubmitting}
              />
              <p className="text-xs text-custom-gray">Step 2 of 2</p>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpStepTwo;
