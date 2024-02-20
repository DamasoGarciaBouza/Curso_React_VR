import React from 'react';
import PropTypes from 'prop-types';

//Podemos añadir valores por defecto a los parametros inline, o indicarlos en las default props

const Componente2 = ({distancia = 50, pais, objetoCualquiera}) => {
  //destructuramos usando las propiedades individuales y el objeto


  /*En lugar de una div podemos usar simplemente las etiquetas vacías 
  - esto es la sintaxis abreviada de un Fragment, que no requiere importarlo? -*/
  return (
    <>Componente 2:
      <span>{distancia}</span>
      <span>{pais}</span>
      <p>Objeto: {JSON.stringify(objetoCualquiera)}</p>      
      Name: <em>{objetoCualquiera.name}</em> - 
      House color: <em>{objetoCualquiera.houseColor}</em> -       
      Weight: <em>{objetoCualquiera.weight}</em>        
    </>
  )
}

Componente2.propTypes = {//Las advertencias sobre prop types las vemos en la consola
  distancia: PropTypes.number.isRequired,
  pais: PropTypes.string,
  objetoCualquiera: PropTypes.object.isRequired,
  weight: PropTypes.string,
}

Componente2.defaultProps = {
  pais: "Alemania"
}

export default Componente2;