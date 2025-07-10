// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username === 'admin' && password === '1234') {
//       localStorage.setItem('auth', 'true');
//       navigate('/');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '100px' }}>
//       <h2>Login to Admin</h2>
//       <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (username === 'admin' && password === '1234') {
//       localStorage.setItem('auth', 'true');
//       navigate('/list');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Yummy Waffles Admin Login</h2>
//         <input
//           type="text"
//         //   placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//           autoComplete="off"
//         />
//         <input
//           type="password"
//         //   placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="off"
//         />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'yummywaffle' && password === 'Admin@123') {
      localStorage.setItem('auth', 'true');
      navigate('/list');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Yummy Waffles Admin Login</h2>
        <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="new-username"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
