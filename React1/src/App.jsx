//import { useEffect, useState } from "react";
//const Counter = () => {
  
  //const [count, setCount] = useState(0);
  //const[loading,setLoading]=useState(true);
  //const display=false;
  //const[multipliedValue,setMultipliedValue]=useState(1);

 // const countButtonClick = () => {
   // setCount(count + 1);
   // setMultipliedValue(multipliedValue*2);
   // console.log(count);
  //}; 
  //setTimeout(()=>{
   // setLoading(false);
  //},5000);

  //return (
   // <>
      //<h1>HI</h1>
      //<h2>SURYANSH SINGH</h2>
      //<h3>This Button is clicked {count} times</h3>
      //<h3>Multiplied Value:{multipliedValue}</h3>
      //<button onClick={() => countButtonClick()}>This is a Button</button>
    //</>
  //);
//};

//export default Counter;




                                                           //DATA FETCH

// import React, { useState } from 'react';

// function DataTable() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removeData = (id) => {
//     setData(data.filter(item => item.id !== id));
//   };

//   return (
//     <div>
//       <button onClick={fetchData}>Get Data</button>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
      
//       {data.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.username}</td>
//                 <td>{item.email}</td>
//                 <td>
//                   <button onClick={() => removeData(item.id)}>Remove</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default DataTable;





import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
