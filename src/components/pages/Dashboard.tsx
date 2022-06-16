import React, { useEffect } from 'react'
import { DashboardSidebar, TwoSplitColumn } from '../layouts';
import { DashboardView,  } from '../main';
import pageStyles from './pages.module.scss';
import { useAppContext } from "../../context_api/App/AppProvider";
import { useMediaQuery } from 'react-responsive';
import { SIDEBAR_TOGGLE } from '../../context_api/App/appTypes';
import { Logo } from '../sub-elements';

const Dashboard = () => {
  const isTab = useMediaQuery({
    query: '(max-width: 769px)'
  });

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
        leftVariant={`${pageStyles.leftVariant} w-full bg-white  md:w-3/12 lg:w-2/12 xl:w-1/6 ${sideBarToggle ? 'block' : 'hidden'}`} 
        rightVariant={
          `${pageStyles.rightVariant} md:w-9/12 lg:w-10/12 xl:w-5/6 md:rounded-l-xl`
        }
      >
        <DashboardSidebar />
        <DashboardView />
      </TwoSplitColumn>
    </section>
  )
}

export default Dashboard;