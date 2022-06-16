
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from "../../../context_api/App/AppProvider";
import { DefaultButton, SelectDropDown } from '../../sub-elements';
import SearchInput from '../../sub-elements/elements/SearchInput';
import { State } from "../../../utils/state";
import { FiPlus } from 'react-icons/fi';

const verifiers = [
    {
        name: 'All'
    },
    {
        name: 'Active Verifier'
    },
    {
        name: 'Pending Verifier'
    },
    {
        name: 'Deactivated Verifier'
    }
]

const DashboardHeader = () => {

   const [verifier, setVerifier] = useState<'Active Verifier' | 'Pending Verifier' | 'Deactivated Verifier' | 'All'>('All');
   
   //Use Context
   const { appContext, setAppContext } = useAppContext();
   const { sideBarToggle, signupPayload } = appContext;

  const handleSelectChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: string
  ) => {
    setVerifier(JSON.parse(data))
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  return (
   <>
   <div className='md:h-28 w-full flex flex-col md:flex-row justify-between items-center px-8 pt-10 md:pt-2'>
     <div className=''>
        <SelectDropDown
                label=""
                placeHolder=""
                onHandleChange={handleSelectChange}
                value={verifier}
                error={``}
                options={verifiers}
                variant={`w-full relative h-12 border bg-white rounded-md text-black-300 px-2 flex flex-row justify-start items-center`}
                containerVariant="w-40 lg:w-72 relative cursor-pointer"
                optionHeight={'auto'}
            />
        </div>

        <div className="rounded-md flex justify-between md:justify-end space-x-4 px-5 order-first md:order-last">
            <SearchInput onHandleSearchChange={handleSearchChange}/>
            <DefaultButton
                labelText={'Add New Verifier'}
                handleClick={() => console.log("add file")}
                variant="w-full h-12 text-xs lg:text-md rounded-md bg-primary hover:primary_hover text-white flex flex-row justify-center item-center pt-4"
                containerVariant="relative w-48 px-2 lg:w-48 cursor-pointer"
                isDisabled={false}
                icon={ 
                    <FiPlus
                        className="left-2 w-4 h-4 lg:w-5 lg:h-5 -mt-1"
                        color="#ffffff"
                    />
                }
            />
        </div>
    </div>
    <p className='px-8 font-semibold text-lg pb-3'>Hello, {signupPayload?.business_name}</p>
   </>
  )
}

export default DashboardHeader