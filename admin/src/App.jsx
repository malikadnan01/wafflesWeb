// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Sidebar from './components/Sidebar/Sidebar'
// import { Route, Routes } from 'react-router-dom'
// import Add from './pages/Add/Add'
// import List from './pages/List/List'
// import Orders from './pages/Orders/Orders'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//   return (
//     <div className='app'>
//       <ToastContainer />
//       <Navbar />
//       <hr />
//       <div className="app-content">
//         <Sidebar />
//         <Routes>
//           <Route path="/add" element={<Add />} />
//           <Route path="/list" element={<List />} />
//           <Route path="/orders" element={<Orders />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App  


import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import Login from './pages/Login'; // ✅ New Login Page
import ProtectedRoute from './ProtectedRoute'; // ✅ Auth Wrapper
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* ✅ Public Route */}
        <Route path="/login" element={<Login />} />

        {/* ✅ Protected Routes */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="app">
                <Navbar />
                <hr />
                <div className="app-content">
                  <Sidebar />
                  <Routes>
                    <Route path="/add" element={<Add />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="*" element={<List />} /> {/* default */}
                  </Routes>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
