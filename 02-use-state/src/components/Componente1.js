import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Componente1 = ({ currentYear }) => {

  const [year, setYearNow] = useState(currentYear);

  const nextYear = e => setYearNow(year + 1);

  const formerYear = e => setYearNow(year - 1);

  const changeYear = e => {
    let data = e.target.value;
    if (Number.isInteger(+data)) {//Equivalente a parseInt?
      setYearNow(data);
    } else {
      setYearNow(currentYear);      
      e.target.value = "Error, volviendo a año actual";
    }

  }

  return (
    <div>
      <h4>Año actual: {year}</h4>
      <p>
        <button onClick={formerYear}>ANTERIOR</button>
        &nbsp;
        <button onClick={nextYear}>SIGUIENTE</button>
      </p>
      <p>
        <input type='text' onChange={changeYear} placeholder='Cambia el año' size='25'/>
      </p>
    </div>
  )
}

Componente1.propTypes = {
  year: PropTypes.number
}

export default Componente1;