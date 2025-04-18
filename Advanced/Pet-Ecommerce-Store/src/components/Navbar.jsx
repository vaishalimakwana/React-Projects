import React, { useState } from 'react';
import WagHavenLogo from '../assets/Wag-Haven-Logo.png';
import { FileX, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { SquareChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ResponsiveMenu from './ResponsiveMenu';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-brandcolor fixed w-full z-50 shadow-sm top-0 shadow-gray-400">
      <div className="max-w-7xl mx-auto py-2 px-5 flex justify-between items-center">
        <img src={WagHavenLogo} alt="Wag Haven" className="md:w-40 w-32" />
        <div className="flex items-center gap-5">
          <nav className="hidden md:block">
            <ul className="flex items-center font-semibold text-xl gap-7">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-brandnamecolor border-b-8 border-brandnamecolor'
                        : 'hover:text-brandnamecolor transition'
                    }   pb-4`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dogclothing"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-brandnamecolor border-b-8 border-brandnamecolor'
                        : 'hover:text-brandnamecolor transition'
                    }   pb-4`
                  }
                >
                  Dog Clothing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/foodandtreats"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-brandnamecolor border-b-8 border-brandnamecolor'
                        : 'hover:text-brandnamecolor transition'
                    }   pb-4`
                  }
                >
                  Food & Treats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/toysandaccessories"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-brandnamecolor border-b-8 border-brandnamecolor'
                        : 'hover:text-brandnamecolor transition'
                    }   pb-4`
                  }
                >
                  Toys & Accessories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/healthandgrooming"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? 'text-brandnamecolor border-b-8 border-brandnamecolor'
                        : 'hover:text-brandnamecolor transition'
                    }   pb-4`
                  }
                >
                  Health & Grooming
                </NavLink>
              </li>
              <li>
                <Link to="/login">
                  <button className="bg-brandnamecolor text-white px-5 py-1 rounded-md">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/cart" className="relative w-10 ">
            <ShoppingCart />
            <div className="bg-brandnamecolor w-5 absolute -top-2 right-1 flex items-center justify rounded-full text-white">
              <span className="w-full text-center">0</span>
            </div>
          </Link>

          {showMenu ? (
            <SquareChevronDown
              onClick={toggleMenu}
              className="cursor:pointer transition-all md:hidden"
              size={30}
            />
          ) : (
            <Menu
              onClick={toggleMenu}
              className="cursor:pointer transition-all md:hidden"
              size={30}
            />
          )}
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
