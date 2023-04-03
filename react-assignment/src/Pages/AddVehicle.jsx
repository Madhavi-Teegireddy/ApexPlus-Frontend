import React from 'react'
import style from "../Styles/addsce.module.css"
import SideNavbar from '../Components/SideNavbar'


const AddVehicle = () => {
  return (
    <>
    <SideNavbar/>
    
    <div className={style.container}>
        Add Vehicle
    </div>
    </>
  )
}

export default AddVehicle