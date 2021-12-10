import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NavBar({currentUser, setCurrentUser}) {

    const navigate = useNavigate()
    
    function handleLogoutClick () {
            fetch("/logout", {
                method: "DELETE"
            }).then((response) => {
                if (response.ok) {
                    setCurrentUser(null)
                }
            })
            navigate('/')
    }

    return (
        <div className="navbar-nav">
            { !currentUser ? 
        
            <>
            {/* null User navbar with ability to sign in/signup */}
            <NavLink
                to="/"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Home</h3>
            </NavLink>
            <NavLink
                to="/Bikes"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Shop Bikes</h3>
            </NavLink>
            <NavLink
                to="/AccessoriesTools"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Shop Accessories/Tools</h3>
            </NavLink> 
            <NavLink
                to="/Services"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Services</h3>
            </NavLink>
            <NavLink
                to="/ShoppingCart"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Cart</h3>
            </NavLink>
            <NavLink
                to="/Login"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Sign In</h3>
            </NavLink>
            <NavLink
                to="/SignUp"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Sign Up</h3>
            </NavLink>
            </>
            : 
            <>
            {/* Signed in user Navbar with ability to Sign Out.*/}
            <NavLink
                to="/"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Home</h3>
            </NavLink>
            <NavLink
                to="/Bikes"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Shop Bikes</h3>
            </NavLink>
            <NavLink
                to="/AccessoriesTools"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Shop Accessories/Tools</h3>
            </NavLink> 
            <NavLink
                to="/Services"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Services</h3>
            </NavLink>
            <NavLink
                to="/ShoppingCart"
                className="link"
                style={{ textDecorationLine: "none" }}
                ><h3>Cart</h3>
            </NavLink>
            <div
                className="link"
                style= {{ textDecorationLine: "none" }}
                onClick={handleLogoutClick}
                ><h3>Sign Out</h3>
            </div>
            </>
             }

        </div>  
            
        
    )
}


export default NavBar;