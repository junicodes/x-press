import React, { useState } from 'react'
import { FaHome, FaUserFriends, FaFlag } from 'react-icons/fa';
import { ImMakeGroup } from 'react-icons/im';
import { BsCart, BsWalletFill } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { GoGraph } from "react-icons/go";
import NavTab from './NavTab';

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <ul className='h-full w-full flex flex-col py-4'>
        <NavTab icon={<FaHome color='#039BF0' />} title="Verifiers" active={true} />
        <NavTab icon={<ImMakeGroup color={active ? '#039BF0' : ''} />} title="Deals" />
        <NavTab icon={<BsCart color={active ? '#039BF0' : ''} />} title="Transaction" />
    </ul>
  )
}

export default Nav;