import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosFormulario = e => {
        e.preventDefault();

        const [nombre, apellidos, sexo, bio] = e.target;

        let usuario = {
            nombre: nombre.value,
            apellidos: apellidos.value,
            sexo: sexo.value,
            bio: bio.value
        }

        console.log(usuario);

        setUsuario(usuario);
    }

    return (
        <div>
            <h1>Formularios con React</h1>
            {usuario.bio && usuario.bio.length >= 1 &&
                (
                <div className='info_usuario label'>
                    {usuario.nombre} {usuario.apellidos} es un {usuario.sexo} y su biografía es:
                    {usuario.bio}
                </div>
                )
            }

            <form onSubmit={conseguirDatosFormulario}>
                <input type='text' name='nombre' placeholder='Nombre' />
                <input type='text' name='apellido' placeholder='Apellido' />
                <select name='sexo'>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name='bio' placeholder='Biografía'></textarea>
                <br></br>
                <input type='submit' value="Enviar" />
            </form>
        </div>
    )
}
