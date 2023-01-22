import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import { Form, useNavigate } from 'react-router-dom';
import { setToken } from '../../Utils/LoginUtils';

const BASE_URL = 'https://errandzbackend-production.up.railway.app';
const loginPath = BASE_URL + '/api/api-token-auth/';


const FetchUser = async (data) => {
    
    let response = await fetch(loginPath, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },

        })
        return response.json()
}

function Login(){

    let [is_loading, setLoading] =  useState(false);
    let [loginDetails, setLoginDetails] = useState({email: '', password: ''});
    let [fieldErrors, setFieldError] = useState({});
    let {user, setUser} = useContext(UserContext)
    let navigate = useNavigate();


    useEffect(()=>{
        if (user){
            return navigate('/dashboard/1');
        }    
    }, [user, navigate])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true)

        console.log({username: loginDetails.email, password: loginDetails.password});
        let response = await FetchUser({username: loginDetails.email, password: loginDetails.password})
        console.log(response)

        if (response.token){
            setUser(response.token);
            setToken(response.token);
        }else{
            setFieldError(response)
        }
        
        setLoading(false)

    }

    return (
        <>
        <h1>Login Page</h1>
        {fieldErrors.non_field_errors && fieldErrors.non_field_errors.map(error=> {
            return <div key={error} className="text-center text-danger"> {error}</div>
        })}
        <Form onSubmit={handleSubmit}>
            <div>
                <input onChange={(e)=>setLoginDetails({...loginDetails, email: e.target.value})} value={loginDetails.email} type="email" placeholder='email' required />
                { fieldErrors.username && fieldErrors.username.map(error => <p key={error} className='text-danger'>{error}</p>) }
            </div>

            <div>
                <input onChange={(e)=>setLoginDetails({...loginDetails, password: e.target.value})} value={loginDetails.password} type="password" placeholder='password' required />
                { fieldErrors.password && fieldErrors.password.map(error=><p key={error} className='text-danger'>{error}</p>) }
            </div>
            <button disabled={is_loading}>login</button>
        </Form>

        </>
    )
}

export default Login;