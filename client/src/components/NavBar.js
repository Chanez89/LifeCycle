import { NavLink } from "react-router-dom";


function NavBar() {

    

    return (
        <div>
            
            <NavLink
                to="/"
                className=""
                style={{ textDecorationLine: "none" }}
                ><h3>Home</h3>
            </NavLink>
            <NavLink
                to="/Bikes"
                className=""
                style={{ textDecorationLine: "none" }}
                ><h3>Shop Bikes</h3>
            </NavLink>
            <NavLink
                to="/AccessoriesTools"
                className=""
                style={{ textDecorationLine: "none" }}
                ><h3>Shop Accessories/Tools</h3>
            </NavLink> 
            <NavLink
                to="/Services"
                className=""
                style={{ textDecorationLine: "none" }}
                ><h3>Services</h3>
            </NavLink>
            <NavLink
                to="/ShoppingCart"
                className=""
                style={{ textDecorationLine: "none" }}
                ><h3>Cart</h3>
            </NavLink>

            {/* add ternary to show/notshow when signed in/ signed out */}

            <NavLink
                to="/Login"
                className=""
                style={{ textDecorationLine: "none" }}
                ><h3>Sign In</h3>
            </NavLink>
            <NavLink
                to="/SignUp"
                className=""
                style={{ textDecorationLine: "none" }}
                ><h3>Sign Up</h3>
            </NavLink>
            <NavLink
                to="/Logout"
                className=""
                style= {{ textDecorationLine: "none" }}
                ><h3>Sign Out</h3>
            </NavLink>
            
        </div>
    )
}


export default NavBar;