import React from "react";
import { useState ,useEffect } from "react";
import './About.css'
import { NavLink } from "react-router-dom";
import Nav from "../Nav";
const About=()=>{
    const [data,setdata]=useState([])
    const getcoviddata=  async()=>{
      const res= await fetch('https://data.covid19india.org/data.json');
      const actualdata= await res.json();
      setdata(actualdata.statewise)
    } 
      useEffect(()=>{
        getcoviddata()
    })
      return (
        <>
          <div className='container me-5'style={{overflow:'scroll'}}>
            <div className='main-heading'>
              <h1>india covid 19</h1>
            </div>
            <div className='table-responsive'>
              <table>
              <thead className='bg-dark text-white'>
                <tr>
                  <th>State</th>
                  <th className='pe-5'>confirmed</th>
                  <th className='pe-5'>recovered</th>
                  <th className='pe-5'>deaths</th>
                  <th className='pe-5'>active</th>
                  <th className='pe-5'>lastupdatedtime</th>
                </tr>
              </thead>
              <tbody>
              {data.map((currelem,index)=>{
                  return(
                    <tr key={index}className='tro'>
                  <th className='pe-5 hover-effect'>{currelem.state}</th>
                  <td className='pe-5 hover-effect'>{currelem.confirmed}</td>
                  <td className='pe-5 hover-effect'>{currelem.recovered}</td>
                  <td className='pe-5 hover-effect'>{currelem.deaths}</td>
                  <td className='pe-5 hover-effect'>{currelem.active}</td>
                  <td className='pe-5 hover-effect'>{currelem.lastupdatedtime}</td>
                </tr>
                  )
              })}
                
              </tbody>
              </table>
            </div>
    
          </div>
           
        </>
      );
}
export default About