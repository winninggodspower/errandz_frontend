import React from 'react';
import "./editAccount.css";
import backarrow from "./../../image/backarrow.svg";
import plusIcon from "./../../images/icons/plus-icon.svg";
import profile from "./../../images/profile.jpg";
import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { getToken } from 'firebase/messaging';

function EditAccount() {
    let navigate = useNavigate();
    let { user } = useContext(UserContext)

    const [account, setAccount] = useState({ first_name: "", last_name: "", 
                                            account: { email: "", phone: "", state: "", city: "", profile_image: ""}})

    let updateAccount= (newDetails)=>{
        if (!newDetails){
            return
        }
        let updatedAccountDetails = {account}
        for (const key in account) {
            if (Object.hasOwnProperty.call(newDetails, key)) {
                updatedAccountDetails[key] = newDetails[key]

            }
        }
        setAccount(updatedAccountDetails)
    }

    const handleChange = (e) => {

        let { name, value } = e.target;
        if (name in account.account){

            setAccount({ ...account, [name]: value })
        }else{
            setAccount({ ...account, [name]: value }) 
        }

    }

    useEffect(()=>{
        if (!getToken()) {
            return navigate('/login');
        }
        else{
            updateAccount(user)
            console.log(user);
        }
    }, [user])

    return (
        <div className='h-100'>
            <div className='h-100 container mx-auto'>

                <div className='pt-5'>

                    <div className='d-flex justify-content-center my-4'>
                        <img id="account-profile-img" className="rounded-circle ratio-1x1 mx-auto" src={account.profile_image || profile} alt="profile" />
                    </div>

                </div>

                <div className=' edit-form mx-auto mt-5'>
                    <div className='row row-cols-2 g-3 mx-auto'>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>Surname</label>
                            <input type="text" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='Opeyemi' id="surname" value={account.first_name} onChange={handleChange} />
                        </div>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>First Name</label>
                            <input type="text" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='Daniel' value={account.last_name} onChange={handleChange}/>
                        </div>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>Email Address</label>
                            <input type="email" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='dami@gmail.com' value={account.account.email} onChange={handleChange} />
                        </div>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>Phone</label>
                            <input type="tel" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='07092828673' value={account.account.phone} onChange={handleChange}/>
                        </div>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>State</label>
                            <input type="text" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='River State' value={account.account.state} onChange={handleChange}/>
                        </div>
                        <div className='col mb-4 '>
                            <label className='d-block mb-2'>City</label>
                            <input type="text" className='edit-input form-control bg-transparent rounded-0 p-0 border-bottom border-0' placeholder='Yenagoa' value={account.account.city} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='col-12 mb-4'>
                        <div id='upload-id'>

                            <label className='d-block mb-2'>Valid Id</label>
                            <label className="label w-100" htmlFor="user-id-file">
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