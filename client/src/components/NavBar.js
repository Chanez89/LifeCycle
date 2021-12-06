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
            <NavLink
                to="/SignIn"
                className=""
                style={{ textDecorationLine: "none" }}
                ><h3>Sign In/Sign Up</h3>
            </NavLink>
            
        </div>
    )
}


export default NavBar;