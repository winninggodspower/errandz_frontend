import { Outlet } from "react-router-dom";
import Alert from "./components/Alert/Alert";


function Root() {

    return (
        <>
            <Alert />
            <Outlet />
        </>
    );
}

export default Root;