import React from "react";
import { NavLink } from "react-router-dom";
import "./SearchItemsStyles.css";

const SearchItems = (props) => {
    return (
        <ul>
            <li >
                <NavLink className="items" to="/mountain">Mountain</NavLink>
            </li>
            <li>
                <NavLink className="items" to="/beach">Baeches</NavLink>
            </li>
            <li>
                <NavLink className="items" to="/bird">Birds</NavLink>
            </li>
            <li>
                <NavLink className="items" to="/food">Food</NavLink>
            </li>
        </ul>
    )
}

export default SearchItems;