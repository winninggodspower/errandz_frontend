import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { BASE_URL } from "../../globalVariable";
import { useContext, useEffect } from "react";
import { UserContext, AlertContext } from "../../UserContext";


async function requestdata(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)
    });
    return response
}



export const RegisteredCustomer = () => {
    const [userAccount, setUserAccount] = useState({ first_name: "", last_name: "" })
    const [account, setAccount] = useState({ email: "", phone: "", state: "", city: "", password: "", password2: "" })
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    let { user } = useContext(UserContext)
    const [acceptPolicy, setAcceptPolicy] = useState(true)
    let { addAlert } = useContext(AlertContext)

    useEffect(() => {
        if (user) {
            return navigate('/dashboard');
        }
    }, [user, navigate])

    const handleChange = (e) => {

        let { name, value } = e.target;
        setUserAccount({ ...userAccount, [name]: value }) || setAccount({ ...account, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let params = { ...userAccount, account: { ...account } };

        const url = BASE_URL + '/api/register/customer/';

        requestdata(url, params)
            .then((data) => {
                if (data.status === 200) {
                    data.json()
                        .then((d) => {
                            addAlert('success', 'successfully created a rider account')
                            navigate("/login");
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


    }

    const setPolicy = () => {
        setAcceptPolicy((acceptPolicy)=> !acceptPolicy);
    }

    return <>

        <div>

            <div className="register mx-auto">
                <Navbar transparent={true} />
                <div className="pt-5 container text-white">
                    <h2>Register as a Customer</h2>
                    <h6>Stress Free deliveries</h6>
                </div>
            </div>
            <div className="pad account mx-auto" id="customerForm">
                <div class="container rounded h-100 d-md-flex align-items-center justify-content-center my-5 bg-white py-5 account">
                    <form className="px-4 pt-5">

                        <div class="mb-3">
                            <input type="text" class="form-control" name="first_name" placeholder="First Name" defaultValue={userAccount.first_name} onChange={handleChange} required />
                            {error && <span className="text-danger">{error?.first_name || null}</span>}
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" name="last_name" placeholder="Last Name" defaultValue={userAccount.last_name} onChange={handleChange} />
                            {error && <span className="text-danger">{error?.last_name || null}</span>}
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" name="email" placeholder="E-mail" onChange={handleChange} />
                            {error?.account && <span className="text-danger">{error?.account?.email || null}</span>}
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" name="phone" placeholder="Phone Number" onChange={handleChange} />
                            {error && <span className="text-danger">{error?.account?.phone || error?.phone || null }</span>}
                        </div>

                        <div class="mb-3">
                            <input type="password" class="form-control" name="password" placeholder="Password" onChange={handleChange} />
                            {error && <span className="text-danger">{error?.account?.password || error?.password || null}</span>}
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" name="password2" placeholder="Confirm Password" onChange={handleChange} />
                            {error && <span className="text-danger">{error?.account?.password2 || error?.password2 || null}</span>}
                        </div>
                        <div className="d-flex flex-row gap-2  position-relative justify-content-between">
                            <span className="d-flex flex-column flex-fill">
                                <input type="text" class="form-control" placeholder="State" name="state" onChange={handleChange} />
                                {error?.account && <span className="text-danger">{error?.account?.state || null}</span>}
                            </span>
                            <span className="d-flex flex-column flex-fill">
                                <input type="text" class="form-control" placeholder="City" name="city" onChange={handleChange} />
                                {error?.account && <span className="text-danger">{error?.account?.city || null}</span>}
                            </span>
                        </div>

                        <div class="mb-3 form-check w-75 mx-auto align-items-center p-3">
                            <input type="checkbox" checked={!acceptPolicy} class="form-check-input" id="show-password" onClick={setPolicy}/>
                            <label class="form-check-label" for="show-password">By clicking the button you agree to
                               <Link to={"/privacy"} className="text-primary text-decoration-none"> Privacy policy</Link> and <Link to={"/privacy"} className="text-primary text-decoration-none"> terms of service</Link></label>
                        </div>
                        <div class="mb-3">
                            <button onClick={handleSubmit} class="w-100 btn btn-dark" disabled={acceptPolicy}>Register Now</button>
                            <p class="d-none text-center  d-fall mb-3 mt-3">Already have an account?   <Link to={"/login"} className="text-primary text-decoration-none">Login</Link></p>
                        </div>
                    </form>
                </div>
                <p class="d-none d-md-block text-center mt-3">Already have an account?   <Link to={"/login"} className="text-primary text-decoration-none">Login</Link></p>
            </div>
        </div>
    </>
}