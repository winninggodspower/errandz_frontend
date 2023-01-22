import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function Root() {
    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    );
}

export default Root;