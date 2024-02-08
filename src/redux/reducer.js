import { ADD_FAV, REMOVE_FAV  } from "./actions";

const intialState = {
    myFavorites:[],
};


const rootReducer = (state = intialState, action) =>{
    switch(action.type){
        case ADD_FAV:
            return {...state, myFavorites:[...state.myFavorites, action.payload]}
        case REMOVE_FAV:
            return {...state, myFavorites:[...state.myFavorites.filter(char=>char.id !== action.payload)]};
        default:

            return {...state};
    }
}; 

export default rootReducer;