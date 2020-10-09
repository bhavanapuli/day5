import { FETCH_IMAGES_FAILURE, FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS } from "../actions/ImageActions"

const initialState = {
    loading:false,
    images:[],
    error:''
}

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IMAGES_REQUEST:
        return { ...state, loading: true }
      case FETCH_IMAGES_SUCCESS:
        return { images: action.payload, loading: false, error:'' }
      case FETCH_IMAGES_FAILURE:
        return { ...state, loading: false, error:action.payload }
      default:
        return state
    }
}

export default imagesReducer;


  