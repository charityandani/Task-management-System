import React from "react";
import "./Admin.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as AoIcons from "react-icons/io";


export default function Header(){

    return(
        <header className="header">
            <div className="menu-icon">
                <AoIcons.IoMdMenu className="icon"/>

            </div>

            <div className="header-left">
            <AoIcons.IoMdSearch className="icon" />
            </div>

            <div className="header-right">
            <AoIcons.IoMdNotifications className="icon"/>
            <FaIcons.FaEnvelope className="icon"/>
            <AoIcons.IoMdPerson className="icon"/>
            </div>


        </header>
    )
}