import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const conseguirDatosFormulario = e => {
        e.preventDefault();

        const [nombre, apellidos, sexo, bio, enviar] = e.target;

        let usuario = {
            nombre: nombre.value,
            apellidos: apellidos.value,
            sexo: sexo.value,
            bio: bio.value,
            enviar: enviar.value
        }

        console.log(usuario);

        setUsuario(usuario);
    }

    const cambiarDatos = e => {
        let name_del_input = (e.target.name);
        let usuario_para_modificar = usuario;

        //usuario_para_modificar[name_del_input] = e.target.value;

        setUsuario(estado_previo => 
            ({
                ...estado_previo, [name_del_input]: e.target.value
            })
        );

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
                <input type='text' name='nombre' placeholder='Nombre' 
                onChange={cambiarDatos}/>
                <input type='text' name='apellido' placeholder='Apellido' 
                onChange={cambiarDatos}/>
                <select name='sexo' onChange={cambiarDatos}>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea name='bio' placeholder='Biografía' onChange={cambiarDatos}></textarea>
                <br></br>
                <input type='submit' value="Enviar" name='enviar'/>
            </form>
        </div>
    )
}
