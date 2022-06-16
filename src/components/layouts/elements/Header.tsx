import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Navigate, useNavigate } from 'react-router-dom'
import { DefaultButton, Logo } from '../../sub-elements'

const Header = () => {


   //navigation
   const navigate = useNavigate();

  const handleGotoAuth = () => {
    window.location.pathname === '/' ? navigate("/sign-in") : navigate("/")
  }

  console.log(window.location.pathname, 'pathnname')

  return (
    <div className='py-10 sm:py-0 sm:h-36 flex flex-col sm:flex-row sm:justify-between items-center w-full'>
      <Logo />
      <div className='flex flex-row justify-start items-center pt-5 sm:pt-0'>
        <p className='mr-2 text-custom-gray text-xs md:text-sm'>
          {
            window.location.pathname == '/' && 'Already have an account?'
          }
          {
            window.location.pathname == '/sign-in' && 'New to Xpress Rewards?'
          }
          
        </p>
        <DefaultButton
          labelText={window.location.pathname === '/' ? 'Sign In' : 'Sign Up'}
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