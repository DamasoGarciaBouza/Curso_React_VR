import React, { useRef } from 'react'

export const Formulario = () => {
    
    //const nameInput = useRef("Fulano");
    const nameInput = useRef();
    const surnameInput = useRef();
    const emailInput = useRef();

    const miCaja = useRef();

    const show = e => {
        e.preventDefault();
        console.log(nameInput.current.value);

        console.log(miCaja);

        //miCaja.current.classList.add("green");
        // destructuracion para acceder directamente a current de miCaja
        let { current: caja} = miCaja;
        caja.classList.add("green");
        caja.innerHTML = "<h2>Formulario enviado</h2>";


    }

    return (
        <div>

            <h1>Formulario</h1>

            <div id="miCaja" ref={miCaja}>
                <h2>Pruebas con Useref</h2>
            </div>

            <form onSubmit={show}>
                <input type='text' placeholder='Nombre' ref={nameInput} />
                <br/>
                <input type='text' placeholder='Apellidos' ref={surnameInput} />
                <br/>
                <input type='email' placeholder='Email' ref={emailInput} />
                <br/>
                <input type='submit' submit="Enviar" />
            </form>

            <button onClick={() => nameInput.current.select()}>Empezar a rellenar formulario</button>

        </div>
    )
}
