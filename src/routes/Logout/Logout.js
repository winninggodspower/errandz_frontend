import { getToken, clearToken } from '../../Utils/LoginUtils';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Logout() {
    let { user, setUser } = useContext(UserContext);
    let navigate = useNavigate();

    let logoutUser = () => {
        clearToken();
        setUser(null);
        return navigate("/")
    }

    return (
        <>
            {getToken() ? logoutUser() : <Navigate to="/" />}
        </>
    )

}

export default Logout;