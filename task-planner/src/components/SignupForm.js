
import React, {useState}from "react";
import "./SignupForm.css";



export default function SignupForm()
{

    const [data,setData] = useState(
        {
            username:"",
            email:"",
            password:"",
        }
    );


    

  
return(

    <div className="form-continer">
        <div className="app-wrapper">
    <div>
        <h2 className="title">Create Account</h2>
    </div>
    <form className="form-wrapper">
    <div className="usename">
        <label className="label">User Name</label>
        <input className="input" type="text" name="username" value={data.username}onChange={(e)=>setData({...data,username: e.target.value})}/>
    </div>
    <div className="email">
    <label className="label">Email</label>
    <input className="input" type="email" name="Email" value={data.email} onChange={(e)=>setData({...data,email: e.target.value})}/>
    
    </div>

    <div className="password">
    <label className="label">Password</label>
    <input className="input" type="password" name="Password" value={data.password} onChange={(e)=>setData({...data,password: e.target.value})}/>
    
    
    </div>
    <div>
        <button className="submit" >Sign Up</button>
    </div>
    
    </form>
        </div>
    </div>
)

}