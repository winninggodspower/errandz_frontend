import React from 'react'
import "./editAccount.css"
import backarrow from "./../../image/backarrow.svg"
import profile from "./../../images/profile.jpg"

function EditAccount() {
  return (
    <div className='h-100'>
        <div className='h-100'>
            <div className='position-relative pt-5 container'>
                <img src={backarrow} alt='solo pics' className='position-absolute left-0' style={{ width: "50px", height: "50px" }} />
                <div className='d-flex justify-content-center align-items-center'>
                <img className="rounded-circle mx-auto" id="profile-img" src={profile} alt="profile " style={{ width: "100px", height: "100px" }} />

                </div>
            </div>
            <div className=' edit-form row  gap-1 gap-md-2 ps-md-5'>
                <div className='row gap-1 m-0 p-0 w-100  ' >
                    <div className='col'>
                        <label>Surname</label>
                        <input type="text" placeholder='Opeyemi' id="surname" style={{width:"120px"}} />
                    </div>
                    <div className='col '>
                        <label>First Name</label>
                        <input type="text" placeholder='Daniel' style={{width:"120px"}}/>
                    </div>
                </div>
                <div className='row gap-1 gap-md-3 m-0 p-0'>
                    <div className='col'>
                        <label>Country Code</label>
                        <input type="number" placeholder='+234' style={{width:"120px"}}/>
                    </div>
                    <div className='col '>
                        <label>Phone</label>
                        <input type="number" placeholder='07092828673' style={{width:"120px"}}/>
                    </div>
                </div>
                <div className='row gap-1 gap-md-3 m-0 p-0'>
                    <div className='col'>
                        <label>Email Address</label>
                        <input type="email" placeholder='dami@gmail.com' style={{width:"120px"}}/>
                    </div>
                    <div className='col '>
                        <label>Home Address</label>
                        <input type="text" placeholder='Daniel' style={{width:"120px"}}/>
                    </div>
                </div>
                <div className='row gap-1 gap-md-3 m-0 p-0'>
                    <div className='col'>
                        <label>Language</label>
                        <input type="text" placeholder='English, Yoruba, Igbo' style={{width:"150px"}}/>
                    </div>
                    <div className='col w-100'>
                        <label className='d-block'>Valid Id</label>
                        <label class="label">
                            <input type="file" required/>
                            <span>Select a file <i className='fa fa-plus'></i></span>
                        </label>
                    </div>
                    <div className='w-100 w-md-50 mx-auto d-flex justify-content-center align-items-center'>
                    <button type='submit' className='btn btn-dark mx-auto w-75 h-75' >submit</button>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default EditAccount