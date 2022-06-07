import React, { useEffect } from 'react'
import { TwoSplitColumn } from '../layouts/elements/TwoSplitColumn'
import { Wallpaper, SignInView } from '../main';
import pageStyles from './pages.module.scss';
import { useAppContext } from "../../context_api/App/AppProvider";
import { useMediaQuery } from 'react-responsive';
import { SIDEBAR_TOGGLE } from '../../context_api/App/appTypes';
import { Logo } from '../sub-elements';

const SignIn = () => {
  const isTab = useMediaQuery({
    query: '(max-width: 767px)'
  });

  console.log(isTab, "is mobile")

  //Use Context
  const {appContext, setAppContext} = useAppContext();

  const { sideBarToggle } = appContext;

  useEffect(() => {
      console.log(isTab, "fam")
      setAppContext({
        type: SIDEBAR_TOGGLE,
        payload: isTab ? false : true
      })
  }, [isTab, setAppContext])

  return (
    <section className={`3xl:container mx-auto w-full ${pageStyles.authStyle}`}>
      <TwoSplitColumn 
        leftVariant={`${pageStyles.leftVariant} w-full bg-primary md:w-5/12 lg:w-2/6`} 
        rightVariant={
          `${pageStyles.rightVariant} md:w-7/12 lg:w-4/6 md:rounded-l-xl
           ${sideBarToggle ? 'block' : 'hidden'}
          `
        }
      >
        <SignInView />
        <Wallpaper />
      </TwoSplitColumn>
    </section>
  )
}

export default SignIn