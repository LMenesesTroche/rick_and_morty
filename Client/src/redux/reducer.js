import { ADD_CHARACTER, ADD_FAVORITE, FILTER, ORDER, REMOVED_FAVORITE, REMOVE_CHARACTER  } from "./actions";

const initialState = {
    myFavorites:[],
    allCharacters:[],
    filteredCharacters:[]
}
const rootReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case REMOVE_CHARACTER:
            return{
                ...state,
                allCharacters: state.allCharacters.filter((char)=>char.id !== payload)
            }
        case ADD_CHARACTER:
            return{
                ...state,
                allCharacters:[...state.allCharacters,payload],
                filteredCharacters:[...state.allCharacters,payload],
            }
        case ADD_FAVORITE:

            return {
                ...state,
                myFavorites: state.allCharacters.filter((char) => char.id !== payload)
            }
        
        case REMOVED_FAVORITE:
            return{
                ...state,
                myFavorites:state.myFavorites.filter((char)=>char.id !== payload),
            };

        case FILTER:
        return{
            ...state,
            //Antes era filtercharacters                    allCharacters
            myFavorites: payload !== 'todos' ? state.myFavorites.filter((char)=>char.gender === payload) : state.allCharacters 
        }


        case ORDER:
            const sortedChars = state.myFavorites.slice().sort((a, b)=>{
                //se ordena de la Asc
                if (payload === "A") {
                    return a.id - b.id
                }else{
                    return b.id - a.id
                }
            })
            return{
                ...state,
                myFavorites: sortedChars
            }
    
        default:
            return{...state};
    }
}

export default rootReducer;