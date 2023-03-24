import { getToken, clearToken } from '../../Utils/LoginUtils';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


function Logout() {
    let { setUser } = useContext(UserContext);
    let navigate = useNavigate();

    let logoutUser = () => {
        clearToken();
        setUser(null);
        return navigate("/login")
    }

    return (
        <>
            {getToken() ? logoutUser() : <Navigate to="/login" />}
        </>
    )

}

export default Logout;