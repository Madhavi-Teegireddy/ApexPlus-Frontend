import React from 'react'
import SideNavbar from '../Components/SideNavbar'
import style from "../Styles/addsce.module.css"

const HomePage = () => {
  return (
    <>
    <SideNavbar/>
    
    <div className={style.container}>
        All Vehicles
    </div>
    </>
  )
}

export default HomePage