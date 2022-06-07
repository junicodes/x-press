import { useEffect } from "react";
import { TwoSplitColumn } from "../layouts/elements/TwoSplitColumn";
import { Wallpaper, SignUpView } from "../main";
import pageStyles from "./pages.module.scss";
import { useAppContext } from "../../context_api/App/AppProvider";
import { useMediaQuery } from "react-responsive";
import { SIDEBAR_TOGGLE } from "../../context_api/App/appTypes";

const SignUp = () => {
  //Use Media
  const isTab = useMediaQuery({ query: "(max-width: 767px)" });

  //Use Context
  const { appContext, setAppContext } = useAppContext();
  const { sideBarToggle } = appContext;

  //Effect
  useEffect(() => {
    console.log(isTab, "fam");
    setAppContext({
      type: SIDEBAR_TOGGLE,
      payload: isTab ? false : true,
    });
  }, [isTab, setAppContext]);

  return (
    <section className={`3xl:container mx-auto w-full ${pageStyles.authStyle}`}>
      <TwoSplitColumn
        leftVariant={`${pageStyles.leftVariant} w-full bg-primary md:w-5/12 lg:w-2/6`}
        rightVariant={`${
          pageStyles.rightVariant
        } md:w-7/12 lg:w-4/6 md:rounded-l-xl
           ${sideBarToggle ? "block" : "hidden"}
          `}
      >
        <SignUpView />
        <Wallpaper />
      </TwoSplitColumn>
    </section>
  );
};

export default SignUp;
