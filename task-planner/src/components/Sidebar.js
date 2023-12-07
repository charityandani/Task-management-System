import React from "react";
import "./Admin.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as AoIcons from "react-icons/io";
import { MdDashboard , MdTask} from "react-icons/md";
import { Link } from 'react-router-dom';



export default function Sidebar(){

    return(
<aside id="sidebar">

<div className="sidebar-title">
    <div className="sidebar-brand">
    <AoIcons.IoMdPerson className="icon"/> Admin

        </div>
        <span className="icon close_icon">x</span>
        
    </div>

<ul className="sidebar-list">

<li className="sidebar-list-item">

<Link to="/Dashboard">  <MdDashboard className="icon"/>Dashboard</Link>

</li>
<li className="sidebar-list-item">
<Link to="/TableEmp">  <FaIcons.FaUsers className="icon"/>Employee</Link>


</li>
<li className="sidebar-list-item">

<Link to="/Project">  <FaIcons.FaProjectDiagram className="icon"/>Project</Link>

</li>
<li className="sidebar-list-item">

<Link to="/Task">  <FaIcons.FaTasks className="icon"/>Task</Link>

</li>
<li className="sidebar-list-item">
<a href="">
    <MdTask className="icon"/>Task Report
</a>
</li>
<li className="sidebar-list-item">
<a href="">
    <AoIcons.IoIosLogOut className="icon"/>Logout
</a>
</li>
</ul>


</aside>



    )

}