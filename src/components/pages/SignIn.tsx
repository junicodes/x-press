import { useEffect, useState } from "react";
import { TwoSplitColumn, LayoutWithHeader } from "../layouts";
import { SignInView } from "../main";
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
  const handleSigninSubmit = (data: any) => {
    //Get movies from local storage by default
    const getXpressUsers = Storage.getItem("xpress-user") || null;

    //Submit sign data to store and notify a modal
    if(!getXpressUsers) {
      setAppContext({
          type: MODAL_INFO,
          payload: {
            status: true,
            icon: iconPending,
            titleHeader: "Pending",
            info: "User with account does not exist",
            faintColor: "#FF9900",
            btnText: 'Close'
          }
      });
      return false;
    }

    //Check if user already exist and show error
    const checkIfExit = getXpressUsers.filter((x: { business_email_address: string, password: string  }) => x.business_email_address === data.business_email_address && x.password === data.password);

    if(checkIfExit.length > 0) {
        setAppContext({
            type: SiGN_UP_PAYLOAD,
            payload: checkIfExit[0]
        });
        //redirect to dashboard
        navigate('/dashboard')
        return true;
    };

    setAppContext({
        type: MODAL_INFO,
        payload: {
          status: true,
          icon: iconPending,
          titleHeader: "Pending",
          info: "User email or password are incorrect",
          faintColor: "#FF9900",
          btnText: 'Close'
        }
    });
  }

  return (
    <LayoutWithHeader variant={`3xl:container mx-auto w-full px-6 sm:px-8 md:px-24 ${pageStyles.authStyle}`}>
      {
        modalInfo.status && (
          <SmallCustomModal icon={modalInfo.icon} titleHeader={modalInfo.titleHeader} info={modalInfo.info} faintColor={modalInfo.faintColor} btnText={modalInfo.btnText}/>
        )
      }
      {<SignInView onHandleSigninSubmit={handleSigninSubmit} /> }
    </LayoutWithHeader>
  );
};

export default SignUp;
