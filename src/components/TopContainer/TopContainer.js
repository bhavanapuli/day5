import React from "react";
import Search from "../Search/Search";
import Header from "../Header/Header";
import SearchItems from "../SearchItems/SearchItems";
import "./TopContainerStyles.css";
const TopContainer = (props) => {
    return (
        <section className="top-container">
            <Header />
            <Search />
            <SearchItems />
        </section>
    )
}

export default TopContainer;