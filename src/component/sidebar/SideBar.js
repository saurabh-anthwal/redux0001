import React from 'react';
import {useSelector} from "react-redux"

export default function SideBar() {
  const count = useSelector((state)=>state.user.message)
  return (
    <div className='sideBarDiv'>
        <div className='cart'>
            <h2>My Account-Details</h2>
            <h3>CART <span>{count}</span> </h3>
        </div>
    </div>
  )
}
