import React, { useEffect, useState, useRef } from 'react'

export const Ejemplo = () => {

    const [numeroSaludo, setNumeroSaludo] = useState(0);
    const saludosEnCola = useRef(numeroSaludo);

    useEffect(() => {
        saludosEnCola.current = numeroSaludo;
        setTimeout(() => {
            //console.log("Mensajes en cola" + numeroSaludo);
            console.log("Mensajes en cola" + saludosEnCola.current);
        }, 2000)
    }, [numeroSaludo])

    const enviarSaludo = (e) => {
        setNumeroSaludo( numeroSaludo + 1);
        console.log("Saludo enviado");
    }

    return (
        
        <div>
            <hr/>
            <h1>Ejemplo con useRef</h1>
            <h2>Saludos enviados {numeroSaludo}</h2>
            <button onClick={enviarSaludo}>Enviar saludo!!</button>
        </div>
    )
}
