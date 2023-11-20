import React from "react";
import "./Admin.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as AoIcons from "react-icons/io";
import { MdDashboard , MdTask} from "react-icons/md";



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
<a href="">
    <MdDashboard className="icon"/>Dashboard
</a>
</li>
<li className="sidebar-list-item">
<a href="">
    <FaIcons.FaUsers className="icon"/>Employee
</a>
</li>
<li className="sidebar-list-item">
<a href="">
    <FaIcons.FaProjectDiagram className="icon"/>Project
</a>
</li>
<li className="sidebar-list-item">
<a href="">
    <FaIcons.FaTasks className="icon"/>Tasks
</a>
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