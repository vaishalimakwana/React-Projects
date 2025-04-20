import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const location = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname, setShowMenu]);
  return (
    <div
      className={`${
        showMenu ? 'left-0' : 'left-[100%]'
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col 
      justify-between bg-white px-8 pb-6 pt-16 text-black md:hidden 
      rounded-r-xl shadow-md`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="flex flex-col space-y-4 text-xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-brandnamecolor'
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
                      ? 'text-brandnamecolor'
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
                      ? 'text-brandnamecolor'
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
                      ? 'text-brandnamecolor'
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
                      ? 'text-brandnamecolor'
                      : 'hover:text-brandnamecolor transition'
                  }   pb-4`
                }
              >
                Health & Grooming
              </NavLink>
            </li>
            <li>
              <Link to="/login">
                <button className="bg-red-500 text-white px-5 py-1 rounded-md">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">Made with Love by Vaishali Makwana</div>
    </div>
  );
};

export default ResponsiveMenu;
