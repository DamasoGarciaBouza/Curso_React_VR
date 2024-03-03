import React, { useMemo, useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([]);
    const [contador, setContador] = useState(5550);

    const guardarTareas = e => {
        e.preventDefault();
        let tareas_actualizadas = [...tareas, e.target.descripcion.value];
        setTareas(tareas_actualizadas);
    }

    const borrarTarea = (index) => {
        let nuevasTareas = tareas.filter( id => index !== id);
        setTareas(nuevasTareas);
    }

    const sumarAlContador = e => {
        setContador(contador + 1);
    }

    const contadoresPasados = (acumulacion) => {
        for(let i = 0; i <= acumulacion; i++){
            console.log("Ejecutanod acumulacion de contadores del pasado");
        }

        return `Contador manual de tareas: ${acumulacion}`
    }

    const memoContadores = useMemo(() => contadoresPasados(contador), [contador])


    return (
        <div>
            <h1>Mis Tareas</h1>
            <form onSubmit={guardarTareas}>
                <input type='text' name='descripcion' placeholder='Describe la tarea' />
                <input type='submit' value="Guardar" />
            </form>

            <h3>{memoContadores}</h3>
            <button onClick={sumarAlContador}>Sumar</button>

            <h3>Lista de tareas</h3>
            <ul>
                {
                    tareas.map((t, index) => {
                        return (
                            <li key={index}>
                                {t}
                                &nbsp;
                                <button onClick={ e => borrarTarea(index)}>ELIMINAR</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
