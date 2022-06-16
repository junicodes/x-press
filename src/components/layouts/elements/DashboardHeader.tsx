
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from "../../../context_api/App/AppProvider";
import SearchInput from '../../sub-elements/elements/SearchInput';
import { alertIcon } from "../../../utils/images";
import { DefaultImage } from '../../sub-elements';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";



const DashboardHeader = () => {

   //Use Context
   const { appContext, setAppContext } = useAppContext();
   const { sideBarToggle, signupPayload } = appContext;

    //Variable
    const iconSty = 'w-4 h-4 text-custom-gray-five';

  const toggleModal = () =>{
    setAppContext({
        type: 'SIDEBAR_TOGGLE',
        payload: !sideBarToggle
    })
  }

  return (
    <div className='md:h-20 w-full flex flex-col md:flex-row justify-between items-center bg-white px-8'>
        <div className='flex flex-row justify-start items-center space-x-1'>
          <p className='text-2xl font-semibold'>Verifiers </p>
          <span style={{background: '#F2FAFF', color: '#039BF0' }} className="text-xs font-semibold inline-flex items-center p-1 rounded-full dark:bg-blue-200 dark:text-blue-800">
            11
         </span>
        </div>
        <div className="rounded-md my-5 md:my-0 flex justify-between md:justify-end space-x-2 items-center px-5 h-12 order-first md:order-last w-full">
            <FaBars onClick={toggleModal} className='block md:hidden' />
            <div className='flex space-x-4 justify-start items-center'>
                <DefaultImage
                    src={alertIcon}
                    variant={"w-5 h-6"}
                    handleChange={() => {}}
                    alt="Alert icon"
                    value={""}
                    containerVariant={""}
                />
                <DefaultImage
                    src={`https://randomuser.me/api/portraits/men/61.jpg`}
                    variant={"rounded-full border border-gray-100 shadow-sm w-10 h-10"}
                    handleChange={() => {}}
                    alt="user image"
                    value={""}
                    containerVariant={""}
                />
                <BsChevronDown 
                    className={iconSty} 
                />
            </div>
        </div>
    </div>
  )
}

export default DashboardHeader