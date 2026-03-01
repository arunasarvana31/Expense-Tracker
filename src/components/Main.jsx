import { Outlet } from "react-router"
import NavBar from "./Navbar"

const Main = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
};
export default Main;