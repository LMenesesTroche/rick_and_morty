import styles from './Forms.css'
import image from './forms.jpg'
import React,{useState} from 'react'

export default function Form () {
    const [errors, setErrors] = useState({});
    const handleValidation  = (form,setErrors,errors) =>{
    

        if(!form.email) setErrors({...errors,email:"Email vacio"}) 
        else {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email))setErrors({...errors,email:""}) 
        else setErrors({...errors,email:"Email invalido"});
    }
    const handeSubmit = (e)=>{
        e.preventDefault();
        handleValidation();
    };
    };
    return(
        <form className="containerForm">
            <div className='imageForm'>
                <img src={image} alt="RickyMorty" height={150} width={150}/>
            </div>
            <div className='form'>
                <label>Email</label>
                <input className='inputForm'></input>
                <label>Password</label>
                <input className='inputForm'></input>   

            </div>
            <button className='buttonSubmit'>Submit</button>
            
        </form>
    )
}