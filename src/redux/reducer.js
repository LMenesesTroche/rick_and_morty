import { ADD_FAV, FILTER, ORDER, REMOVE_FAV  } from "./actions";

const intialState = {
    myFavorites:[],
    allCharacters:[],
};


const rootReducer = (state = intialState, {type, payload}) =>{
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                allCharacters:[...state.allCharacters, payload],
                myFavorites:[...state.myFavorites, payload],
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites:state.myFavorites.filter((char)=>char.id !== payload),
            };
        case FILTER:
            if(payload === 'All'){
                return {
                    ...state,
                    myFavorites:state.allCharacters,
                };
            }
            return {
                ...state, 
                myFavorites:state.allCharacters.filter(
                    (char)=>char.gender === payload)
                };
            
        case ORDER:
            if(payload.toUpperCase() === "A"){
                return{
                    ...state,
                    myFavorites: state.allCharacters.sort((a,b)=>
                    a.name > b.name ? 1 : -1),
                };
                
            }else {
                return{
                    ...state,
                    myFavorites:state.allCharacters.sort((a,b)=>
                    a.name < b.name ? 1 : -1
                    ),
                };
            }
            
        default:

            return state;
    }
}; 

export default rootReducer;