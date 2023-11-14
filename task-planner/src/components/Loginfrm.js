
import React, {useState}from "react";
import "./Loginfrm.css";



export default function Loginfrm()
{

    const [values,setValues] = useState(
        {
            
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
        <h2 className="title">Login</h2>
    </div>
    <form className="form-wrapper">
    
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
        <button className="submit" onClick={handleFormSubmit}>Login</button>
    </div>
    
    </form>
        </div>
    </div>
)

}