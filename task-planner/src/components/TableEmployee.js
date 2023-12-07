import React from "react";
import Data from "../data.json"
import { useState } from "react";
import "./Table.css";

export default function TableEmployee()
{

    

    const [data,setData] = useState(Data)
    return(
      
<main  className="main-container">

    <div className="title">
    <h3>EMPLOYEE LIST</h3>
    </div>

            
        <div className="tableWrap">
            <div>
            <AddMember/>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </thead>
            {
                data.map((current) =>(
                    <tr>
                        <td>{current.id}</td>
                        <td>{current.name}</td>
                        <td>{current.email}</td>
                        <td>{current.phone}</td>
                        <td>
                            <button className="edit">Edit</button>
                            <button className="delete">Delete</button>
                        </td>
                    </tr>
                )
                )
            }
            </table>
            </div>
        </div>
    
        
        </main>
    )

}


function AddMember(){

    return(
        <form className="addForm">
            <input type="text" name="Id" placeholder="Enter employeeID"/>
            <input type="text" name="name" placeholder="Enter Name"/>
            <input type="text" name="email" placeholder="Enter email"/>
            <input type="text" name="phone" placeholder="Enter phone number"/>
            <button>Add</button>
        </form>
    )
}


