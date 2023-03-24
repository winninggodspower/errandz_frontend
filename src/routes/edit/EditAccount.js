import React from 'react';
import "./editAccount.css";
import backarrow from "./../../image/backarrow.svg";
import plusIcon from "./../../images/icons/plus-icon.svg";
import profile from "./../../images/profile.jpg";
import { useEffect } from 'react';

function EditAccount() {
    return (
        <div className='h-100'>
            <div className='h-100 container mx-3'>

                <div className='pt-5'>

                    <div className='d-flex justify-content-center my-4'>
                        <img id="account-profile-img" className="rounded-circle ratio-1x1 mx-auto" src={profile} alt="profile" />
                    </div>

                </div>

                <div className=' edit-form mx-auto mt-5'>
                    <div className='row row-cols-2 g-3 mx-auto'>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>Surname</label>
                            <input type="text" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='Opeyemi' id="surname" />
                        </div>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>First Name</label>
                            <input type="text" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='Daniel' />
                        </div>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>Email Address</label>
                            <input type="email" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='dami@gmail.com' />
                        </div>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>Phone</label>
                            <input type="number" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='07092828673' />
                        </div>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>State</label>
                            <input type="text" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='River State' />
                        </div>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>City</label>
                            <input type="text" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='Yenagoa' />
                        </div>
                    </div>

                    <div className='col-12 mb-4'>
                        <div id='upload-id'>

                            <label className='d-block mb-2'>Valid Id</label>
                            <label class="label w-100" for="user-id-file">
                                <div id="id-box" className='w-100 btn rounded-0 d-grid align-items-center justify-content-center'>
                                    <img src={plusIcon} />
                                </div>
                            </label>

                            <input type="file" id='user-id-file'/>
                        </div>
                    </div>

                    <div className='w-100 '>
                        <button type='submit' className='btn btn-dark w-100 rounded-0' >submit</button>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default EditAccount