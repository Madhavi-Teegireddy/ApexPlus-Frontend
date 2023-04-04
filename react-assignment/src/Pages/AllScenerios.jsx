import React from 'react'
import SideNavbar from '../Components/SideNavbar'
import style from "../Styles/Allsce.module.css"
import { Link, NavLink } from 'react-router-dom'

const AllScenerios = () => {
  return (
    <>
    <SideNavbar/>
    
    <div className={style.cont}>
      
      <div className={style.outcontent}>
        <div className={style.section}>
          <div>All Scenerios</div>
          <div>
            <button style={{backgroundColor: "blue"}}><NavLink to="/addscenerio" style={{color:"white", textDecoration:"none"}}>New Scenerio</NavLink></button>
            <button style={{backgroundColor: "green"}}><NavLink to="/addvehicle" style={{color:"white", textDecoration:"none"}}>Add Vehicle</NavLink></button>
            <button style={{backgroundColor: "orange"}}>Delete All</button>
          </div>
        </div>
        <table>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
        <th>Column 4</th>
        <th>Column 5</th>
        <th>Column 6</th>
      </tr>
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
        <td>Row 1, Column 3</td>
        <td>Row 1, Column 4</td>
        <td>Row 1, Column 5</td>
        <td>Row 1, Column 6</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
        <td>Row 2, Column 3</td>
        <td>Row 2, Column 4</td>
        <td>Row 2, Column 5</td>
        <td>Row 2, Column 6</td>
      </tr>
      <tr>
        <td>Row 3, Column 1</td>
        <td>Row 3, Column 2</td>
        <td>Row 3, Column 3</td>
        <td>Row 3, Column 4</td>
        <td>Row 3, Column 5</td>
        <td>Row 3, Column 6</td>
      </tr>
        </table> 
      </div>     
    </div>
    </>
  )
}

export default AllScenerios