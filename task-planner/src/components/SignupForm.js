
import React, {useState}from "react";
import "./SignupForm.css";



export default function SignupForm()
{

    const [values,setValues] = useState(
        {
            username:"",
            email:"",
            password:"",
        }
    );

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    
const handleFormSubmit = (event) =>{

    event.preventDefault();
};
return(

    <div className="form-continer">
        <div className="app-wrapper">
    <div>
        <h2 className="title">Create Account</h2>
    </div>
    <form className="form-wrapper">
    <div className="name">
        <label className="label">User Name</label>
        <input className="input" type="text" name="Username" value={values.username}
        onChange={handleChange}
        />
    </div>
    <div className="email">
    <label className="label">Email</label>
    <input className="input" type="email" name="Email" value={values.email}
    onChange={handleChange}
    />
    </div>

    <div className="password">
    <label className="label">Password</label>
    <input className="input" type="password" name="Password" value={values.password}
    onChange={handleChange}
    />
    </div>
    <div>
        <button className="submit" onClick={handleFormSubmit}>Sign Up</button>
    </div>
    
    </form>
        </div>
    </div>
)

}