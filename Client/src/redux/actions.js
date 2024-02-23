export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER_CARDS";


export const addFav = (payload) =>{
    return {type:ADD_FAV,payload,};
};

export const removeFav = (id) =>{
    return {type:REMOVE_FAV,payload:id,};
};

export const filterCards = (payload) =>{
    return {type: FILTER, payload:payload};
};

export const orderCards = (payload) =>{
    return {type: ORDER, payload};
};
