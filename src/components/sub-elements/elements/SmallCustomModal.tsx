
import React from 'react'
import DefaultButton from './DefaultButton'
import DefaultImage from './DefaultImage'
import { iconPending } from "../../../utils/images";
import { useAppContext } from "../../../context_api/App/AppProvider";
import { MODAL_INFO } from "../../../context_api/App/appTypes";


type SmallCustomModalProps = {
  icon?: string | null,
  titleHeader: string,
  info: string,
  faintColor: string,
  btnText: string
}

const SmallCustomModal = ({icon = null, titleHeader, info, faintColor, btnText}: SmallCustomModalProps) => {

  //Use Context
  const { setAppContext } = useAppContext();

  return (
   <div className='flex justify-center items-center'>
     <div className='h-80 w-96 bg-white fixed border z-50 mt-56 rounded-md'>
     <div className='flex flex-col justify-center items-center w-full px-6'>
        {
          icon && (
            <DefaultImage
              src={iconPending}
              variant={"w-20 h-20"}
              handleChange={() => {}}
              alt="Image Upload"
              value={""}
              containerVariant={"mt-5 mb-1"}
            />
          )
        }
        <h2 className="text-2xl text-primary" style={{color: faintColor}}>{titleHeader}</h2>
        <p className="text-sm text-custom-gray mt-5 text-center">
         {info}
        </p>
        <DefaultButton
          labelText={btnText}
          handleClick={() => {
            setAppContext({
                type: MODAL_INFO,
                payload: {
                  status: false,
                  icon: "",
                  titleHeader: "",
                  info: "",
                  faintColor: "",
                  btnText: ""
                } 
            });
          }}
          variant="border w-full h-12 rounded-sm bg-primary hover:primary_hover text-white mt-2 flex flex-row justify-center item-center pt-3"
          containerVariant="relative w-full mt-5"
          isDisabled={false}
        />
     </div>
    </div>
   </div>
  )
}

export default SmallCustomModal