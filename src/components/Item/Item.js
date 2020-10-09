import React, { useContext } from "react";
import { PhotoContext } from "../../context/PhotoContext";
import './ItemStyles.css'
const Item = (props) => {
    const { images, loading, runSearch } = useContext(PhotoContext);
    runSearch(props.searchTerm);

    const display = () => {
        return images.map(image => {
            let farm = image.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            return <img className= "images" src={url} alt="image" />
        })
    }

    return (
        <section className="items">
            <div>{props.searchTerm} Pictures</div>
            <div className="image-grid">{loading ? "hello" : display()}</div>
        </section>

    )
}

export default Item;