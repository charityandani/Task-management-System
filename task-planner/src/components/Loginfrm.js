
import React, {useState}from "react";
import { useNavigate } from 'react-router-dom';
import "./Loginfrm.css";




export default function Loginfrm()
{

const navigate = useNavigate();
    
        const [data,setData] = useState(
            {
        
                email:"",
                password:"",
            }
        );

    const handleChange = (event) =>{
        setData({
            ...data,
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
    <input className="input" type="email" name="Email" value={data.email} onChange={(e)=>setData({...data,email: e.target.value})}
    />
    </div>

    <div className="password">
    <label className="label">Password</label>
    <input className="input" type="password" name="Password" value={data.password} onChange={(e)=>setData({...data,password: e.target.value})}
    />
    </div>
    <div>
    
              <button className="submit"
               onClick={() => {

            navigate ("/Admin");
               }}>
                Login
              </button>
        
    </div>
    
    </form>
        </div>
    </div>
)

}