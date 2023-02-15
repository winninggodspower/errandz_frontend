import React from 'react'
import homeButton from "../../images/homebutton.svg"
import profileButton from "../../images/profilebutton.svg"
import bellButton from "../../images/bellbutton.svg"
import { Link } from 'react-router-dom'
import "./bottomnav.css"

export default function BottomNav() {
  return (
    <div className='fixed-bottom bg-white py-2 d-none' id='botom-nav'>

      <div className='d-flex justify-content-around container'>
        <Link to={"/dashboard"} className='text-dark text-decoration-none text-center'>
          <img src={homeButton} />
          <span className='bottomnav-text d-block mt-1 text-dark'>Home</span>
        </Link>

        <Link to={"/profile"} className='text-dark text-decoration-none text-center'>
          <img src={profileButton} />
          <span className='bottomnav-text d-block mt-1 '>Profile</span>
        </Link>

        <Link to={"/notification"} className='text-dark text-decoration-none text-center'>
          <img src={bellButton} />
          <span className='bottomnav-text d-block mt-1 '>Update</span>
        </Link>
      </div>

    </div>
  )
}
