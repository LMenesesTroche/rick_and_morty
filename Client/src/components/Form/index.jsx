import React, { useState } from 'react';
import validation from './validations.js';  
import style from './Forms.module.css';
import image from './forms.jpg';

export default function Form({ login }) {
  // Estado local
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });

    setErrors(validation({
      ...userData,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={style.container}>
        <div className={style.image}>
            <img src={image} alt="Imagen" height={200} width={200}/>
        </div>
      <form className={style.form} onSubmit={() => login(userData)}>
        <label>Username</label>
        <input
          type='text'
          name='username'
          value={userData.username}
          onChange={handleChange}
          className={`${errors.username ? style.warning: ''} ${style.inputForm}`}
        />
        {errors.username && <span className={style.warning}>{errors.username}</span>}
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={userData.password}
          onChange={handleChange}
          className={`${errors.password ? style.warning: ''} ${style.inputForm}`}
        />
        {errors.password && <span className={style.warning}>{errors.password}</span>}
        <button type='submit' className={style.button}>Login</button>
      </form>
    </div>
  );
}
