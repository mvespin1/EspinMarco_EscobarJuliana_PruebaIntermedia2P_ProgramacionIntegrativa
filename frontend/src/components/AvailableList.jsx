// AvailableList.jsx
import PropTypes from 'prop-types';

function AvailableList({ dogs, adopters }) {
    return (
        <div>
            <h2>Estudiantes 👤</h2>
            <ul>
                {dogs.map((dog) => (
                    <li key={dog.id}>👤 {dog.name}</li>
                ))}
            </ul>
            <h2>Evaluaciones asignadas 📄</h2>
            <ul>
                {adopters.map((adopter) => (
                    <li key={adopter.id}>📄 {adopter.name}</li>
                ))}
            </ul>
        </div>
    );
}

AvailableList.propTypes = {
  dogs: PropTypes.array.isRequired,
  adopters: PropTypes.array.isRequired,
};

export default AvailableList;