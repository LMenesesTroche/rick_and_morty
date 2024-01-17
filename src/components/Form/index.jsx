import React, { useState } from 'react';
import validation from './validations.js';  // Asumiendo que el archivo se llama validation.js
import styles from './Forms.css';
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
    <div className='containerForm'>
        <div className="imageForm">
            <img src={image} alt="Imagen" height={200} width={200}/>
        </div>
      <form className='form' onSubmit={() => login(userData)}>
        <label>Username</label>
        <input
          type='text'
          name='username'
          value={userData.username}
          onChange={handleChange}
          className={errors.username && 'warning'}
        />
        {errors.username && <span className={styles.warning}>{errors.username}</span>}
        <label>Password</label>
        <input
          type='password'
          name='password'
          value={userData.password}
          onChange={handleChange}
          className={errors.password && styles.warning}
        />
        {errors.password && <span className={styles.warning}>{errors.password}</span>}
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
