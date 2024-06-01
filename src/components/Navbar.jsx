import React from 'react';

import '../styles/navbar.scss'
import { Link } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <nav className="bg-white h-12 flex items-center shadow-md">
      <h1>
        SkylineWeather
      </h1>
      <a href="https://galoweb.online">Galoweb</a>
    </nav>
  );
};

export default Navbar;
