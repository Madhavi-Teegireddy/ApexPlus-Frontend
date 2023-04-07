import React, { useState, useEffect } from 'react'
import SideNavbar from '../Components/SideNavbar'
import style from "../Styles/Allsce.module.css"
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { IoAddCircleSharp } from 'react-icons/io5';
import { RiDeleteBin5Fill } from "react-icons/ri"
import { MdModeEdit } from "react-icons/md"


const AllScenerios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:3001/scenerio`);
        setData(res.data);
      } catch (error) {
        console.log(error);
        setData([]);
      }
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/scenerio/${id}`)
    .then((res) => {
      console.log("Deleted", res);
      // Remove the deleted item from the data state
      setData((data) => data.filter((item) => item.id !== id));
      alert("Scenerio deleted")
    })
    .catch((err) => console.log(err));
};

  return (
    <>
      <SideNavbar/>
      <div className={style.cont}>
        <div className={style.outcontent}>
          <div className={style.section}>
            <div>All Scenarios</div>
            <div> 
              <button style={{backgroundColor: "blue"}}>
                <NavLink to="/addscenerio" style={{color:"white", textDecoration:"none"}}>New Scenario</NavLink>
              </button>
              <button style={{backgroundColor: "green"}}>
                <NavLink to="/addvehicle" style={{color:"white", textDecoration:"none"}}>Add Vehicle</NavLink>
              </button>
              <button style={{backgroundColor: "orange"}}>Delete All</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Scenario ID</th>
                <th>Scenario Name</th>
                <th>Scenario Time</th>
                <th>Add Vehicle</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, i) => (
                <tr key={e.id}>
                  <td>{i+1}</td>
                  <td>{e.sname}</td>
                  <td>{e.time}s</td>
                  <td style={{color:"black", fontSize:"20px"}}>
                    <NavLink to="/addvehicle" style={{color:"black", textDecoration:"none"}}> <IoAddCircleSharp/> </NavLink></td>
                  <td style={{color:"black", fontSize:"20px"}}><MdModeEdit/></td>
                  <td style={{color:"black", fontSize:"20px"}} onClick={() => handleDelete(e.id)}><RiDeleteBin5Fill/></td>
                </tr>
              ))}
            </tbody>
          </table> 
        </div>     
      </div>
    </>
  )
}

export default AllScenerios;
