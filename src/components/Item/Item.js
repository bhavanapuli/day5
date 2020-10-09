import React,{useEffect} from "react";
import {connect} from "react-redux";
import {fetchImages} from "../../actions/ImageActions";
import './ItemStyles.css'

const Item = ({dispatch,searchTerm,images,loading,error}) => {
    
    useEffect(()=>{
        dispatch(fetchImages(searchTerm));
    },[dispatch,searchTerm])

    const display = () => {
        if (loading) return <p>Loading Images...</p>
        if (error) return <p>Unable to display Images.</p>
        return images.map(image => {
            let farm = image.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            return <img className= "images" src={url} alt="" />
        })
    }
    return (
        <section className="items">
            <div>{searchTerm} Pictures</div>
            <div className="image-grid">{display()}</div>
        </section>
        
    )
}

const mapStateToProps = state => {
    return{
        images:state.images,
        loading:state.loading,
        error:state.error
    }
}

export default connect(mapStateToProps)(Item);