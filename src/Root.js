import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function Root() {
    return (
        <>
            
            <Outlet />
        </>
    );
}

export default Root;