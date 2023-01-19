import { useContext } from 'react';
import { UserContext } from '../../UserContext'
import { useNavigate } from 'react-router-dom';

function Login(){

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    if (user){
        return navigate('/dashboard/1')
    }

    return (
        <>
        <h1>Login Page</h1>
        <p>{`Hello ${user}`}</p>
        <button onClick={()=> {setUser('winning');}} >login</button>
        </>
    )
}

export default Login;