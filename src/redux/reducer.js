import { combineReducers } from "redux";

const initialState = {
    time:[],
    arts:[],
    texts:[],
    language: "ESP"
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOAD_DATA':
            return {
              ...state,
              time: action.payload
            };
        case 'LOAD_ARTICLES':
            return {
                ...state,
                arts: action.payload
            }
        case 'LOAD_TEXTS':
            return {
                ...state,
                texts: action.payload
            }
        case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
      
        default: return state;
        }
}

export default combineReducers({rootReducer})