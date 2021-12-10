import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

function SignIn( {setCurrentUser} ) {

    const navigate = useNavigate()

    // const [username, setUsername] = useState([]);
    // const [password, setPassword] = useState([]);
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        password_confirmation:""
    })


    function handleChange (e) {
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }
    function handleSubmit (e){
        e.preventDefault();
        
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                response.json().then(data => {
                    setCurrentUser(data)
                    navigate('/')
                })
            } else {
                response.json().then(error => {
                    console.log(error)
                    alert("Sign In Unsuccessful")
                })
            }
        })
    }
    

    return (
        <div>
            <h1>Sign In</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                        <input type="text" name="username" value={formData.username} minLength="1" maxLength="20" onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                        <input type="password" value={formData.password} minLength="6" maxLength="15" name="password" onChange={handleChange} required />
                    <button type="submit">Submit</button>
                </form>
            </div> 
        </div>
    )
}


export default SignIn;