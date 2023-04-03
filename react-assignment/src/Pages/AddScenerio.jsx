import React from 'react'
import style from "../Styles/addsce.module.css"
import SideNavbar from '../Components/SideNavbar'

const AddScenerio = () => {
  return (
    <>
    <SideNavbar/>

    <div className={style.cont}>

        <div className={style.outcontent}>
            <h2 className={style.heading}>Add Scenerio</h2>
            <div className={style.content}>

                {/* edited form */}
                <div className={style.container}>
    <div className={style.content}>
      <form action="">
        <div className={style.details}>
         
          <div className={style.box}>
            <label>Scenerio Name</label>
            <input type="text" required/>
          </div>
          <div className={style.box}>
            <label>Scenerio Time (seconds)</label>
            <input type="text" required/>
          </div>
          
        </div>
        
      </form>
    </div>
  </div>
     
            

            </div>
        </div>

        <div className={style.btn}>
            <button style={{backgroundColor:"green", color:"white"}}>Add</button>
            <button style={{backgroundColor:"orange", color:"white"}}>Reset</button>
            <button style={{backgroundColor:"blue", color:"white"}}>Go Back</button>
        </div>
    </div>

    

   
    </>
  )
}

export default AddScenerio