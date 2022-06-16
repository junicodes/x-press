import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from '../styles.module.scss';
import DefaultInput from './DefaultInput';


type SearchInputProps = {
  onHandleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({onHandleSearchChange}: SearchInputProps) => {
  const [search, setSearch] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    onHandleSearchChange(e)
  }
  return (
    <DefaultInput
      type="search"
      name="search"
      label=""
      placeHolder="Name/Phone no / Location"
      handleChange={handleChange}
      value={search}
      variant="w-full h-12 pl-10 taxt-sm border-custom-gray-two rounded-md text-black-300 px-2"
      containerVariant="w-42 lg:w-72 relative"
      icon={ 
        <BsSearch
            className="absolute left-2 w-5 h-5 top-1/2 -mt-3 cursor-pointer"
            color="#c1c4c9"
        />
      }
    />
  )
}

export default SearchInput;