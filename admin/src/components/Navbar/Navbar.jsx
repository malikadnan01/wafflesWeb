// import React from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <img className='logo' src={assets.newlogo} alt="" />
//       {/* <img className='profile' src={assets.profile_image} alt="" /> */}
//     </div>
//   )
// }
// export default Navbar


import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div className='navbar'>
      <img className='logo' src={assets.newlogo} alt="" />
      
      <button className='logout-button' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
