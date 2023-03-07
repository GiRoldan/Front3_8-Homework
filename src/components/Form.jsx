import React, { useState } from 'react';
import './Form.css'

const Form = () => {
    const [datos, setDatos] = useState({
        nombreCompleto: '',
        edad: '',
        pokeFav: ''
    })

    const [show, setShow] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('La info se envio');
        console.log(event);
        if(datos.nombreCompleto.length >0 && datos.edad >=18) setShow(true);
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='form'>
            <h3>✨ Bienvenidos! 😊✨</h3>
            <h1>Registro de usuario</h1>
            <label>Ingresa tu nombre completo: </label>
            <input type="text" onChange={(event) => setDatos({...datos, nombreCompleto: event.target.value})} />
            <br />
            <label>Ingresa tu edad: </label>
            <input type="text" onChange={(event) => setDatos({...datos, edad: event.target.value})} />
            <br />
            <label>Ingresa tu Pokemon favorito: </label>
            <input type="text" onChange={(event) => setDatos({...datos, pokeFav: event.target.value})} />
            <br />
            <button>Registarme</button>
        </form>

        {
            show
            ?
            <div className='registro'>
                <h3>Los datos ingresados son: </h3>
                <p>Nombre y apellido: {datos.nombreCompleto}</p>
                <p>Edad: {datos.edad}</p>
                <p>Pokemon favorito: {datos.pokeFav}</p>
            </div>
            :
            null
        }

        
    </>
  )
}

export default Form
