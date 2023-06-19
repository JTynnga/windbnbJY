import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Stays from './components/Stays/Stays'

function App() {
  const [city, setCity] = useState(0)
  const [guests, setGuests] = useState(0)

  const setSearch = (city, guests) => {
    //creamos Array de ciudades 
    if (city != 0) {
      const newCity = city.split(",")
      setCity(newCity[0])
    }
    else setCity(0)
    setGuests(guests)
  }



  return (
    <div className="App" style={{ fontFamily: `Montserrat, sans-serif` }}>
      <Navbar search={setSearch} />
      <Stays city={city} guests={guests} />
    </div>
  )
}

export default App




//import { useEffect, useState } from "react";
//import "./App.css";

//function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  //const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  //const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    //try {
   //   const res = await fetch("stays.json");
   //   const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
  //    setData(resJson);
  //  } catch (error) {
  //    console.log(error);
 //   }
 // };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  //useEffect(() => {
  //   getData();
 // }, []);

 /* // Puedes ver la variable data en consola.
  //console.log(data);
 // return (
    <>
 /* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. }
      {data.map((el, i) => {
        return <h1 key={i}>{el.city}</h1>;
      })}
    </>
  );
}*/

/*export default App;*/
