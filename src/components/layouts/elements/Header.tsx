import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { DefaultButton, Logo } from '../../sub-elements'

const Header = () => {

  const handleGotoAuth = () => {

  }

  return (
    <div className='py-10 sm:py-0 sm:h-36 flex flex-col sm:flex-row sm:justify-between items-center w-full'>
      <Logo />
      <div className='flex flex-row justify-start items-center pt-5 sm:pt-0'>
        <p className='mr-2 text-custom-gray text-xs md:text-sm'>Already have an account?</p>
        <DefaultButton
          labelText="Sign in"
          handleClick={handleGotoAuth}
          variant="border w-full text-sm font-semibold rounded-sm border-primary text-primary py-2 px-3 flex flex-row justify-center item-center"
          containerVariant="relative"
          isDisabled={false}
        />
      </div>
    </div>
  )
}

export default Header