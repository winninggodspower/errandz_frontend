import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import { Form, Link, useNavigate } from 'react-router-dom';
import { setToken } from '../../Utils/LoginUtils';
import Footer from "../../components/Footer/Footer"
import "./login.css"
import Navbar from '../../components/Navbar/Navbar';
import { BASE_URL } from '../../globalVariable';
import { getUserDetails } from '../../Utils/AccountUtils';
import { AlertContext } from '../../UserContext';
import { ThreeDots } from 'react-loader-spinner';

const loginPath = BASE_URL + '/api/api-token-auth/';


const FetchUser = async (data, errorFunc) => {

    let response = await fetch(loginPath, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },

    })
        .catch((error) => {
            errorFunc(error);
        })

    if (response) {
        return response.json()
    }
}

function Login() {

    let [is_loading, setLoading] = useState(false);
    let [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
    let [fieldErrors, setFieldError] = useState({});
    let { user, setUser } = useContext(UserContext);
    let { addAlert } = useContext(AlertContext)
    let [show, setShow] = useState(false)
    let navigate = useNavigate();


    useEffect(() => {
        if (user) {
            return navigate('/dashboard');
        }
    }, [user, navigate])

    const showPassword = () => {
        setShow((show) => !show)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        let response = await FetchUser({ username: loginDetails.email, password: loginDetails.password }, (error) => {
            setLoading(false);
            addAlert('danger', `${error}`)
            console.log(error);
        })

        if (response) {
            if (response.token) {
                setToken(response.token);
                let currentUserDetails = await getUserDetails()
                setUser(currentUserDetails);
                addAlert('success', `successfully logged in as ${currentUserDetails.first_name} `)
            } else {
                setFieldError(response)
            }
        }

        setLoading(false)
        setLoginDetails({ ...loginDetails, password: '' })

    }

    return (
        <>
            <Navbar transparent={false} />
            <div class="container h-100 d-md-flex align-items-center my-5">

                <div id="box-container" class="mx-auto my-4" >
                    <h1 class="text-center d-none d-md-block">Sign into your account</h1>


                    <div id="form-container" class="px-4 py-5 px-md-5 mx-3">
                        <h2 class="text-center d-md-none mb-3 fs-5">Sign Into your Account</h2>
                        {fieldErrors.non_field_errors && fieldErrors.non_field_errors.map(error => {
                            return <div key={error} className="text-center text-danger"> {error}</div>
                        })}

                        <Form>
                            <div class="mb-3">
                                <input type="email" class="form-control" id="email" value={loginDetails.email} placeholder="Email" onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} />
                                {fieldErrors.username && fieldErrors.username.map(error => <p key={error} className='text-danger'>{error}</p>)}
                            </div>
                            <div class="mb-3">
                                <input type={show ? "text" : "password"} class="form-control" id="password" value={loginDetails.password} placeholder="Password" onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />
                                {fieldErrors.password && fieldErrors.password.map(error => <p key={error} className='text-danger'>{error}</p>)}
                            </div>
                            <div class="d-none d-md-flex justify-content-between">
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="show-password" onChange={showPassword} />
                                    <label class="form-check-label" for="show-password">show password</label>
                                </div>

                                <div>
                                    <span><a href="/forgot-password" class="text-dark text-decoration-none">forgot password?</a></span>
                                </div>
                            </div>

                            <button type="submit" onClick={handleSubmit} class="btn btn-dark d-flex justify-content-center w-100" disabled={is_loading}>
                                {is_loading ? <ThreeDots
                                    height="90%"
                                    radius="9"
                                    color="#ffffff"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                /> : "Sign In"}
                            </button>
                        </Form>
                    </div>

                    <p class="d-none d-md-block text-center mt-3">Don't have an account?  <Link to={"/register_as"} className="text-dark text-decoration-none">Sign Up</Link></p>

                </div>
            </div>
        </>
    )
}

export default Login;