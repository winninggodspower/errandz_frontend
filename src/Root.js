import { Outlet } from "react-router-dom";
import Alert from "./components/Alert/Alert";
import Navbar from "./components/Navbar/Navbar";

function Root() {
    return (
        <>
            <Alert />
            <Outlet />
        </>
    );
}

export default Root;