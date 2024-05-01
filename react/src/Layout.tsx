import Nav from "./layout/Nav.tsx";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <div className="container">
                <Nav/>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;