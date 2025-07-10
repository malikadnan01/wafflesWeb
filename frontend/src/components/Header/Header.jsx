// import React from 'react'
// import './Header.css'

// const Header = () => {
//     return (
//         <div className='header'>
//             <div className='header-contents'>
//                 <h2>Order your favourite food here</h2>
//                 <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
//                 <button>View Menu</button>

//             </div>
//         </div>
//     )
// }

// export default Header
import React from 'react';
import './Header.css';

const Header = ({ menu, setMenu }) => {
  const handleViewMenuClick = () => {
    if (setMenu) setMenu("menu"); // update menu state if function is provided

    const section = document.getElementById("explore-menu");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Welcome to Yummy Waffles</h2>
        <p>
          We specialize in freshly made waffles, and that’s just the beginning! Come indulge in our range of delicious shakes, coffee, bubble tea, mojitos, ice creams, cakes, brownies, and hot chocolate — all crafted to satisfy your cravings and lift your mood.

Whether you're catching up with friends, treating your family, or simply taking a sweet break from your day, Yummy Waffles promises a warm ambiance and unforgettable flavors.
        </p>
        <button
          onClick={handleViewMenuClick}
          className={menu === "menu" ? "active" : ""}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
