

import React from 'react'
import { DashboardNav, Logo } from '../../sub-elements'


const DashboardSidebar = () => {
  return (
    <div className='px-2 lg:p-5 pt-0'>
        <Logo />
        <DashboardNav />
    </div>
  )
}

export default DashboardSidebar