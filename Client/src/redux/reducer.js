import { ADD_FAVORITE, FILTER, ORDER, REMOVED_FAVORITE  } from "./actions";

const initialState = {
    myFavorites:[],
    allCharacters:[],
    filteredCharacters:[]
}

const rootReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ADD_FAVORITE:
            return {
                ...state,
                allCharacters: state.allCharacters.filter((char)=>char.id !== payload)
            }
        
        case REMOVED_FAVORITE:
            return{
                ...state,
                myFavorites:state.myFavorites.filter((char)=>char.id !== payload),
            };
        case FILTER:
        return{
            ...state,
            filteredCharacters: payload !== 'todos' ? state.allCharacters.filter((char)=>char.gender === payload) : state.allCharacters 
        }

        case ORDER:
            const sortedChars = state.filteredCharacters.slice().sort((a, b)=>{
                //se ordena de la Asc
                if (payload === "A") {
                    return a.id - b.id
                }else{
                    return b.id - a.id
                }
            })
        return{
            ...state,
            filteredCharacters: sortedChars
            
        }
    
        default:
            return{...state};
    }
}

export default rootReducer;