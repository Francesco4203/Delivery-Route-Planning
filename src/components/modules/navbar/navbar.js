import './navbar.css';
import React from "react"
import {Link, useMatch, useResolvedPath } from "react-router-dom"
import CustomLink from "../customLink/customLink"
import {SearchBar} from '../searchbar'
import BookData from "../../../Data.json";

export const Navbar = () => {
    return (
    <nav className="nav">
       
        <Link to="/" className="way-title">
                Wayee</Link>
        <ul>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/planning">Planning</CustomLink>
        </ul>
    </nav>
    )
}
