import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { UserContext } from "../../UserContext";
import { useContext, useEffect } from "react";

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



export const RegisteredVendor = () => {
    const [userAccount, setUserAccount] = useState({ company_name: "", company_address: "" })
    const [account, setAccount] = useState({ email: "", phone: "", state: "", city: "", password: "", password2: "" })
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    let { user, setUser } = useContext(UserContext)
    const [acceptPolicy, setAcceptPolicy] = useState(true)


    const handleChange = (e) => {

        let { name, value } = e.target;
        setUserAccount({ ...userAccount, [name]: value }) || setAccount({ ...account, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let params = { ...userAccount, account: { ...account } };

        const url = "https://errandzbackend-production.up.railway.app/api/register/customer/";

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


    }

    useEffect(() => {
        if (user) {
            return navigate('/dashboard');
        }
    }, [user, navigate])

    const setPolicy = () => {
        setAcceptPolicy((acceptPolicy) => !acceptPolicy);
    }

    return <>

        <div className="">
            <div className="register mx-auto">
                <Navbar transparent={true} />
                <div className="mt-5 container text-white">
                    <h2>Register as a vendor</h2>
                    <h6>Stress Free deliveries</h6>
                </div>
            </div>
            <div className="pad account mx-auto">

                <div class="container rounded h-100 d-md-flex flex-column align-items-center justify-content-center my-5 bg-white py-5">
                    <h3 className="pb-4">Create an account</h3>
                    <form className="">

                        <div class="mb-3">
                            <input type="text" name="first_name" class="form-control" placeholder="Company Name" defaultValue={userAccount.company_name} onChange={handleChange} required />
                            {error?.account && <>{error?.account?.company_name || null}</>}

                        </div>
                        <div class="mb-3">
                            <input type="text" name="last_name" class="form-control" placeholder="Company Address" defaultValue={userAccount.company_address} onChange={handleChange} />
                            {error?.account && <>{error?.account?.company_address || null}</>}
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
                            <input type="checkbox" class="form-check-input" id="show-password" onClick={setPolicy} />
                            <label class="form-check-label" for="show-password">By clicking the button you agree to
                                Privacy policy and terms of service</label>
                        </div>
                        <div class="mb-3">
                            <button onClick={handleSubmit} class="w-100 btn btn-dark" disabled={acceptPolicy}>Register Now</button>
                        </div>
                    </form>
                    <p class="d-none d-md-block text-center mt-3">Already have an account?   <Link to={"/login"} className="text-dark text-decoration-none">Login</Link></p>
                </div>

            </div>
        </div>
    </>
}