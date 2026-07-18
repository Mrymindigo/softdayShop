import React from 'react'
import { CiSearch } from "react-icons/ci";
import { PiHeartLight } from "react-icons/pi";
import { PiShoppingCartLight } from "react-icons/pi";

function HeaderAction() {
  return (
    <div className='flex gap-5'>
      <CiSearch size={22} color='var(--color-text)'/>
      <PiHeartLight size={22} color='var(--color-text)'/>
      <PiShoppingCartLight size={22} color='var(--color-text)'/>

      
    </div>
  )
}

export default HeaderAction
