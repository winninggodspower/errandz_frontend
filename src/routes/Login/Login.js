import { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import { Form, useNavigate } from 'react-router-dom';

const BASE_URL = 'https://errandzbackend-production.up.railway.app';
const loginPath = BASE_URL + '/api/api-token-auth/';

const LogUser = async (data) => {
    

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
    let [loginDetails, setLoginDetals] = useState({email: '', password: ''});
    let [fieldErrors, setFieldError] = useState({email: [], password: [], non_field_eror: []})
    let {user, setUser} = useContext(UserContext)
    let navigate = useNavigate();

    if (user){
        return navigate('/dashboard/1')
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log({username: loginDetails.email, password: loginDetails.password});
        let response = await LogUser({username: loginDetails.email, password: loginDetails.password})
        
        if (response.status === 200){
            console.log(response);
        }else{
            console.log('login unsuccessful')
            handleError(response)
        }
        

    }

    const handleError = (error)=> {
        console.log(error.username)
         //set the password field state if there is error in password else set it to null
         error.password ? setFieldError({password: error.password, email: fieldErrors.email})  : setFieldError(fieldErrors['email'])

        //set the email field state if there is error in email else set it to null
        error.username ? setFieldError({email: error.username, password: fieldErrors.password})  : setFieldError({email: null, password: fieldErrors.password}) 
        
    }

    return (
        <>
        <h1>Login Page</h1>
        {}
        <Form onSubmit={handleSubmit}>
            <input onChange={(e)=>setLoginDetals({email: e.target.value, password: loginDetails.password})} value={loginDetails.email} type="email" placeholder='email'/>
            { fieldErrors.email && fieldErrors.email.map(error => <p className='text-danger'>{error}</p>) }

            <input onChange={(e)=>setLoginDetals({password: e.target.value, email: loginDetails.email})} value={loginDetails.password} type="password" placeholder='password'/>
            { fieldErrors.password && <p className='text-primary'>{fieldErrors.password}</p> }
            <button disabled={is_loading}>login</button>
        </Form>
        {fieldErrors.email}

        </>
    )
}

export default Login;