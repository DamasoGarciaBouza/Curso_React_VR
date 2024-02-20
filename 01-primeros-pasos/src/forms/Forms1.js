import React, {useState } from 'react'

const Forms1 = () => {

    const [fruits, pickFruit] = useState("Plátano");

    const handleChange = (event) => {

        pickFruit(event.target.value)
    }

    return (
        <form>
            <select value={fruits} onChange={handleChange}>
                <option value="Plátano">Plátano</option>
                <option value="Fresa">Fresa</option>
                <option value="Cerezas">Cerezas</option>
            </select>
        </form>
    )
}

export default Forms1;
