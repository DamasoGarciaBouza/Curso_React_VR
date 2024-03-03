import React, { useEffect, useState } from 'react'

export const Empleados = React.memo( ({page}) => {

  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getWorkers(page);
  },[page]);//use effect se activa al modificar la prop page

  useEffect(()=> console.log("USE EFFECT - La vista de empleados se ha renderizado!"), [workers]);

  const getWorkers = async (p) => {
    const url = "https://reqres.in/api/users?page="+p;
    const petition = await fetch(url);
    const {data:workers} = await petition.json();
    console.log(workers);

    setWorkers(workers);

    console.log("Se ejecuto peticion ajax");
  }



  return (
    <div>
      <p>Mostrando pagina: {page}</p>
      <ul className='workers'>
        { workers.length > 0 &&
          workers.map(w => <li key={w.id}>{w.first_name} {w.last_name}</li>)
        }
      </ul>
    </div>
  )
})
