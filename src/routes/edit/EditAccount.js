import React from 'react'
import "./editAccount.css"
import backarrow from "./../../image/backarrow.svg"
import profile from "./../../images/profile.jpg"

function EditAccount() {
  return (
    <div className='h-100'>
        <div className='h-100'>
            <div className='position-relative pt-5'>
                <img src={backarrow} alt='solo pics' className='position-absolute left-0' style={{ width: "50px", height: "50px" }} />
                <img className="rounded-circle mx-auto" id="profile-img" src={profile} alt="profile " style={{ width: "100px", height: "100px" }} />
            </div>
            <div className=' edit-form row gap-3'>
                <div className='row gap-3 '>
                    <div className='col'>
                        <label>Surname</label>
                        <input type="text" placeholder='Opeyemi' id="surname" />
                    </div>
                    <div className='col'>
                        <label>First Name</label>
                        <input type="text" placeholder='Daniel' />
                    </div>
                </div>
                <div className='row gap-3'>
                    <div className='col'>
                        <label>Country Code</label>
                        <input type="number" placeholder='+234' />
                    </div>
                    <div className='col'>
                        <label>Phone</label>
                        <input type="number" placeholder='07092828673' />
                    </div>
                </div>
                <div className='row gap-3'>
                    <div className='col'>
                        <label>Email Address</label>
                        <input type="email" placeholder='dami@gmail.com' />
                    </div>
                    <div className='col'>
                        <label>Home Address</label>
                        <input type="text" placeholder='Daniel' />
                    </div>
                </div>
                <div className='row gap-3'>
                    <div className='col'>
                        <label>Language</label>
                        <input type="text" placeholder='English, Yoruba, Igbo' />
                    </div>
                    <div className='col'>
                        <label className='d-block'>Valid Id</label>
                        <label class="label">
                            <input type="file" required/>
                            <span>Select a file</span>
                        </label>
                    </div>
                    <button type='submit' className='btn btn-dark my-4 mb-5 container-fluid container' >submit</button>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default EditAccount