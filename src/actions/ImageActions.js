import axios from 'axios';
import { apiKey } from "../api/config";
export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST'
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS'
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE'

export const fetchImagesRequest = () => {
    return{
        type:FETCH_IMAGES_REQUEST
    }
}

export const fetchImagesSuccess = (images) => {
    return{
        type:FETCH_IMAGES_SUCCESS,
        payload:images
    }
}

export const fetchImagesFailure = (error) => {
    return{
        type:FETCH_IMAGES_FAILURE,
        payload:error
    }
}

export const fetchImages = (query) => {
    return (dispatch) => {
        dispatch(fetchImagesRequest)
        axios
        .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response =>{
            const images = response.data.photos.photo;
            dispatch(fetchImagesSuccess(images))
        })
        .catch(error =>{
            const errorMsg = error.message;
            dispatch(fetchImagesFailure(errorMsg))
        })
    }
}