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
        <div className='containerOfDetails'>
            <div  className='info'>
                <h1 className='titulo'>{character.name}</h1>
                <h2 className='datos'>Status| {character.status}</h2>
                <h2 className='datos'>Species| {character.species}</h2>
                <h2 className='datos'>Gender| {character.gender}</h2>
                {/* <h2>Origin: {character.name.origin}</h2> */}
                
            </div>
           <div className='image'>
               <img src={character.image} alt="Imagen de la criatura" height={400} width={400}/>           
           </div>
        </div>

    )
    }