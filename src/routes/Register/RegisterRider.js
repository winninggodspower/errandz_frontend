import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css"
import Navbar from "../../components/Navbar/Navbar";
import errandzid from "../../images/erranzid.png";
import { BASE_URL } from "../../globalVariable";
import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import {requestdata} from '../../Utils/useFetch';


export const RegisteredRider = () => {
    const [userAccount, setUserAccount] = useState({ first_name: "", last_name: "" })
    const [account, setAccount] = useState({ email: "", phone: "", state: "", city: "", password: "", password2: "" })
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    let { user, setUser } = useContext(UserContext);
    const [acceptPolicy, setAcceptPolicy] = useState(true)
    

    const handleChange = (e) => {

        let { name, value } = e.target;
        setUserAccount({ ...userAccount, [name]: value }) || setAccount({ ...account, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let params = { ...userAccount, account: { ...account } };
        console.log(params)

        const url = "https://errandzbackend-production.up.railway.app/api/register/rider/";

        requestdata(url, params)
            .then((data) => {
                if (data.status === 200) {
                    data.json()
                        .then((d) => {
                            setTimeout(() => {
                                navigate("/login")
                            }, 3000);
                        })

                } else if (data.status === 400) {
                    data.json()
                        .then(d => {
                            setError(d)
                            console.log(d)

                        })
                }

            })
            .catch((e) => console.log(e))


    };

    useEffect(() => {
        if (user) {
            return navigate('/dashboard');
        }
    }, [user, navigate])

    const setPolicy = () => {
        setAcceptPolicy((acceptPolicy)=> !acceptPolicy);
    }

    return <>
       
        <div className="">
            <div className="bg-k">
            <Navbar transparent={true} />
            <div className="container row mx-auto py-2 px-0">
                <div className="col text-white align-items-center my-auto">
                    <h2 className="text-white fs-1 fw-bolder">Love Cycling?</h2>
                    <p className="text-white fs-4 fw-small">Make cool cash by riding bicycles</p>
                </div >
                <div className="col p-5 d-flex justify-content-center align-items-center pe-4">
                    <span className=""><img src={errandzid} alt="" /></span>
                </div>
            </div>
            </div>
       
            <div className="pad account mx-auto">
                <div class="container rounded h-100 d-md-flex align-items-center justify-content-center my-5 bg-white py-5 account">
                    <form className="">

                        <div class="mb-3">
                            <input type="text" class="form-control" name="first_name" placeholder="First Name" defaultValue={userAccount.first_name} onChange={handleChange} required />
                            {error?.account && <p>{error?.account?.first_name || null}</p>}
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" name="last_name" placeholder="Last Name" defaultValue={userAccount.last_name} onChange={handleChange} />
                            {error?.account && <>{error?.account?.last_name || null}</>}
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" name="email" placeholder="E-mail" onChange={handleChange} />
                            {error?.account && <>{error?.account?.email || null}</>}
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" name="phone" placeholder="Phone Number" onChange={handleChange} />
                            {error?.account && <>{error?.account?.phone || null}</>}
                        </div>

                        <div class="mb-3">
                            <input type="password" class="form-control" name="password" placeholder="Password" onChange={handleChange} />
                            {error && <>{error?.account?.password || error?.password || null}</>}
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" name="password2" placeholder="Confirm Password" onChange={handleChange} />
                            {error && <>{error?.account?.password2 || error?.password2 || null}</>}
                        </div>
                        <div className="d-flex flex-row gap-2  position-relative justify-content-between">
                            <span className="d-flex flex-column flex-fill">
                                <input type="text" class="form-control" placeholder="State" name="state" onChange={handleChange} />
                                {error?.account && <>{error?.account?.state || null}</>}
                            </span>
                            <span className="d-flex flex-column flex-fill">
                                <input type="text" class="form-control" placeholder="City" name="city" onChange={handleChange} />
                                {error?.account && <>{error?.account?.city || null}</>}
                            </span>
                        </div>

                        <div class="mb-3 form-check w-75 mx-auto align-items-center p-3">
                            <input type="checkbox" class="form-check-input" id="show-password" onClick={setPolicy}/>
                            <label class="form-check-label" for="show-password">By clicking the button you agree to
                                Privacy policy and terms of service</label>
                        </div>
                        <div class="mb-3">
                            <button onClick={handleSubmit} class="w-100 btn btn-dark" disabled={acceptPolicy}>Register Now</button>
                        </div>
                    </form>
                </div>
                <p class="d-none d-md-block text-center mt-3">Already have an account?   <Link to={"/login"} className="text-dark text-decoration-none"> Login</Link></p>
            </div>
        </div>
    </>
}