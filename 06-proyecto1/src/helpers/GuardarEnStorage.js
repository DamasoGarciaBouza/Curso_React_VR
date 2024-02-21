export const GuardarEnStorage = (key,item) => {
    //Conseguir elementos ya guardados en local storage
    let items = JSON.parse(localStorage.getItem(key));
    console.log("Items:");
    console.log(items);

    //Comprobar si es un array
    if (Array.isArray(items)) {
      items.push(item);
    } else {
      items = [item];
    }

    console.log(items);

    //Guardar en local storage

    localStorage.setItem(key, JSON.stringify(items));
  }