// App.jsx
import { useState, useEffect } from 'react';
import AdoptionForm from './components/AdoptionForm';
import AdoptionList from './components/AdoptionList';
import AvailableList from './components/AvailableList';
import AddDogForm from './components/AddDogForm';
import AddAdopterForm from './components/AddAdopterForm';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [adopters, setAdopters] = useState([]);
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogsResponse = await fetch('http://localhost:3001/dogs');
        const dogsData = await dogsResponse.json();
        setDogs(dogsData);

        const adoptersResponse = await fetch('http://localhost:3001/adopters');
        const adoptersData = await adoptersResponse.json();
        setAdopters(adoptersData);

        const adoptionsResponse = await fetch('http://localhost:3001/adoptions');
        const adoptionsData = await adoptionsResponse.json();
        console.log('Adopciones:', adoptionsData);
        setAdoptions(adoptionsData);
      } catch (error) {
        console.error('Error al cargar datos:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleAdoptionSubmit = async (dogId, adopterId) => {
    try {
      const response = await fetch('http://localhost:3001/adoptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dogId,
          adopterId,
        }),
      });

      if (response.ok) {
        const newAdoption = await response.json();
        setAdoptions((prevAdoptions) => [...prevAdoptions, newAdoption]);

        // Mostrar una alerta con los datos de la nueva adopción
        alert(`¡Adopción realizada con éxito!\nID: ${newAdoption.id}\nPerro: ${newAdoption.dogId}\nAdoptante: ${newAdoption.adopterId}`);
      } else {
        throw new Error('Error al enviar la solicitud de adopción.');
      }
    } catch (error) {
      console.error('Error en la solicitud de adopción:', error.message);
      throw error;
    }
  };

  const handleDogSubmit = (dogName) => {
    setDogs([...dogs, { id: dogs.length + 1, name: dogName }]);
  };

  const handleAdopterSubmit = (adopterName) => {
    setAdopters([...adopters, { id: adopters.length + 1, name: adopterName }]);
  };

  return (
    <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
      <h1 style={{ marginBottom: '15px', textAlign: 'center', color: 'black' }}>PRUEBA INTERMEDIA</h1>

      <p style={{ fontSize: '16px', lineHeight: '1.5', color: 'darkgray' }}>
        Integrantes.
      </p>

      <ul style={{ listStyleType: 'square', paddingLeft: '20px', color: 'green' }}>
        <li>Juliana Escobar</li>
        <li>Marco Espín</li>
      </ul>

      <h1 style={{ marginBottom: '15px' }}>Creación de Evaluación</h1>
      <AddAdopterForm onAdopterSubmit={handleAdopterSubmit} />

<br />

      <label>Pregunta 1</label>
      <select>
        <option value="">Selecciona una opción</option>
        <option value="opcion1">¿Cuál es la capital de Francia?</option>
        <option value="opcion2">¿Cuál es el símbolo químico del oxígeno?</option>
        <option value="opcion2">¿En qué año se fundó la ONU?</option>
        <option value="opcion2">¿Quién escribió "Cien años de soledad"?</option>
        <option value="opcion2">¿Cuál es el componente principal del aire?</option>
      </select>

      <br />

      <label>Pregunta 2</label>
      <select>
        <option value="">Selecciona una opción</option>
        <option value="opcion1">¿Cuál es la capital de Francia?</option>
        <option value="opcion2">¿Cuál es el símbolo químico del oxígeno?</option>
        <option value="opcion2">¿En qué año se fundó la ONU?</option>
        <option value="opcion2">¿Quién escribió "Cien años de soledad"?</option>
        <option value="opcion2">¿Cuál es el componente principal del aire?</option>
      </select>

      <br />

      <label>Pregunta 3</label>
      <select>
        <option value="">Selecciona una opción</option>
        <option value="opcion1">¿Cuál es la capital de Francia?</option>
        <option value="opcion2">¿Cuál es el símbolo químico del oxígeno?</option>
        <option value="opcion2">¿En qué año se fundó la ONU?</option>
        <option value="opcion2">¿Quién escribió "Cien años de soledad"?</option>
        <option value="opcion2">¿Cuál es el componente principal del aire?</option>
      </select>

      <br />


      <label>Pregunta 4</label>
      <select>
        <option value="">Selecciona una opción</option>
        <option value="opcion1">¿Cuál es la capital de Francia?</option>
        <option value="opcion2">¿Cuál es el símbolo químico del oxígeno?</option>
        <option value="opcion2">¿En qué año se fundó la ONU?</option>
        <option value="opcion2">¿Quién escribió "Cien años de soledad"?</option>
        <option value="opcion2">¿Cuál es el componente principal del aire?</option>
      </select>

      <br />


      <label>Pregunta 5</label>
      <select>
        <option value="">Selecciona una opción</option>
        <option value="opcion1">¿Cuál es la capital de Francia?</option>
        <option value="opcion2">¿Cuál es el símbolo químico del oxígeno?</option>
        <option value="opcion2">¿En qué año se fundó la ONU?</option>
        <option value="opcion2">¿Quién escribió "Cien años de soledad"?</option>
        <option value="opcion2">¿Cuál es el componente principal del aire?</option>
      </select>


      <h1>Agregar Estudiante</h1>
      <AddDogForm onDogSubmit={handleDogSubmit} />

      <h1>Asignación de evaluaciones a un estudiante</h1>
      <AdoptionForm dogs={dogs} adopters={adopters} onAdoptionSubmit={handleAdoptionSubmit} />
      <h1>Presentación de Evaluaciones en Linea</h1>
      <AdoptionList adoptions={adoptions} dogs={dogs} adopters={adopters} />
      <h1>Disponibilidad de Evaluaciones y Estudiantes</h1>
      <AvailableList dogs={dogs} adopters={adopters} />



    </div>
  );
};

export default App;
