import { useEffect, useState } from "react";
import { TwoSplitColumn, LayoutWithHeader } from "../layouts";
import { SignUpStepOne, SignUpStepTwo } from "../main";
import pageStyles from "./pages.module.scss";
import { useAppContext } from "../../context_api/App/AppProvider";
import { useMediaQuery } from "react-responsive";
import { MODAL_INFO, SIDEBAR_TOGGLE, SiGN_UP_PAYLOAD } from "../../context_api/App/appTypes";
import { useNavigate } from "react-router-dom";
import { Storage } from "../../utils/Storage";
import SmallCustomModal from "../sub-elements/elements/SmallCustomModal";
import { iconPending } from "../../utils/images";

const SignUp = () => {
  const [step, setNextStep] = useState<boolean>(false)

  //Use Media
  const isTab = useMediaQuery({ query: "(max-width: 767px)" });
  

  //Use Context
  const { appContext, setAppContext } = useAppContext();
  const { signupPayload, modalInfo } = appContext;

  //navigation
  const navigate = useNavigate();

  //handler function
  const handleSignupSubmit = (data: any) => {

    //Get movies from local storage by default
    const getXpressUsers = Storage.getItem("xpress-user") || null;

    //Submit sign data to store and notify a modal
    if(!getXpressUsers) {
      Storage.setItem("xpress-user", [data]);
      setAppContext({
          type: MODAL_INFO,
          payload: {
            status: true,
            icon: iconPending,
            titleHeader: "Pending",
            info: "Your registration is awaiting approval from our partnership team",
            faintColor: "#FF9900",
            btnText: 'Done'
          }
      });

      setTimeout(() => {
        navigate("/sign-in");
      }, 3000)
      return true;
    }

    //Check if user already exist and show error
    const checkIfExit = getXpressUsers.filter((x: { id: string; }) => x.id === data.id);
    if(checkIfExit.length > 0) {
        setAppContext({
              type: MODAL_INFO,
              payload: {
                status: true,
                icon: iconPending,
                titleHeader: "Error",
                info: "User with account already exists",
                faintColor: "#FF9900",
                btnText: 'Close'
              }
        });
        setNextStep(false);
        setAppContext({
            type: SiGN_UP_PAYLOAD,
            payload: null
        });
        return false;
    };
    //Update the Loacal Sotorage 
    Storage.setItem("xpress-user", [...getXpressUsers, data]);

    //show modal and redirect to sign in
    //Stop payload to context state and move to next page
    setAppContext({
        type: MODAL_INFO,
        payload: {
          status: true,
          icon: iconPending,
          titleHeader: "Pending",
          info: "Your registration is awaiting approval from our partnership team",
          faintColor: "#FF9900",
          btnText: 'Done'
        }
    });

    setTimeout(() => {
      navigate("/sign-in");
    }, 3000)
  }

  return (
    <LayoutWithHeader variant={`3xl:container mx-auto w-full px-6 sm:px-8 md:px-24 ${pageStyles.authStyle}`}>
      {
        modalInfo.status && (
          <SmallCustomModal icon={modalInfo.icon} titleHeader={modalInfo.titleHeader} info={modalInfo.info} faintColor={modalInfo.faintColor} btnText={modalInfo.btnText}/>
        )
      }
      {!step && <SignUpStepOne onNextStep={setNextStep}/> }
      {step && <SignUpStepTwo onHandleSignupSubmit={handleSignupSubmit} /> }
    </LayoutWithHeader>
  );
};

export default SignUp;
