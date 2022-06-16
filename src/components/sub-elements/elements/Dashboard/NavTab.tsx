import React from 'react'
import { IconType } from 'react-icons';
import styles from './Style.module.scss';

type NavTabProps = {
    icon: any,
    title: string,
    active?: boolean
}

const NavTab = ({icon, title, active = false}: NavTabProps) => {
  return (
    <li className={`rounded-md my-3 py-1 ${styles.navTab} ${active && styles.navTabActive}`}>
        <a href="#" className="flex flex-row items-center h-10 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span className="inline-flex items-center justify-center h-10 w-12 text-sm lg:text-lg text-gray-400 hover:text-gray-800">
            {icon}
        </span>
        <span className="text-sm font-medium">
            {title}
        </span>
        </a>
    </li>
  )
}

export default NavTab