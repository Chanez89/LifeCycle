import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp( {setCurrentUser} ) {
    // const [username, setUserName] = useState([]);
    // const [password, setPassword] = useState([]);

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username:"",
        password:"",
        password_confirmation:""
    })


    function handleChange (e) {
        setFormData({
            ...formData,[e.target.name]:e.target.value,
        })
    }

    function handleSubmit (e){
        e.preventDefault();
        
        fetch("/users", {
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
                    alert("Signup Unsuccessful")
                })
            }
        })
    }
    


    return (
        <div>
            <h3>Let's make an account!</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" onChange={handleChange} minLength="1" maxLength="20" value={formData.username} style={{ display: 'block' }}/>

                    <label>Password </label>
                    <input type="password" name="password" minLength="6" maxLength="15"  onChange={handleChange} value={formData.password} style={{ display: 'block' }} required />

                    <label>Password Confirmation </label>
                    <input type="password" name="password_confirmation" minLength="6" maxLength="15"  onChange={handleChange} value={formData.password_confirmation} style={{ display: 'block' }} required />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default SignUp;