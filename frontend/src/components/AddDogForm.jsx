// AddDogForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddDogForm = ({ onDogSubmit }) => {
    const [dogName, setDogName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dogName) {
            onDogSubmit(dogName);
            setDogName('');
        } else {
            console.error('Debe ingresar el nombre del estudiante.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={dogName} onChange={(e) => setDogName(e.target.value)} placeholder="Nombre del estudiante 👤" />
            <button type="submit">Agregar Estudiante</button>
        </form>
    );
};

AddDogForm.propTypes = {
    onDogSubmit: PropTypes.func.isRequired,
};

export default AddDogForm;