import React, { useState } from 'react';
import axios from 'axios'; 

const App = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPeople = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setPeople(response.data.slice(0, 10)); 
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>People List</h1>
      <button onClick={fetchPeople} disabled={loading}>
        {loading ? 'Loading...' : 'Get Data'}
      </button>
      {error && <p>{error}</p>}
      <ul>
        {people.map(person => (
          <li key={person.id}>
            {person.name} - {person.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
