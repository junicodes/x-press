
import React, { useState } from 'react'
import { DashboardHeader, DashboardHeaderTwo } from '../../layouts'
import { SelectDropDown } from '../../sub-elements';
import Table from '../../sub-elements/elements/Dashboard/TableList'
import mainStyles from "../main.module.scss";

const rows = [
  { name: '1'},
  { name: '2'
  },
  {
      name: '3'
  },
  {
      name: '4'
  }
  ,
  {
      name: '5'
  },
  {
      name: '4'
  },
  {
      name: '5'
  },
  {
      name: '6'
  },
  {
      name: '6'
  },
  {
      name: '7'
  },
  {
      name: '8'
  },
  {
      name: '9'
  },
  {
      name: '10'
  }
]

const DashboardView = () => {

  const [row, setRow] = useState("10")

  const handleSelectChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: string
  ) => {
    setRow(JSON.parse(data))
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  return (
    <div className={`h-full rounded-lg`}>
        <DashboardHeader />
        <DashboardHeaderTwo />
        <div className={`${mainStyles.tableList} overflow-auto mx-8`} style={{boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.06)'}}>
          <Table />
        </div>
        <div className='bg-white h-20 mx-8 flex flex-row justify-between items-center px-10' style={{boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.06)'}}>
          <div className='flex flex-row justify-start items-center space-x-2'>
            <p>Rows per page</p>
            <SelectDropDown
                label=""
                placeHolder=""
                onHandleChange={handleSelectChange}
                value={row}
                error={``}
                options={rows}
                variant={`w-full relative h-8 border bg-white rounded-md text-black-300 px-2 flex flex-row justify-start items-center`}
                containerVariant="w-20 relative cursor-pointer"
                optionHeight={'h-20'}
            />
          </div>
          <div className='flex flex-row justify-start items-center space-x-2'>
            <p className='cursor-pointer'>Previous</p>
            <p className='flex space-x-2'>
              <span className='text-primary'>1</span>
              <span>2</span>
            </p>
            <p className='text-primary cursor-pointer'>Next</p>
          </div>
        </div>      
    </div>
  )
}

export default DashboardView