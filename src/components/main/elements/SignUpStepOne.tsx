import React, { ChangeEvent, useState } from "react";
import { Formik } from "formik";
import { SignUpStepOneFormValue, SignUpStepOneFromData } from "../types";
import {
  FormikButton,
  SelectDropDown,
  DefaultImage,
  DefaultInput,
} from "../../sub-elements";
import {
  handleFormSignUpStepOneValidation,
  validateSignUpFile,
} from "../../../utils/validations/signInValidation";
import { useNavigate } from "react-router-dom";
import mainStyles from "../main.module.scss";
import { BusinessCategory } from "../../../utils/businessCategory";
import { iconPending, simpleLineIconsCloudDownload } from "../../../utils/images";
import { GiPaperClip } from "react-icons/gi";
import { MODAL_INFO, SiGN_UP_PAYLOAD } from '../../../context_api/App/appTypes';
import { useAppContext } from "../../../context_api/App/AppProvider";

const SignUpStepOne = ({onNextStep}: {onNextStep: (payload: boolean) => void}) => {

  //Use Context
  const {appContext, setAppContext} = useAppContext();

  const { signupPayload } = appContext;

  //State
  const [formData, setFormData] = useState<SignUpStepOneFromData>({
    image: null,
    business_category: "",
  });
  //Variable
  const initialValueData = {
    business_name: "",
    business_email_address: "",
    business_phone_number: "",
    account_no: "",
  };
  //navigation
  const navigate = useNavigate();

  //Handler Function
  const handleFormSubmit = (
    values: SignUpStepOneFormValue,
    { setSubmitting }: any
  ) => {
    //Validate image and business category file
    if(formData.business_category === "") {
      setSubmitting(false);
      return setAppContext({
        type: MODAL_INFO,
        payload: {
          status: true,
          icon: iconPending,
          titleHeader: "Error",
          info: "Please select a category to continue",
          faintColor: "#FF9900",
          btnText: 'Close'
        }
      });
    }
    if(!formData.image) {
      setSubmitting(false);
      return setAppContext({
        type: MODAL_INFO,
        payload: {
          status: true,
          icon: iconPending,
          titleHeader: "Error",
          info: "Please select an image to continue",
          faintColor: "#FF9900",
          btnText: 'Close'
        }
      });
    }
    const data = {...values, ...formData}
    //Stop payload to context state and move to next page
    setAppContext({
      type: SiGN_UP_PAYLOAD,
      payload: data
    });
    setSubmitting(false);
    //Go to step 2 sign up
    onNextStep(true)
  };

  const handleSelectChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: string
  ) => {
    setFormData({ ...formData, ["business_category"]: JSON.parse(data) });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Validation of file inpute
    const isError = validateSignUpFile(e.target.files);
    if (isError !== "") {
      return  setAppContext({
        type: MODAL_INFO,
        payload: {
          status: true,
          icon: iconPending,
          titleHeader: "Error",
          info: "Please select a logo image to continue",
          faintColor: "#FF9900",
          btnText: 'Close'
        }
      });
    }
    setFormData({
      ...formData,
      ["image"]: e.target.files && e.target.files[0],
    });
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
        <p className="text-sm text-primary">Business Information</p>
      </div>
      <Formik
        initialValues={initialValueData}
        validate={handleFormSignUpStepOneValidation}
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
              name="business_name"
              label="Business name"
              placeHolder=""
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.business_name}
              error={
                errors.business_name &&
                touched.business_name &&
                errors.business_name
              }
              variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
              containerVariant="w-full pb-5 relative"
            />
            <DefaultInput
              type="email"
              name="business_email_address"
              label="Business Email Address"
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
            <DefaultInput
              type="text"
              name="business_phone_number"
              label="Business Phone Number"
              placeHolder=""
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.business_phone_number}
              error={
                errors.business_phone_number &&
                touched.business_phone_number &&
                errors.business_phone_number
              }
              variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
              containerVariant="w-full pb-5 relative"
            />
            <SelectDropDown
              label="Business Category"
              placeHolder=""
              onHandleChange={handleSelectChange}
              value={formData.business_category}
              error={``}
              options={BusinessCategory}
              variant={`w-full relative h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2 flex flex-row justify-start items-center`}
              containerVariant="w-full pb-5 relative cursor-pointer"
            />
            <DefaultInput
              type="text"
              name="account_no"
              label="Account No"
              placeHolder=""
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.account_no}
              error={
                errors.account_no && touched.account_no && errors.account_no
              }
              variant="w-full h-12 mt-1 border border-custom-gray-two rounded-md text-black-300 px-2"
              containerVariant="w-full pb-5 relative"
            />
            <label className="text-custom-gray-three text-sm font-medium">
              Image (Logo)
            </label>
            <div className="border border-dashed border-custom-gray-four h-52 w-full p-6 flex flex-row justify-center items-center rounded-sm">
              <div className="flex flex-col justify-center items-center">
                <DefaultImage
                  src={simpleLineIconsCloudDownload}
                  variant={"w-10 h-9"}
                  handleChange={() => {}}
                  alt="Image Upload"
                  value={""}
                  containerVariant={""}
                />
                <p className="text-sm text-custom-gray mt-3">
                  Drag here or click the button below to upload
                </p>
                <div className="flex flex-col justify-center items-center my-3">
                  <label
                    htmlFor="image-file"
                    className="flex justify-center cursor-pointer items-center text-md border w-36 my-1 rounded-md h-8 bg-primary text-white"
                  >
                    <GiPaperClip className="w-5 h-5 mr-1" />
                    Choose File
                  </label>
                  <input
                    onChange={handleImageChange}
                    accept="image/jpeg"
                    className="hidden"
                    id="image-file"
                    type={"file"}
                  />
                  <p className="text-xs truncate w-4/6 text-center text-green-600">
                    {formData?.image?.name}
                  </p>
                  <p className="text-md text-custom-dark-purple mt-3">
                    Maximum upload size: 10MB (.jpg)
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center mt-10 space-x-3">
              <FormikButton
                labelText="Next"
                variant="border border-custom-gray-two w-full h-14 rounded-md text-white font-normal bg-primary hover:bg-primary_hover"
                containerVariant="w-5/12"
                isDisabled={isSubmitting}
              />
              <p className="text-xs text-custom-gray">Step 1 of 2</p>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpStepOne;
