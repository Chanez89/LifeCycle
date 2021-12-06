import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div>
            <p>NavBar</p>
            <NavLink
                to="/"
                className=""
                style={{ textDecorationLine: "none" }}
                ><h3>Home</h3>
            </NavLink>
            
        </div>
    )
}


export default NavBar;