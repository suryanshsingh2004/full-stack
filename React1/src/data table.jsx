import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/get-data'); 
      setPeople(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>People Information</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Get Data'}
      </button>
      {people.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {people.map(person => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
