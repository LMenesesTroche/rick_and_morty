
import axios from 'axios';

export const ADD_FAVORITE = 'ADD_FAV';
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVED_CHARACTER';
export const REMOVED_FAVORITE = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export function addChar(char){
    return{
        type: ADD_CHARACTER,
        payload:char
    }
}
export function removedChar(id){
    return{
        type: REMOVE_CHARACTER,
        payload:id
    }
}

export function addFav(char){
    //OJO ASI SE MANDAN ACCIONES ASYNC
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try{
            let response = await axios.post(endpoint,char);
            return dispatch({
                type: ADD_FAVORITE,
                payload: response.data,
            });
        }catch(error){
            console.log(error.message);
        }
    };
}

export function removeFav(id){
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try{
            let response = await axios.delete(endpoint)
            return dispatch({
                type: REMOVED_FAVORITE,
                payload: response.data,
        });
        }catch(error){
            console.log(error.message);
        }
    };
}

export function filterCards(gender){
    return{
        type:FILTER,
        payload:gender
    }
}



export function orderCards(order){
    return{
        type:ORDER,
        payload:order
    }
}