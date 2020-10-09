import React from "react";
import "./SearchStyles.css";
import { NavLink } from "react-router-dom";

const Search = (props) => {
    return (
        <section className="search-bar">
            <input className="search" type="text" placeholder="search"></input>
            <NavLink className="nav" to="/bird"></NavLink>
        </section>
    )
}

export default Search;