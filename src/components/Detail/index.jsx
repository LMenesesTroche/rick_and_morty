import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {useParams } from 'react-router-dom'
import styles from './detail.modules.css'
export default function Detail(){
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div className='container'>
            <div className='info'>
            <h1> Este es el detail</h1>
            <h2>Nombre: {character.name}</h2>
            <h2>Status: {character.status}</h2>
            <h2>Species: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
            {/* <h2>Origin: {character.name.origin}</h2> */}

            </div>
            
            {/* <image>{character.image}</image> */}
        </div>

    )
    }